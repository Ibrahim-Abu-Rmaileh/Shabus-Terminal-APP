import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyMoovitPage } from '../my-moovit/my-moovit';//--------//

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
  phoneNumber: string;

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
    //console.log(input.target.value);
    //console.log(this.phoneNumber);
    this.phoneNumber = input.target.value;
    if(input.target.value===this.phoneNumber){
      console.log("Client is shabus member");
    }
  }


  GoToMoovitPage(){
    let phoneNum = this.phoneNumber;
    this.navCtrl.push(MyMoovitPage, {phoneNum});
  }






}








