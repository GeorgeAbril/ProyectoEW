import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/user/login/login.component';
import { NewRegisterComponent } from './admin/user/new-register/new-register.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectLanguageComponent } from './pages/select-language/select-language.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewRegisterComponent,
    HomeComponent,
    SelectLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
