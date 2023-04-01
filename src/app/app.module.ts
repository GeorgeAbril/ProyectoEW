import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/user/login/login.component';
import { NewRegisterComponent } from './admin/user/new-register/new-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
