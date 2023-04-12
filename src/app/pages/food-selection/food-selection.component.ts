import { AppComponent } from './../../app.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { JavascriptService } from 'src/app/service/javascript.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.css']
})

export class FoodSelectionComponent{

  constructor(private JavaService: JavascriptService) {
    //this.JavaService.loadScript();
    }

  ngOnInit(): void {
    //this.JavaService.loadScript();
    //alert('hola mundo javascript');

    }

    addToList(){
      const floatingMenu = document.getElementById("floating-menu");
      floatingMenu?.setAttribute("style", "display: flex !important");
      //console.log(floatingMenu);
      //alert('Prueba de Boton');
    }

    hideFloatingMenu() {
      const floatingMenu = document.getElementById("floating-menu");
      floatingMenu?.setAttribute("style", "display: none !important");
    }

    ngAfterViewInit(){
      // var changeDeliveryOptionButton = document.getElementById("changeDeliveryOption");
      // alert(changeDeliveryOptionButton);
      // changeDeliveryOptionButton.textContent='hola';

    }

     miOrdenClick(){
      const changeDeliveryOptionButton = document.getElementById("changeDeliveryOption")!;

      if(changeDeliveryOptionButton.textContent == 'Para llevar') {
        changeDeliveryOptionButton.textContent='Para dentro';
      } else if(changeDeliveryOptionButton.textContent=='Para dentro') {
        changeDeliveryOptionButton.textContent = 'Para llevar';
      }
    }

    creditCardClick(){
      let processingOrderModal = new bootstrap.Modal("#processingordermodal");
      let printBillModal = new bootstrap.Modal("#printbillmodal");
      let paymentModal = new bootstrap.Modal("#insertcreditcard1st");
      let insertCreditCardTimer = document.getElementById("insertcardtimer");
      let processingOrderTimer = document.getElementById("processingtimer");
      // const payWithCreditCardBtn = document.getElementById("payusingcreditcardbtn");
      // const insertCreditCardTimer = document.getElementById("insertcardtimer");
      // const paymentModal = new bootstrap.Modal("#insertcreditcard1st");

      let delay = 7000;
      const insertCreditCardIntervalId = counter(insertCreditCardTimer);
      setTimeout(loadProcessingModal, delay);


      function loadProcessingModal() {
        paymentModal.hide();
        processingOrderModal.show();

        let processingOrderIntervalId = counter(processingOrderTimer);

        setTimeout(loadTickedModal, delay);

        function loadTickedModal() {
          clearInterval(processingOrderIntervalId);
          processingOrderModal.hide();
          printBillModal.show();
          const floatingMenu = document.getElementById("floating-menu");
          floatingMenu?.setAttribute("style", "display: none !important");
        }

        clearInterval(insertCreditCardIntervalId);
      }

      function counter(el: HTMLElement | null) {
        var i = 6;
        return setInterval(() => {
          if (i < 1) {
            i = 6;
          }
          if (el === null) {
            alert('oops');
          } else {
            el.textContent = (i--).toString();
          }
        }, 1000);
      }
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




