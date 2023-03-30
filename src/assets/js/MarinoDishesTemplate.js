class MainTemplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container position-relative">
     <div class="row d-flex justify-content-center">
       <div
         id="main-div"
         class="col col-sm-9 col-md-7 col-lg-5 col-xl-5 col-xxl-4 g-0 bg-white d-flex flex-column vh-100 text-center shadow"
       >
         <!-- header row template loader before middle section-->
         <header class="text-center py-3 app-custom-bg">
           <img
             src="../public/logo/app-logo-white.png"
             alt="app-logo-img"
             width="160"
           />
         </header>

         <div class="px-3 pb-4 app-custom-before-bg">
           <!-- carousel container -->
           <div
             id="app-carousel"
             class="carousel slide shadow-sm position-relative"
             data-bs-ride="carousel"
           >
             <div class="carousel-indicators">
               <button
                 data-bs-target="#app-carousel"
                 data-bs-slide-to="0"
                 class="active app-custom-indicator"
                 aria-current="true"
                 aria-label="Slide 1"
               ></button>
               <button
                 type="button"
                 class="app-custom-indicator"
                 data-bs-target="#app-carousel"
                 data-bs-slide-to="1"
                 aria-label="Slide 2"
               ></button>
               <button
                 type="button"
                 class="app-custom-indicator"
                 data-bs-target="#app-carousel"
                 data-bs-slide-to="2"
                 aria-label="Slide 3"
               ></button>
             </div>
             <div class="carousel-inner rounded-3">
               <div class="carousel-item active">
                 <img
                   src="../public/carousel-imgs/carousel-img01.png"
                   class="w-100"
                   alt="..."
                 />
               </div>
               <div class="carousel-item">
                 <img
                   src="../public/carousel-imgs/carousel-img02.png"
                   class="w-100"
                   alt="..."
                 />
               </div>
               <div class="carousel-item">
                 <img
                   src="../public/carousel-imgs/carousel-img03.png"
                   class="w-100"
                   alt="..."
                 />
               </div>
             </div>
             <button
               class="carousel-control-prev"
               type="button"
               data-bs-target="#app-carousel"
               data-bs-slide="prev"
             >
               <span
                 class="carousel-control-prev-icon"
                 aria-hidden="true"
               ></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button
               class="carousel-control-next"
               type="button"
               data-bs-target="#app-carousel"
               data-bs-slide="next"
             >
               <span
                 class="carousel-control-next-icon"
                 aria-hidden="true"
               ></span>
               <span class="visually-hidden">Next</span>
             </button>
           </div>
         </div>

         <!-- card category section -->
         <div class="px-3">
           <h6 class="text-start app-custom-font-bolder pt-2 pb-2">
             Seleccione
             <span class="app-custom-text-orange-dark">su producto</span>
           </h6>

           <!-- card categories container -->
           <div class="d-flex justify-content-between pb-4">
           <a href="./FoodSelection.html" class="text-decoration-none text-black">
              <div
               class="card shadow-sm app-custom-gray app-custom-card border-0 rounded-4"
             >
               <img src="../public/category-imgs/criollo.png" alt="categ-img" />
               <div class="card-body p-0">
                 <div
                   class="card-text app-custom-card-text app-custom-font-bolder pb-2"
                 >
                   Criollo
                 </div>
               </div>
             </div>
             </a>
             <div
               class="card shadow-sm app-custom-card-orange-bg app-custom-card border-0 rounded-4"
             >
               <img src="../public/category-imgs/marino.png" alt="categ-img" />
               <div class="card-body p-0">
                 <div
                   class="card-text app-custom-card-text app-custom-font-bolder pb-2"
                 >
                   Marino
                 </div>
               </div>
             </div>
             <div
               class="card shadow-sm app-custom-gray app-custom-card border-0 rounded-4"
             >
               <img src="../public/category-imgs/tragos.png" alt="categ-img" />
               <div class="card-body p-0">
                 <div
                   class="card-text app-custom-card-text app-custom-font-bolder pb-2"
                 >
                   Tragos
                 </div>
               </div>
             </div>
             <div
               class="card shadow-sm app-custom-gray app-custom-card border-0 rounded-4"
             >
               <img src="../public/category-imgs/bebidas.png" alt="categ-img" />
               <div class="card-body p-0">
                 <div
                   class="card-text app-custom-card-text app-custom-font-bolder pb-2"
                 >
                   Bebidas
                 </div>
               </div>
             </div>
             <div
               class="card shadow-sm app-custom-gray app-custom-card border-0 rounded-4"
             >
               <img src="../public/category-imgs/postres.png" alt="categ-img" />
               <div class="card-body p-0">
                 <div
                   class="card-text app-custom-card-text app-custom-font-bolder pb-2"
                 >
                   Postres
                 </div>
               </div>
             </div>
           </div>
         </div>
         <!-- scrollable dish list -->
         <div class="flex-grow-1 overflow-y-scroll">
           <h6 class="app-custom-font-bolder text-start ps-4 pt-2">Recomendados</h6>
           <div
             class="mt-3 mb-3 d-flex justify-content-center gap-3 flex-wrap app-custom-dish-card-text fw-bold"
           >
             <div class="card app-custom-dish-card-width p-2 pb-0">
               <img
                 src="../public/marinodishes-img/arrozchaufademariscos.png"
                 class="card-img-top"
                 alt="dish-img"
               />
               <div class="card-body p-1">
                 <p class="card-text app-card-name">Arroz chaufa de mariscos</p>
               </div>
               <div
                 class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
               >
                 <span
                   >S/
                   <span class="app-custom-text-orange-dark">24</span></span
                 >
                 <button
                   id="add-to-list"
                   onclick="addToList()"
                   class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
                 >
                   <span class="position-absolute top-0" style="left: 5px">+</span>
                 </button>
               </div>
             </div>
             <div class="card app-custom-dish-card-width p-2 pb-0">
               <img
                 src="../public/marinodishes-img/arrozconmariscos.png"
                 class="card-img-top"
                 alt="dish-img"
               />
               <div class="card-body p-1">
                 <p class="card-text app-card-name">Arroz con mariscos</p>
               </div>
               <div
                 class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
               >
                 <span
                   >S/
                   <span class="app-custom-text-orange-dark">24</span></span
                 >
                 <button
                   class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
                 >
                 <span class="position-absolute top-0" style="left: 5px">+</span>
                 </button>
               </div>
             </div>
             <div class="card app-custom-dish-card-width p-2 pb-0">
               <img
                 src="../public/marinodishes-img/chicharronescalamar.png"
                 class="card-img-top"
                 alt="dish-img"
               />
               <div class="card-body p-1">
                 <p class="card-text">Chicharrones de calamar</p>
               </div>
               <div
                 class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
               >
                 <span
                   >S/
                   <span class="app-custom-text-orange-dark">24</span></span
                 >
                 <button
                   class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
                 >
                 <span class="position-absolute top-0" style="left: 5px">+</span>
                 </button>
               </div>
             </div>
           </div>

           <!-- Más pedidos -->
           <hr class="border border-dark border-opacity-25 border-4">
           <h6 class="app-custom-font-bolder text-start ps-4 pt-2">Los más pedidos</h6>
           <div
             class="mt-3 mb-4 d-flex justify-content-center gap-3 flex-wrap app-custom-dish-card-text fw-bold"
           >
           <div class="card app-custom-dish-card-width p-2 pb-0">
       <img
         src="../public/marinodishes-img/chilcano.png"
         class="card-img-top"
         alt="dish-img"
       />
       <div class="card-body p-1">
         <p class="card-text">Chilcano</p>
       </div>
       <div
         class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
       >
         <span
           >S/
           <span class="app-custom-text-orange-dark">24</span></span
         >
         <button
           class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
         >
           <span class="position-absolute top-0" style="left: 5px">+</span>
         </button>
       </div>
     </div>
     <div class="card app-custom-dish-card-width p-2 pb-0">
       <img
         src="../public/marinodishes-img/choritoschalaca.png"
         class="card-img-top"
         alt="dish-img"
       />
       <div class="card-body p-1">
         <p class="card-text">Choritos a la chalaca</p>
       </div>
       <div
         class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
       >
         <span
           >S/
           <span class="app-custom-text-orange-dark">24</span></span
         >
         <button
           class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
         >
           <span class="position-absolute top-0" style="left: 5px">+</span>
         </button>
       </div>
     </div>
     <div class="card app-custom-dish-card-width p-2 pb-0">
       <img
         src="../public/marinodishes-img/lechetigre.png"
         class="card-img-top"
         alt="dish-img"
       />
       <div class="card-body p-1">
         <p class="card-text">Leche de tigre</p>
       </div>
       <div
         class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
       >
         <span
           >S/
           <span class="app-custom-text-orange-dark">24</span></span
         >
         <button
           class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
         >
           <span class="position-absolute top-0" style="left: 5px">+</span>
         </button>
       </div>
     </div>
     <div class="card app-custom-dish-card-width p-2 pb-0">
       <img
         src="../public/marinodishes-img/sopaparihuela.png"
         class="card-img-top"
         alt="dish-img"
       />
       <div class="card-body p-1">
         <p class="card-text">Sopa Parihuela</p>
       </div>
       <div
         class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
       >
         <span
           >S/
           <span class="app-custom-text-orange-dark">24</span></span
         >
         <button
           class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
         >
           <span class="position-absolute top-0" style="left: 5px">+</span>
         </button>
       </div>
     </div>
     <div class="card app-custom-dish-card-width p-2 pb-0">
       <img
         src="../public/marinodishes-img/sudadopescado.png"
         class="card-img-top"
         alt="dish-img"
       />
       <div class="card-body p-1">
         <p class="card-text">Sudado de pescado</p>
       </div>
       <div
         class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
       >
         <span
           >S/
           <span class="app-custom-text-orange-dark">24</span></span
         >
         <button
           class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom position-relative"
         >
           <span class="position-absolute top-0" style="left: 5px">+</span>
         </button>
       </div>
     </div>
     </div>
         </div>

         <!-- floating menu section -->
         <div
           id="floating-menu"
           class="app-custom-floating-menu-container d-none flex-column app-custom-font-bolder p-3 shadow-lg border"
         >
           <div class="d-flex align-items-center">
             <span class="pe-3">Mi Orden</span>
             <button
             id="changeDeliveryOption"
               class="btn btn-sm btn-dark fw-bold app-btn-darker-custom rounded-pill py-0 px-3"
             >
               Para llevar
             </button>
             <span class="ms-auto app-custom-orange fs-4">S/ 23</span>
           </div>

           <div class="d-flex justify-content-between pt-3 gap-3">
             <button
               id="cancel-order"
               class="btn btn-light w-50 app-btn-outline-custom app-custom-font-bolder rounded-pill"
               data-bs-toggle="modal" data-bs-target="#cancelOrderModal"
               >
               CANCELAR ORDEN
             </button>
               <button
               data-bs-toggle="modal"
               data-bs-target="#checkoutOrderModal"
               type="button"
               class="btn btn-dark w-50 app-btn-darker-custom app-custom-font-bolder rounded-pill"
             >
               VER ORDEN
             </button>

           </div>
         </div>
       </div>
     </div>
   </div>
     `;
  }
}

window.customElements.define("main-template", MainTemplate);
