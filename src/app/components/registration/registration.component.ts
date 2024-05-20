import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  telephoneCtrl!: FormControl;
  userForm!: FormGroup;



  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control("",[Validators.required,Validators.minLength(5)]);
    this.passwordCtrl = fb.control("");
    this.telephoneCtrl = fb.control("",[Validators.minLength(8),Validators.maxLength(8)]);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
      telephone:  this.telephoneCtrl 
    });

  }
  reset(): void {
    this.usernameCtrl.setValue("");
    this.passwordCtrl.setValue("");
    this.telephoneCtrl.setValue("");
  }
  register(): void {
    console.log(this.userForm.value);
  }

}
