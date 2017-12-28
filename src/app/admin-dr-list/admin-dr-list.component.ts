import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-admin-dr-list',
  templateUrl: './admin-dr-list.component.html',
  styleUrls: ['./admin-dr-list.component.scss']
})
export class AdminDrListComponent implements OnInit {

  doctorList = []
  constructor(private _EmployeeService:EmployeeService) {
    _EmployeeService.getDoctors().subscribe((doctors)=>{
      doctors.data.forEach(doctor => {
        this.doctorList.push(doctor)
      });
    })
  }

  ngOnInit() {
  }

}
