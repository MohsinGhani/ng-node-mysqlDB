import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('home', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  reportCode:Number;
  constructor(private _EmployeeService:EmployeeService) { }

  ngOnInit() {
  }

  search(){
    this._EmployeeService.getReport(this.reportCode).subscribe(res=>{
      console.log(res)
    })
  }

}
