import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SelectLanguageComponent } from './pages/select-language/select-language.component';
import { LoginComponent } from './admin/user/login/login.component';
import { NewRegisterComponent } from './admin/user/new-register/new-register.component';
import { FoodSelectionComponent } from './pages/food-selection/food-selection.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new', component: NewRegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'selectLanguage', component:SelectLanguageComponent},
  { path: 'foodselection', component:FoodSelectionComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
