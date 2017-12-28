import { Injectable } from '@angular/core';
import { HttpService } from './http'

interface Employee {
    name: String,
    email: String,
    address: String,
    salary: String,
    qualification: String,
    dob: String,
    age: String,
    contact: String,
    gender: String,
    branchName: String
    password: String,
    post: String,
    status: Number
}

interface User{
    email:String,
    password: String,
    post: String
  }

@Injectable()
export class EmployeeService {
    constructor(private _http: HttpService) { }

    addEmployee(data: Employee) {
        return this._http.post(data, 'addEmployee')
    }

    getDoctors(){
        return this._http.get('getDoctors','');
    }

    getCollectors(){
        return this._http.get('getCollectors','')
    }

    login(user: User) {
        return this._http.post(user, 'login')
    }

    getCurrentEmp(empType: String){
        if(empType == 'doctor'){
            return JSON.parse(localStorage.getItem('doctor')) || [];
        }
        else if(empType == 'collector'){
            return JSON.parse(localStorage.getItem('collector')) || [];
        }
    }

    logout(){
        localStorage.setItem('doctor',JSON.stringify(''));
        localStorage.setItem('collector',JSON.stringify(''))
        return true;
    }

    addReport(report){
        return this._http.post(report, 'addReport')
    }

    getReportsForDoctor(){
        let drEmail = JSON.parse(localStorage.getItem('doctor')).email || [];
        return this._http.get('getReportsForDoctor',drEmail)
    }

    getReports(){
        return this._http.get('getReports','')
    }

    diagnosedReport(report){
        return this._http.post(report,'diagnosedReport')
    }

    getReport(code){
        return this._http.get('getReport',code)
    }
}