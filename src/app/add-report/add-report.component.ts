import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmployeeService } from './../services/employee.service';

interface Report {
  name: String,
  email: String,
  address: String,
  dob: String,
  age: String,
  contact: String,
  gender: String,
  diseaseName: String,
  assignedDoctor: String,
  collector: String,
  reciptDate: String,
  deliverDate: String,
  diagnosisDesc: String,
  code: String
}

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  report: Report = {
    name: '',
    email: '',
    address: '',
    dob: '',
    age: '',
    contact: '',
    gender: '',
    diseaseName: '',
    assignedDoctor: '',
    collector: '',
    reciptDate: '',
    deliverDate: '',
    diagnosisDesc: '',
    code: ''
  };

  dummyData = [
    {
      name: '',
      email: '',
      address: '',
      dob: '',
      age: '',
      contact: '',
      gender: '',
      diseaseName: '',
      assignedDoctor: '',
      collector: '',
      reciptDate: '',
      deliverDate: '',
      diagnosisDesc: '',
      code: ''
    }
  ];


  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];

  startDate = new Date(1990, 0, 1);

  doctors = [];
  hide = true;
  reportForm: FormGroup;

  constructor(private fb: FormBuilder, private _EmployeeService: EmployeeService) {
    _EmployeeService.getDoctors().subscribe((doctors)=>{
      doctors.data.forEach(doctor => {
        this.doctors.push({value: doctor.email, viewValue: doctor.name})
      });
    })

    this.reportForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'gender': [null, Validators.required],
      'contact': [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(30)])],
      'address': [null, Validators.required],
      'dob': [null, Validators.required],
      'age': [null, Validators.required],
      'assignedDoctor': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

}
