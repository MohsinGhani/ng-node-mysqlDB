import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-admin-collector-list',
  templateUrl: './admin-collector-list.component.html',
  styleUrls: ['./admin-collector-list.component.scss']
})
export class AdminCollectorListComponent implements OnInit {

  doctorList = []
  constructor(private _EmployeeService:EmployeeService) {
    _EmployeeService.getCollectors().subscribe((doctors)=>{
      doctors.data.forEach(doctor => {
        this.doctorList.push(doctor)
      });
    })
  }

  ngOnInit() {
  }

}
