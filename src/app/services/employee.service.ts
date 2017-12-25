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

@Injectable()
export class EmployeeService {
    constructor(private _http: HttpService) { }

    addEmployee(data: Employee) {
        return this._http.post(data, 'addEmployee')
    }
}