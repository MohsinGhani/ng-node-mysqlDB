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
  reciptDate: String,
  deliverDate: String,
  diagnosisDesc: String,
  code: String,
  amount: String,
  isDiagnosed: Boolean
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
    reciptDate: '',
    deliverDate: '',
    diagnosisDesc: '',
    code: '',
    amount: '',
    isDiagnosed: false
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
      reciptDate: '',
      deliverDate: '',
      diagnosisDesc: '',
      code: '',
      amount: '',
      isDiagnosed: false
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
  minDate = new Date();
  constructor(private fb: FormBuilder, private _EmployeeService: EmployeeService) {
    _EmployeeService.getDoctors().subscribe((doctors) => {
      doctors.data.forEach(doctor => {
        this.doctors.push({ value: doctor.email, viewValue: doctor.name })
      });
    })
    let today = new Date();

    this.reportForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'gender': [null, Validators.required],
      'contact': [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(30)])],
      'address': [null, Validators.required],
      'dob': [null, Validators.required],
      'age': [null, Validators.required],
      'assignedDoctor': [null, Validators.required],
      'diseaseName': [null, Validators.required],
      'reciptDate': [`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`],
      'deliverDate': [null, Validators.required],
      'code': [null, Validators.required],
      'amount': [null, Validators.required],
      'diagnosisDesc': [''],
      'isDiagnosed': [false]
    });
  }

  addReport(reportData){
    this._EmployeeService.addReport(reportData).subscribe((res)=>{
      console.log(res)
    })
  }

  writeDummyData(){
    this.report = {
      name: 'Hamza Khan',
      email: 'hamza@gmail.com',
      address: 'NN',
      dob: '1997-01-21',
      age: '21',
      contact: '03003625965',
      gender: 'male',
      diseaseName: 'Lagophthalmos',
      assignedDoctor: 'doc@gmail.com',
      reciptDate: '2017-11-25',
      deliverDate: '2017-12-28',
      diagnosisDesc: '',
      code: '1234',
      amount: '1000',
      isDiagnosed: false
    }
  }

  ngOnInit() {
  }

}
