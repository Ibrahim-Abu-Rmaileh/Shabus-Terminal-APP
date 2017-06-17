import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import {Authunication} from '../services/serverside';
import { MyDriverLoginPage } from '../pages/my-driver-login/my-driver-login';//--------//
import { MyClientPage } from '../pages/my-client/my-client';//--------//
import { MyCouponsPage } from '../pages/my-coupons/my-coupons';//--------//
import { MyShekelPerKmPage } from '../pages/my-shekel-per-km/my-shekel-per-km';//--------//


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
 
  rootPage: any = MyDriverLoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private auth:Authunication) {
    this.initializeApp();
    firebase.initializeApp({
      apiKey: "AIzaSyABh5mvOXy7lwRl0knUqxyYPlqLSHEHfLU",
    authDomain: "shapus-ecbb4.firebaseapp.com",
    });
firebase.auth().onAuthStateChanged(user => {
  if(user){
    this.nav.setRoot(MyClientPage);
}else{
    this.nav.setRoot(MyDriverLoginPage);

  }
});
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'נוסעים', component: MyClientPage},
      { title: 'קופונים', component: MyCouponsPage},
      { title: 'שקל לק"מ', component: MyShekelPerKmPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   
        this.nav.setRoot(page.component);
   
  }

  logout(){
   this.auth.logout();
  }


}
