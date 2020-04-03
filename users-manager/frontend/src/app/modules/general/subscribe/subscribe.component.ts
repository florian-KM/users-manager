import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})

    
export class SubscribeComponent {
    form = new FormGroup({

        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        Lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl ('', [Validators.required]),
        gender: new FormControl ('', [Validators.required]),
    
        body: new FormControl('', Validators.required)
    
      });
    
      
    
      get f(){
    
        return this.form.controls;
    
      }
    
      
    
      submit(){
    
        console.log(this.form.value);
    
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


