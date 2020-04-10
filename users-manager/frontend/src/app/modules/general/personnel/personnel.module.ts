import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelComponent } from './personnel.component';
import { PersonnelRoutingModule } from './personnel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PersonnelRoutingModule
  ],
  exports: [
    PersonnelComponent
  ],
  declarations: [
    PersonnelComponent
  ],
  providers: [
   
  ],
})
export class PersonnelModule { }
