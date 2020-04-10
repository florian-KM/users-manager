import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  FirstName: String;
  LastName: String;
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.FirstName,
                this.LastName);
  }

  resetAboutForm(aboutForm: NgForm){
    aboutForm.resetForm();
  }
}
