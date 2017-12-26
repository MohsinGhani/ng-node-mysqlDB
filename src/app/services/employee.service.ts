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
        return this._http.get('getDoctors');
    }

    getCollectors(){
        this._http.get('getCollectors').subscribe(console.log)
    }

    login(user: User) {
        return this._http.post(user, 'login')
    }

    addReport(report){
        return this._http.post(report, 'addReport')
    }
}