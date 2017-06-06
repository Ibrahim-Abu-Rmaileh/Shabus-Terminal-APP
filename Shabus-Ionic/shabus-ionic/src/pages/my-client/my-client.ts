import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyClientPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-client',
  templateUrl: 'my-client.html',
})
export class MyClientPage {

  clientCounter: number;
  phoneNumber="054-1234567";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clientCounter=1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyClientPage');
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








