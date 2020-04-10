import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personnels: any[];
  Admin: any[];
  constructor() { }
   
    getAdmin(): void{
      this.Admin = [
        { 
          photo: '../../../assets/photo-pour-site-de-rencontre.jpg', 
          noms: 'KENFACK', 
          prenoms: 'Maurice', 
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
        },
        { 
          photo: '../../../assets/photo-pour-site-de-rencontre.jpg', 
          noms: 'ANANFACK', 
          prenoms: 'Jean', 
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
        },
        { 
          photo: '../../../assets/photo-pour-site-de-rencontre.jpg', 
          noms: 'KALAGAN', 
          prenoms: 'Jean', 
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
        },
        { 
          photo: '../../../assets/photo-pour-site-de-rencontre.jpg', 
          noms: 'KALAGAN', 
          prenoms: 'Jean', 
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
        },
    
      ];
    }


    getpersonnels(): void {
      this.personnels =
        [
          { 
            photo: '../../../assets/photo-pour-site-de-rencontre.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
          { 
            photo: '../../../assets/Styling_0004_Styling.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
          { 
            photo: '../../../assets/Photo-profil-professionnelle-par-photographe-entreprise10.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
          { 
            photo: '../../../assets/istockphoto-174876811-1024x1024.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
          { 
            photo: '../../../assets/3494596905_1545378098.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
          { 
            photo: '../../../assets/images.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
          { 
            photo: '../../../assets/photo-pour-site-de-rencontre.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
          { 
            photo: '../../../assets/photo-pour-site-de-rencontre.jpg', 
            noms: 'KALAGAN', 
            prenoms: 'Jean', 
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
          },
      
          
        ];
  
    
  }

  ngOnInit(): void {
    this.getpersonnels();
    this.getAdmin();
  }


}
