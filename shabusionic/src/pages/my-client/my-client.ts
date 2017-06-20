import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Authunication} from '../../services/serverside'
import { MyMoovitPage } from '../my-moovit/my-moovit';//--------//
import{ LoadingController} from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-my-client',
  templateUrl: 'my-client.html',
})
export class MyClientPage {

  clientCounter: number;
  phoneNumber: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:Authunication,private Loadingcontrol:LoadingController,private alert:AlertController) {
    this.clientCounter=1;
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


  send(){


     const loading=this.Loadingcontrol.create({
content:' ...בדיקת ניתונים'
    });
     loading.present();

   this.auth.getuser().getToken().then( (token:string) => {
   this.auth.send(token).subscribe((response:any) => {
     loading.dismiss();
console.log("sucess!");
var x=response.json();
     // console.log(x);
      let data={};
      for (let prop in x) {
      data=x[prop]
    }
    let check=false;
      for (let prop in data) {
if(data[prop]==this.phoneNumber ){
  check=true;
const alert=this.alert.create({
  title:"הפרטים נקלטו",
buttons:['Ok']

});
alert.present();
break;
}


      }
      if(check==false){
  this.navCtrl.push(MyMoovitPage);
}


   },
   error => {
     loading.dismiss();
     console.log(error);
   }
   );
   

   });

  }






}








