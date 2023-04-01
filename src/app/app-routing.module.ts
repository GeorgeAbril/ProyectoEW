import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/user/login/login.component';
import { NewRegisterComponent } from './admin/user/new-register/new-register.component';

const routes: Routes = [
  { path: 'admin/user/login', component: LoginComponent },
  { path: 'admin/user/new', component: NewRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
