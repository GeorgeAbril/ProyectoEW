class cardDishTemplate extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="card app-custom-dish-card-width p-2 pb-0">
                <img
                  src="/public/criollodishes-img/tacutacu.png"
                  class="card-img-top"
                  alt="dish-img"
                />
                <div class="card-body p-1">
                  <p class="card-text app-card-name">Tacu Tracu</p>
                </div>
                <div
                  class="card-footer app-custom-dish-footer bg-white d-flex align-items-center app-custom-font-bolder"
                >
                  <span
                    >S/
                    <span class="app-custom-text-orange-dark">24</span></span
                  >
                  <button
                    class="btn btn-dark btn-sm ms-auto app-custom-font-bolder app-btn-darker-custom"
                  >
                    +
                  </button>
                </div>
              </div>
    `;
  }
}

window.customElements.define("card-template", cardDishTemplate);
