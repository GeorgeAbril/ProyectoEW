import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder) {}

  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['', Validators.required],
  });
  __onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      alert('Datos no validos');
    }
  }
}
