import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { JavascriptService } from 'src/app/service/javascript.service';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.css']
})

export class FoodSelectionComponent{

  constructor(private JavaService: JavascriptService) {
    this.JavaService.loadScript();
    }

  ngOnInit(): void {
    this.JavaService.loadScript();
    alert('hola mundo javascript');
    }


    floatingMenu = document.getElementById("floating-menu");
    marinoDishes = document.getElementsByClassName("app-card-name");

    addToList(){
      this.floatingMenu = document.getElementById("floating-menu");
      this.marinoDishes = document.getElementsByClassName("app-card-name");
      this.floatingMenu?.setAttribute("style", "display: flex !important");
      console.log(this.floatingMenu);
      alert('Prueba de Boton');
    }
  }



// export class FoodSelectionComponent implements OnInit {

//   constructor(private JavaService: JavascriptService) {
//     this.JavaService.loadScript();
//   }

//   ngOnInit(): void {
//     this.JavaService.loadScript();
//   }
// }

// export class FoodSelectionComponent{

//   }




