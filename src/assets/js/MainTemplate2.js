      alert('hola mundo');
      let floatingMenu = document.getElementById("floating-menu");
      let marinoDishes = document.getElementsByClassName("app-card-name");

      function addToList() {
        floatingMenu.setAttribute("style", "display: flex !important");
      }

      function hideFloatingMenu() {
        floatingMenu.setAttribute("style", "display: none !important");
      }

      // function removeItem(index) {
      //   let dishItem = document.getElementsByClassName("item");
      //   dishItem[index].setAttribute("style", "display: none");

      // }

      // Toggle delivery option value
      let isTakeAway = false;
      let changeDeliveryOptionButton = document.getElementById(
        "changeDeliveryOption"
      );

      changeDeliveryOptionButton.addEventListener("click", function () {
        isTakeAway
          ? (this.textContent = "Para llevar")
          : (this.textContent = "Para dentro");

        isTakeAway = !isTakeAway;
        setState;
      });

      let payWithCreditCardBtn = document.getElementById(
        "payusingcreditcardbtn"
      );
      let processingOrderModal = new bootstrap.Modal("#processingordermodal");
      let printBillModal = new bootstrap.Modal("#printbillmodal");
      let paymentModal = new bootstrap.Modal("#insertcreditcard1st");
      let insertCreditCardTimer = document.getElementById("insertcardtimer");
      let processingOrderTimer = document.getElementById("processingtimer");

      // console.log(insertCreditCardTimer);

      payWithCreditCardBtn.addEventListener("click", function () {
        let delay = 7000;
        setTimeout(loadProcessingModal, delay);

        let insertCreditCardIntervalId = counter(insertCreditCardTimer);

        function counter(el) {
          let i = 6;
          return setInterval(() => {
            if (i < 1) {
              i = 6;
            }
            el.textContent = i--;
          }, 1000);
        }

        function loadProcessingModal() {
          paymentModal.hide();
          processingOrderModal.show();

          let processingOrderIntervalId = counter(processingOrderTimer);

          setTimeout(loadTickedModal, delay);

          function loadTickedModal() {
            clearInterval(processingOrderIntervalId);
            processingOrderModal.hide();
            printBillModal.show();
            hideFloatingMenu();
          }

          clearInterval(insertCreditCardIntervalId);
        }
      });
