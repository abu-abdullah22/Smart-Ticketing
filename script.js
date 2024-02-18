const tickets = document.getElementsByClassName("ticket");

let count = 0;

let couponButton = document.getElementById("coupon-button");
couponButton.disabled = true;

let nextButton = document.getElementById("next-button");
nextButton.disabled = true;

const selectedSeat = document.getElementById('selected-seat') ;

for (const ticket of tickets) {
  ticket.addEventListener("click", function (event) {
    event.target.classList.add("bg-[#1DD100]");
    count += 1;

    let totalSitCount = parseInt(
      document.getElementById("total-seat-count").innerText
    );
    totalSitCount -= 1;
    setInnerText("total-seat-count", totalSitCount);

    let seatCount = parseInt(document.getElementById("seat-count").innerText);
    seatCount += 1;
    setInnerText("seat-count", seatCount);

    conditions();

    const seat = event.target.innerText ;
    console.log(seat);
    const p = document.createElement('p');
    p.innerText = seat ; 
    selectedSeat.appendChild(p) ;


    const Class = document.getElementById('class')
    const p2 = document.createElement('p');
    p2.innerText = 'Economy'; 
    Class.appendChild(p2) ;


    const price = document.getElementById('price')
    const p3 = document.createElement('p');
    p3.innerText = 550; 
    price.appendChild(p3) ;





  });
}





function setInnerText(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}




function conditions() {
  let totalSitCount = parseInt(
    document.getElementById("total-seat-count").innerText
  );
  let seatCount = parseInt(document.getElementById("seat-count").innerText);
  if (count > 4) {
    event.target.disabled = true;
    setInnerText("total-seat-count", 36);
    setInnerText('seat-count', 4);
    alert('can not select more than 4') ;
  }
  if (count === 4) {
    couponButton.disabled = false;
  }
}
