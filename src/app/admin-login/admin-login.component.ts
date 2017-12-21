import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http'
import { Observable } from 'rxjs/Observable';

interface Admin{
  email:String,
  password: String
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  hide = true;
  user: Admin = {
    email:"",
    password: ""
  };
  constructor(public http: HttpService) { }

  ngOnInit() {
  }

  login(){
    // let aa = {name: "Newww", dob: "21-01-2017", age: "20", gender: "Male"}
    // this.http.post(aa).subscribe()

    this.http.getReport(1).subscribe((rr)=>{
      console.log(rr)
    })
    // console.log(this.user)
  }

}
