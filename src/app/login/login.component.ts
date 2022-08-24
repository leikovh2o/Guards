import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public srvc: LoginService, public rtr: Router) { }

  ngOnInit(): void {
  }

  loginfrm = new FormGroup({
    username: new FormControl(),
    pwd: new FormControl()
  })

  CheckUser(){
    let res = this.srvc.ValidateUser(this.loginfrm.value["username"],this.loginfrm.value["pwd"]);
    let uname = this.loginfrm.value["username"];
    let pwd = this.loginfrm.value["pwd"]
    if(res){
      localStorage.setItem("username", this.loginfrm.value["username"]);
      localStorage.setItem("password", this.loginfrm.value["pwd"])
      this.rtr.navigate(["home"]);
    } 
    else{
      alert("Invalid User..");
    }
    if(uname == null && pwd == null){
      localStorage.clear()
      alert("Nu ma enerva si pune username si password!!!")
    }
  }

}
