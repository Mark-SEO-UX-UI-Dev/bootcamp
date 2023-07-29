<?php


use App\Http\Controllers\FacultyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use Illuminate\Route\Router\SubjectController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function(){
//     return view('home');
// });

// Route::get('/about', function () {
//     return view('about');
// });

// Route::get('/students', [StudentController::class, 'index']);
// Route::get('students/{id}', [StudentController::class, 'show']);

Route::get('/faculties', [FacultyController::class, 'index']);                                                                                                                                                                                                                                                                                                                                                                                   

// Route::get('/students/{id}', function($id) {
//     $name = "Mark Anthony Tan";
//     return view('students_show', compact('id', 'name'));
// });



Route::get('/login', [UserController::class, 'showLogin']);
Route::get('/login', [UserController::class, 'login']);

///////// USER SIDE ///////

Route::get('/logout', [UserController::class, 'logout']);
// Route::get('/profile', function () {
//     if (Session::get('user_id')){
//         return view('profile');
//     }else{
//         abort(401);
//     }
// });

Route::get('/profile', [UserController::class, 'showProfile']);

// Route::get('/logout', [UserController::class, 'logout']);
// Route::get('/profile', function () {
//     if (Session::get('user_id')){
//         return view('profile');
//     }else{
//         return redirect('/')->with('fail', 'Must be logged in!');
//     }
// });


////////////////// ADMIN SIDE ///////
Route::get('/admin/register', UserController::class);
Route::get('/admin/register', [UserController::class, 'showRegister']);

Route::get('/admin', function () {
    return view('admin_dashboard');
});
Route::resource('/admin/subjects', SubjectController::class);
// Route::get('/subjects/transfer', [StudentController::class, 'transferSubject']);

Route::get('/admin/students', [StudentController::class, 'index']);
Route::get('/admin/students/{id}', [StudentController::class, 'show']);

Route::get('/admin/faculties', [FacultyController::class, 'index']);



