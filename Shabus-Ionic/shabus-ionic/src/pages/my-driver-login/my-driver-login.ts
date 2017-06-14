import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import{ LoadingController} from 'ionic-angular'
 //import { MyClientPagerror.messagee } from '../my-client/my-client';//--------//
import {Authunication} from '../../services/auth';
import {MyClientPage }from '../my-client/my-client';
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

  constructor(private alert:AlertController,private auth:Authunication ,private navCtrl: NavController, private navParams: NavParams,private Loadingcontrol:LoadingController) {
    
  }


  onsignin(){

     const loading=this.Loadingcontrol.create({
content:' ...מתחבר'
    });
     loading.present();
    this.auth.signin(this.username,this.password).then(data => {
loading.dismiss();
this.navCtrl.setRoot(MyClientPage);


    }).catch(error => {
     loading.dismiss();
const alert=this.alert.create({
  title:"הזיהוי נכשל",
  message:"לא זיהינו אותך ,נא לנסות שוב",
buttons:['Ok']

});
alert.present();
    });
    // console.log(this.username);
    // console.log(this.password);
   
   
   // this.navCtrl.setRoot(MyClientPage);
  }

}
