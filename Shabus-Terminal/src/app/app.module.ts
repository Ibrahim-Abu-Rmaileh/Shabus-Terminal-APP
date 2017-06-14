import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyDriverLoginComponent } from './my-driver-login/my-driver-login.component';
import { MyClientComponent } from './my-client/my-client.component';
import { MyNavmenuComponent } from './my-navmenu/my-navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyDriverLoginComponent,
    MyClientComponent,
    MyNavmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
