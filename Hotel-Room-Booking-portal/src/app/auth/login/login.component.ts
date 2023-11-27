import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // public loginForm!:FormGroup;
  // hide = true;

  // constructor(){

  // }

  ngOnInit(){
    // this.loginForm = new FormGroup({
    //   email: new FormControl('admin@hungersaviourportal.com', [Validators.required]),
    //   password: new FormControl('Admin@123', [Validators.required])
    // });
  }

  onSubmit(){

  }

}
