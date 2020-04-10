<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index(){
        return Task::all();
    }

    public function show($id){
        return Task::find($id);
    }
    
    public function store(Request $request){
        $personnel =new personnel();

        $personnel->FirstName = $request->input('FirstName');
        $personnel->LastName = $request->input('LastName');
        $personnel->email = $request->input('email');
        $personnel->gender = $request->input('gender');
        $personnel->Departement = $request->input('Departement');
        $personnel->phoneNumber = $request->input('phoneNumber');
        $personnel->dateOfBirth = $request->input('dateOfBirth');
        $personnel->isconnect = $request->input('isconnect');

        $personnel->save();
        return response()->json($personnel);
        // return Task::create($request->all());


    }

    public function update(Request $request, $id){
        $task = Task::findOrfail($id);
        $task->update($request->all());
        
        return $task;
    }

    public function delete(Request $request, $id){
        $task = Task::findOrfail($id);
        $task->delete();

        return 204;
    }
}
