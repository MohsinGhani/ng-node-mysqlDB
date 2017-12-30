import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'
import { AdminService } from './../services/admin.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-dr-list',
  templateUrl: './admin-dr-list.component.html',
  styleUrls: ['./admin-dr-list.component.scss']
})
export class AdminDrListComponent implements OnInit {

  doctorList = []
  constructor(private _EmployeeService:EmployeeService, private _AdminService: AdminService, private _route:Router) {
    if (localStorage.getItem("admin") == "") {
      this._route.navigate(['admin']);
    }
    _EmployeeService.getDoctors().subscribe((doctors)=>{
      doctors.data.forEach(doctor => {
        this.doctorList.push(doctor)
      });
    })
  }

  ngOnInit() {
  }

}
