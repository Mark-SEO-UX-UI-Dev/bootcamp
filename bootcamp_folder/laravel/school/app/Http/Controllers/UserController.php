<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Session;
use DB;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $student = new Student;
        $student->first_name = $request->input("first_name");
        $student->last_name = $request->input("last_name");
        $student->birthdate = $request->input("birthdate");
        $student->year_level = 1;
        $student->gender = $request->input("gender");
        $student->mobile_number = $request->input("mobile_number");
        $student->email_address = $request->input("email");
        $student->date_enrolled = $request->input("date_enrolled");
        $student->province = $request->input("province");
        $student->save();

        $user = new User;
        $user->first_name = $student->first_name;
        $user->last_name = $student->last_name;
        $user->email = $student->email_address;
        $password = strtolower(strrev($student->last_name) . '' .strval($student->student_id));
        $user->password = Hash::make($password);
        $user->role = "user";
        $user->student_id = $student->student_id;
        $user->save();

        return redirect("/admin/register")->with('success', 'Student added!');
    }

    public function showRegister()
    {
        return view('register');
    }

    public function showProfile()
    {
        if (Session::has('user_id')){
            $s = Student::query()
            ->select(DB::raw('*'))
            ->where("student_id", "=", Session::get("student_id"))
            ->get()
            ->first();
            return view('profile', compact('s'));
        }else{
            abort(401);
        }
    }

    public function logout()
    {
        if (Session::has('user_id')){
            Session::flush();
            // Session::pull('user_id');
        }

        return redirect('login')->with('success', 'You have logged out!');
    }

    public function showLogin()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $user = User::where("email", "=", $request -> email) -> first();
        if ($user) {
            if (Hash::check($request -> password, $user -> password)) {
                $request->session()->put('user_id', $user->user_id);
                $request->session()->put('first_name', $user->first_name);
                $request->session()->put('last_name', $user->last_name);
                $request->session()->put('email', $user->email);
                $request->session()->put('role', $user->role);
                $request->session()->put('student_id', $user->student_id);
                if (Session::get('role') == 'admin'){
                    return redirect('/admin')->with('success', 'logged in as an admin!')
                }
                return redirect('/profile')->with('success', 'Welcome, ' . Session::get('first_name!') . '!');
            } else {
                return redirect('/login')->with('fail', 'Incorrect password');
            }
        } else {
            return redirect('/login')->with('fail', 'An account with that email does ot exist!');
        }
    }
}
