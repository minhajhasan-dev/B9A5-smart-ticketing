const seats = document.getElementsByClassName("seat");
const totalSeats = document.getElementById("seat-left");
const totalSeatsNumber = parseInt(totalSeats.innerText);
const seatSelectedInfo = document.getElementById("seat-selected");
const seatSelectedInfoNumber = parseInt(seatSelectedInfo.innerText);
const seatAppendArea = document.getElementById("seat-details");

let seatSelected = 0;
for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (seatSelected >= 4) {
      alert("৪ টার বেশী সিট নির্বাচন করা যাবে না।");
      return;
    }
    if (seat.style.backgroundColor !== "rgb(26, 184, 15)") {
      seat.style.backgroundColor = "rgb(26, 184, 15)";
      seat.style.color = "white";
      seatSelected++;
    } else {
      seat.style.backgroundColor = "";
      seat.style.color = "";
      seatSelected--;
    }
    const seatName = seat.innerText;
    const selectedSeatDetails = document.createElement("div");
    selectedSeatDetails.classList.add("flex");
    selectedSeatDetails.classList.add("text-[#03071299]");
    selectedSeatDetails.classList.add("justify-between");
    selectedSeatDetails.innerHTML = `
        <p class="font-semibold">${seatName}</p>
        <p class="font-semibold">Economy</p>
        <p class="font-semibold">550</p>
        <br>
    `;
    seatAppendArea.appendChild(selectedSeatDetails);

    // price updata
    const price = 550;
    const totalPrice = document.getElementById("total-price");
    const totalPriceNumber = parseInt(totalPrice.innerText);
    totalPrice.innerText = totalPriceNumber + price;

    totalSeats.innerText = totalSeatsNumber - seatSelected;
    seatSelectedInfo.innerText = seatSelected;
  });
}
