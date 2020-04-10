import { Component, OnInit } from '@angular/core';
import {ListPersonnelService} from '../../application/services/PersonnelService/ListPersonnelService'
import { personnels } from '../../application/models/Personnel.models';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent{
  personnels: personnels[];
  editPersonnels: personnels;
  constructor(private ListPersonnelService: ListPersonnelService) { } 


  ngOnInit() {
     this.getPersonnels();
  }

  getPersonnels():void{
    this.ListPersonnelService.getPersonnel().subscribe(personnels => (this.personnels = personnels))
  }

  add( FirstName: string, LastName: string, email: string, gender: string, Departement: string, phoneNumber: number, dateOfBirth: Date, isconnect: boolean,): void {
    this.editPersonnels = undefined
    FirstName = FirstName.trim()
    LastName = LastName.trim()
    if(!FirstName){
      return
    }
    if(!LastName){
      return
    }
    
    if(!phoneNumber){
      return
    }
    
    
       
    


    const newPersonnels: personnels = { FirstName,LastName,email,gender,Departement,phoneNumber,dateOfBirth,isconnect } as personnels
    this.ListPersonnelService.addPersonnel(newPersonnels).subscribe(personnels => this.personnels.push(personnels))
  }
}
