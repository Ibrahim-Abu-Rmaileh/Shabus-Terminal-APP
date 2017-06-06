import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-client',
  templateUrl: './my-client.component.html',
  styleUrls: ['./my-client.component.css']
})
export class MyClientComponent implements OnInit {
  clientCounter: number;
  phoneNumber="054-1234567";
  constructor() {
    this.clientCounter=1;
   }

  ngOnInit() {
  }
  addClient(){
  if(this.clientCounter<5)
  this.clientCounter++;
  //console.log(this.clientCounter);
}
removeClient(){
  if(this.clientCounter>1){
    this.clientCounter--;
  }
}
isShabusMember(input){
  console.log(input.target.value);
  console.log(this.phoneNumber);
  if(input.target.value===this.phoneNumber){
    console.log("Client is shabus member");
  }
}


}
