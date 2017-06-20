import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyMoovitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-moovit',
  templateUrl: 'my-moovit.html',
})
export class MyMoovitPage {

  phoneNumber;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.phoneNumber = this.navParams.get('phoneNum');
    console.log("phone is:" + this.phoneNumber);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyMoovitPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
