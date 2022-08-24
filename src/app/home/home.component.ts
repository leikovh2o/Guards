import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rtr: Router) { }

  ngOnInit(): void {
  }

  LogoutUser(){
    this.rtr.navigate(["login"]);
  }

}
