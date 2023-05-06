import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { JavascriptService } from './service/javascript.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/user/login/login.component';
import { NewRegisterComponent } from './admin/user/new-register/new-register.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectLanguageComponent } from './pages/select-language/select-language.component';
import { FoodSelectionComponent } from './pages/food-selection/food-selection.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewRegisterComponent,
    HomeComponent,
    SelectLanguageComponent,
    FoodSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    JavascriptService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})


export class AppModule { }
