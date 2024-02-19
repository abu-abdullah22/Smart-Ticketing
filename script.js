const tickets = document.getElementsByClassName("ticket");

let count = 0;

let total = 0;

let couponButton = document.getElementById("coupon-button");
couponButton.disabled = true;

const couponCode = document.getElementById("coupon-code");

const nextButton = document.getElementById("next-button");
nextButton.disabled = true;

const selectedSeat = document.getElementById("selected-seat");

const totalPrice = document.getElementById("total-price");

let grandTotal = document.getElementById("grand-total");

let discountTitle = document.getElementById('discount-title') ;
let discountPrice = document.getElementById('discount-price') ;

for (const ticket of tickets) {
  ticket.addEventListener("click", function (event) {
    event.target.classList.add("bg-[#1DD100]");
    event.target.classList.add("pointer-events-none");

    count += 1;

    let totalSitCount = parseInt(
      document.getElementById("total-seat-count").innerText
    );
    totalSitCount -= 1;
    setInnerText("total-seat-count", totalSitCount);

    let seatCount = parseInt(document.getElementById("seat-count").innerText);
    seatCount += 1;
    setInnerText("seat-count", seatCount);

    const seat = event.target.innerText;
    let p = document.createElement("p");
    p.innerText = seat;
    selectedSeat.appendChild(p);

    const Class = document.getElementById("class");
    let p2 = document.createElement("p");
    p2.innerText = "Economy";
    Class.appendChild(p2);

    const price = document.getElementById("price");
    let p3 = document.createElement("p");
    p3.innerText = 550;
    price.appendChild(p3);

    let priceNum = parseInt(price.innerText);
    total = total + priceNum;
  

    if (count > 4) {
      p.innerText = "";
      p2.innerText = "";
      p3.innerText = "";
      total = 2200;
    }

    totalPrice.innerText = total;
    grandTotal.innerText = total;

    conditions(event);

    const phone = document.getElementById("phone");
    phone.addEventListener("keyup", function () {
      nextButton.disabled = false;
    });
  });
}

function setInnerText(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function conditions(elementId) {
  let totalSitCount = parseInt(
    document.getElementById("total-seat-count").innerText
  );
  let seatCount = parseInt(document.getElementById("seat-count").innerText);
  if (count > 4) {
    elementId.target.disabled = true;
    setInnerText("total-seat-count", 36);
    setInnerText("seat-count", 4);
    alert("can not select more than 4");
  }
  if (count === 4) {
    couponButton.disabled = false;
  }
}

function discount() {
  const coupon = document.getElementById("coupon");
  discountTitle.classList.remove('hidden') ;

  if (couponCode.value === "NEW15") {
    setInnerText("grand-total", 1870);
    couponButton.classList.add("hidden");
    couponCode.classList.add("hidden");
    discountPrice.classList.remove('hidden') ;
    
  
  } else if (couponCode.value === "Couple 20") {
    setInnerText("grand-total", 1760);
    couponButton.classList.add("hidden");
    couponCode.classList.add("hidden");
    discountPrice.classList.remove('hidden') ;
    discountPrice.innerText = 'BDT ' + 440 ;
  } else {
    alert("Wrong Coupon Code");
  }

  document.getElementById("coupon-code").value = " ";
}

