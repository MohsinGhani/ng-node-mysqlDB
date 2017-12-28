import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-admin-report-list',
  templateUrl: './admin-report-list.component.html',
  styleUrls: ['./admin-report-list.component.scss']
})
export class AdminReportListComponent implements OnInit {

  reportList = []
  constructor(private _EmployeeService:EmployeeService) {
    _EmployeeService.getReports().subscribe((reports)=>{
      console.log(reports.data[0])
      reports.data.forEach(report => {
        this.reportList.push(report)
      });
    })
  }

  ngOnInit() {
  }

}
