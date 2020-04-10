import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
// import { HttpModule } from '@angular/http'
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { ListPersonnelService } from './modules/application/services/PersonnelService/ListPersonnelService';
import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    // HttpModule,
    HttpClientModule

  ],
  providers: [
    ListPersonnelService ,
    MessageService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
