<?php

namespace App\Http\Controllers;

use DB;

use Illuminate\Http\Request;

class FacultyController extends Controller
{

    public function index()
    {
        $teachers = DB::select("SELECT * FROM faculties ORDER BY last_name LIMIT 25");
        $departments = DB::select("SELECT department, COUNT(*) as total_faculty FROM faculties GROUP BY department");
        $promotions = DB::select("SELECT * FROM faculties AS f JOIN faculties_educ AS fe WHERE fe.academe_points >= 1200 ORDER BY last_name LIMIT 5");
        return view('faculties', compact('teachers', 'departments', 'promotions'));
    }
}
