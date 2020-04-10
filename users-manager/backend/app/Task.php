<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table='personnel';
    protected $fillable= ['FirstName','LastName','email','gender','Departement','phoneNumber','dateOfBirth','isconnect'];
    
}



