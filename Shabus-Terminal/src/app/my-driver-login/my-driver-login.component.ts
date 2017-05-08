import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-driver-login',
  templateUrl: './my-driver-login.component.html',
  styleUrls: ['./my-driver-login.component.css']
})
export class MyDriverLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClickMe(password){
    console.log(password.value);
  }
  buttonOnIfNotEmpty(hello){
    console.log(hello);
  }
}
