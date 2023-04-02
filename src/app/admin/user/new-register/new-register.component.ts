import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent {
  constructor(private fb:FormBuilder){}
  UserNewForm = this.fb.group({
    DNI: ['', [Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
    Nombre: ['', Validators.required],
    Apellido: ['', Validators.required],
    email: ['',[Validators.required,Validators.email]],
    password: ['', Validators.required],
  });
  
  onSubmit(){
    if(this.UserNewForm.valid){
    console.log(this.UserNewForm.value);
  }else{alert('Datos no valido');}
  }
}
