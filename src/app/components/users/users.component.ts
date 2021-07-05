import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
goBack(){
  this.location.back();
}
goForward(){
  this.location.forward();
}
}
