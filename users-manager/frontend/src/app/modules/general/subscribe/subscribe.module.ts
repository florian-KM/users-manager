
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe.component';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    ReactiveFormsModule,
    SubscribeRoutingModule,
    CommonModule,

    FormsModule

  ],
  exports: [
    SubscribeComponent
  ],
  declarations: [
    SubscribeComponent
  ],
  providers: [
  ],
})
export class SubscribeModule { }




