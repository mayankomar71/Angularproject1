import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { FirstserviceService } from './firstservice.service';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AddcomponentComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FirstserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
