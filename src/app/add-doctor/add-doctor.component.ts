import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router/src/config';

interface Collector{
  name:String,
  email:String,
  address:String,
  salary:Number,
  qualification:String,
  dob:String,
  age:Number,
  contact:String,
  gender:String,
  branchName:String
  password: String,
}

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  collector: Collector = { name:'', email:'', address:'', salary:0, qualification:'', dob:'', age:0, contact:'', gender:'', branchName:'', password: '',
  };
  constructor() { }

  ngOnInit() {
  }

}
