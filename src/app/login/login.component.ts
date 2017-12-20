import { Component, OnInit } from '@angular/core';


interface User{
  email:String,
  password: String,
  post: String
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: User = {
    email:"",
    password: "",
    post: ""
  };
  constructor() {
  }

  ngOnInit() {
  }

  login(){
    console.log(this.user)
  }

}
