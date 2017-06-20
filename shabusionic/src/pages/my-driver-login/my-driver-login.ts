import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import{ LoadingController} from 'ionic-angular'
 //import { MyClientPagerror.messagee } from '../my-client/my-client';//--------//
import {Authunication} from '../../services/serverside';
/**
 * Generated class for the MyDriverLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-driver-login',
  templateUrl: 'my-driver-login.html',
})
export class MyDriverLoginPage {
username:string="";
password:string="";

splash = true;
  


  constructor(private alert:AlertController,private auth:Authunication ,private navCtrl: NavController, private navParams: NavParams,private Loadingcontrol:LoadingController) {

  }

ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  onsignin(){

     const loading=this.Loadingcontrol.create({
content:' ...מתחבר'
    });
     loading.present();
    this.auth.signin(this.username,this.password).then(data => {
loading.dismiss();

  setTimeout( () => {

const alert=this.alert.create({
  title:"המשמרת הסתיימה",
buttons:['Ok']

});
alert.present();

     this.auth.logout()
},
   21600000);



    }).catch(error => {
     loading.dismiss();
const alert=this.alert.create({
  title:"הזיהוי נכשל",
  message:"לא זיהינו אותך ,נא לנסות שוב",
buttons:['Ok']

});
alert.present();
    });
  
  }

}
