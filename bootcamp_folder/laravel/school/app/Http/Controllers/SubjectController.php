<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Classes;

class SubjectController extends Controller
{
    public function index() //subjects GET
    {
        // subjects GET
        $subjects = Subject::query()
            ->select('subject_id', 'name', 'department')
            ->limit(10)
            ->get();
        return view('subjects', compact('subjects'));
    }

    public function show(string $id) //subjects/{id} GET
    {
        //SELECT class_id, room, schedule FROM classes WHERE subject_id = 1;
        $subject = Subject::query()
            ->select('subject_id', 'name', 'department')
            ->where('subject_id', '=', $id)
            ->get()
            ->first();
        $classes = Classes::query()
            ->select('class_id', 'room', 'schedule')
            ->where('subject_id', '=', $id)
            ->orderBy('class_id')
            ->get();
        return view('subjects_show', compact('subject', 'classes'));
    }

    public function create()
    {
        return view('subjects_create');
    }

    public function store(Request $request) //subjects POST
    {
        $subject = new Subject;
        $subject->name = $request->input('subj_name');
        $subject->department = $request->input('department');
        $subject->save();

        return redirect("subjects");

    }
}
