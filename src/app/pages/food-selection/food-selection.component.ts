import { AppComponent } from './../../app.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { JavascriptService } from 'src/app/service/javascript.service';
import * as bootstrap from 'bootstrap';
import { FoodcategoryService } from 'src/app/service/foodcategory.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.css']
})

export class FoodSelectionComponent{

  categorias :any = [];
  recomendados :any=[];
  maspedidos :any=[];

   // Constructor JavaScript, servicio backend
  constructor(private JavaService: JavascriptService, readonly ps: FoodcategoryService,
     private ar: ActivatedRoute) {
    //this.JavaService.loadScript();
    }

    //categorias
    /// este metodo listar no afecta en nada!!! puedes borrarlo

    listar_categoria() {
      this.ps.obtener_categoria().subscribe((rest: any) => {
        this.categorias = rest.data;
       console.log(this.categorias);
      })
    }
    /////

    obtener_category_id(identificador:number){
      this.ps.obtener_categoria().subscribe((rest:any)=>{
        this.categorias=rest.data.filter((item:{id:number})=>item.id==identificador);
        console.log(this.categorias)
      })
    }

<<<<<<< HEAD
    be_categoria_listar() {
      this.ps.be_categoria_listar().subscribe((rest: any) => {
=======
    be_proyectos_listar() {
      this.ps.be_proyecto_listar().subscribe((rest: any) => {
>>>>>>> 6a5e0f595222b51476ec78e35bfa20e086ce3339
        this.categorias = rest.data
        console.log(rest);
      })
    }

    //recomendados

    obtener_recomedados_id(idcateg:number){
      this.ps.obteener_recomendados().subscribe((rest:any)=>{
        this.recomendados = rest.data.filter((item:{categoryId:number})=> item.categoryId==idcateg);
        console.log(this.recomendados)
      })
<<<<<<< HEAD
    }

    //lo más pedido

    obtener_maspedido_id(idcateg:number){
      this.ps.obtener_maspedidos().subscribe((rest:any)=>{
        this.maspedidos = rest.data.filter((item:{categoryId:number})=> item.categoryId==idcateg);
        console.log(this.maspedidos);
      })
=======
>>>>>>> 6a5e0f595222b51476ec78e35bfa20e086ce3339

    }


<<<<<<< HEAD
=======
    //lo más pedido

    obtener_maspedido_id(idcateg:number){
      this.ps.obtener_maspedidos().subscribe((rest:any)=>{
        this.maspedidos = rest.data.filter((item:{categoryId:number})=> item.categoryId==idcateg);
        console.log(this.maspedidos);
      })

    }


>>>>>>> 6a5e0f595222b51476ec78e35bfa20e086ce3339
    //mostrar en consola
    ngOnInit(): void {
      this.ar.params.subscribe((params:Params)=>{
        if(params['id']){
          //this.obtener_category_id(params['id']);
          this.obtener_recomedados_id(params['id']);
          this.obtener_maspedido_id(params['id']);
        }
      })
      this.listar_categoria();
      this.obtener_recomedados_id(1);
      this.obtener_maspedido_id(1);
<<<<<<< HEAD
      this.be_categoria_listar();
=======
>>>>>>> 6a5e0f595222b51476ec78e35bfa20e086ce3339
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
      //let paymentModal = new bootstrap.Modal("#insertcreditcard1st");
      let paymentModal = document.getElementById('insertcreditcard1st');
      let insertcreditcard1st = new bootstrap.Modal('#insertcreditcard1st');
      let insertCreditCardTimer = document.getElementById("insertcardtimer");
      let processingOrderTimer = document.getElementById("processingtimer");
      // const payWithCreditCardBtn = document.getElementById("payusingcreditcardbtn");
      // const insertCreditCardTimer = document.getElementById("insertcardtimer");
      // const paymentModal = new bootstrap.Modal("#insertcreditcard1st");

      let delay = 7000;
      let insertCreditCardIntervalId = counter(insertCreditCardTimer);
      setTimeout(loadProcessingModal, delay);


      function loadProcessingModal() {
        paymentModal?.setAttribute('class','modal fade');
        //paymentModal.hide();
        processingOrderModal.show();

        let processingOrderIntervalId = counter(processingOrderTimer);

        setTimeout(loadTickedModal, delay);

        function loadTickedModal() {
          clearInterval(processingOrderIntervalId);
          processingOrderModal.hide();
          printBillModal.show();
          // const floatingMenu = document.getElementById("floating-menu");
          // floatingMenu?.setAttribute("style", "display: none !important");
          //insertcreditcard1st.hide();
          //hideFloatingMenu();
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




