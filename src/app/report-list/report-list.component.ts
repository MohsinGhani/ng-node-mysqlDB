import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  reports = [];
  diagnoseMode = false;
  diagnoseDesc = '';
  step = 0;
  constructor(private _EmployeeService:EmployeeService) {
    _EmployeeService.getReportsForDoctor().subscribe((res)=>{
      console.log(res.data)
      this.reports = res.data
    })
  }

  ngOnInit() {
  }

  diagnosedStart(){
    this.diagnoseMode = true;
  }

  diagnosedDone(i){
    console.log(i)
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
