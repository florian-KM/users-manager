import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { personnels } from '../../application/models/Personnel.models';
import { ListPersonnelService} from '../../application/services/PersonnelService/ListPersonnelService';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})

    
export class SubscribeComponent implements OnInit{
  submitted = false;
  FirstName: string;
  LastName: string;
  confirmpassword: String;
  password: string;
  email: string;
  phoneNumber: number;
  gender:string;
  dateOfBirth: String;
  selected: string;

  

  onFormSubmit(){
    console.log(this.FirstName,
      this.LastName,
      this.confirmpassword,
      this.password,
      this.email,
      this.phoneNumber,
      this.gender,
      this.dateOfBirth,
      this.selected);
  }

  // resetUserForm(userForm: NgForm){
  //   userForm.resetForm();
  // }

    form = new FormGroup({

        FirstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        LastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl ('', [Validators.required]),
        gender: new FormControl ('', [Validators.required]),
        number: new FormControl('', [Validators.required, Validators.minLength(9)]),
        selected: new FormControl('', [Validators.required]),
        date : new FormControl('', [Validators.required])
    
      });
    
      
    form1 = new FormGroup({

      name1: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Lastname1: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
      email1: new FormControl('', [Validators.required, Validators.email]),
      password1: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword1: new FormControl ('', [Validators.required]),
      gender1: new FormControl ('', [Validators.required]),
      number1: new FormControl('', [Validators.required, Validators.minLength(12)]),
  
    });
  

      get f(){
    
        return this.form.controls;
    
      }
      get f1(){
    
        return this.form1.controls;
    
      }
    
      
    
      submit(){
        console.log(this.form.value);
      }
        onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.form.invalid) {
          return console.log("erreur ceci ne fonctionne pas");
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    }

      onReset() {
      this.submitted = false;
      this.form.reset();
      }


      submit1(){
    
        console.log(this.form1.value);
    
      }

      private personnels: personnels[]=
          [
            {
              id: null,
              FirstName: null,
              LastName: null,
              email: '',
              gender: null,
              Departement: null,
              phoneNumber: null,
              dateOfBirth: null,
              isconnect: true

            }, 
          ];

          constructor(private personnelService: ListPersonnelService,
                      ){

          }

          ngOnInit(){}

          SavePersonnel (NewPersonne: personnels){
            console.log(NewPersonne);
          }


//   registerForm: FormGroup;
//    submitted = false;


//   constructor(private formBuilder: FormBuilder) { }
//   ngOnInit() {
//     this.registerForm = this.formBuilder.group({
//       title: ['', Validators.required],
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', Validators.required],
//       acceptTerms: [false, Validators.requiredTrue]
//   }, {
//       validator: this.MustMatch('password', 'confirmPassword')
//   });
//   }

//   get f() { return this.registerForm.controls; }

//   onSubmit() {
//       this.submitted = true;

//       // stop here if form is invalid
//       if (this.registerForm.invalid) {
//           return;
//       }

//       // display form values on success
//       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
//   }

//   onReset() {
//       this.submitted = false;
//       this.registerForm.reset();
//   }


//   MustMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];

//         if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//             // return if another validator has already found an error on the matchingControl
//             return;
//         }

//         // set error on matchingControl if validation fails
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ mustMatch: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }
}


