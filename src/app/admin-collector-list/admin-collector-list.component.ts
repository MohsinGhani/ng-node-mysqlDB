import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'
import { AdminService } from './../services/admin.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-collector-list',
  templateUrl: './admin-collector-list.component.html',
  styleUrls: ['./admin-collector-list.component.scss']
})
export class AdminCollectorListComponent implements OnInit {

  doctorList = []
  constructor(private _EmployeeService:EmployeeService, private _AdminService: AdminService, private _route:Router) {
    if (localStorage.getItem("admin") == "") {
      this._route.navigate(['admin']);
    }
    _EmployeeService.getCollectors().subscribe((doctors)=>{
      doctors.data.forEach(doctor => {
        this.doctorList.push(doctor)
      });
    })
  }

  ngOnInit() {
  }

}
