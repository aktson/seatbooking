const container = document.querySelector(".container");
const movieSelect = document.querySelector ("#movie");
const seats = document.querySelectorAll (".row .seat:not(.occupied)");
const total = document.querySelector ("#total");
const count = document.querySelector ("#count");

let ticketPrice = Number(movieSelect.value);


// popolateUI();

//save selected movie index and price

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem ("selectedMovieIndex", movieIndex);
    localStorage.setItem ("selectedMoviePrice", moviePrice);
}

//function for updating price

function updatePrice () {
    const selectedSeat = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeat].map(seat => {
        return [...seats].indexOf(seat);
    })
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
    
    const selectedSeatCount = selectedSeat.length;
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
    
}
//get data from localstorage and populate UI

function popolateUI () {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))

    if (selectedSeats !== null & selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            seat.classList.add ("selected");
        })
    }

    const selectedMovieIndex = localStorage.getItem ("selectedMovieIndex");
    if (selectedMovieIndex !== null) {
        movieSelect.selectedindex = selectedMovieIndex;
    }
}

//movie select event

movieSelect.addEventListener ("change", e => {
   ticketPrice = +e.target.value;
   updatePrice()
})



//seat click event
container.addEventListener ("click", e => {
    console.log(e.target);
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
       e.target.classList.toggle("selected")
    }
    updatePrice();
})


// initial count and total set

updatePrice();

const flightStatus = {
    flightNumber: "lh531",
    flightName: "lufthansa",
    booking: [],
    book (terminal, name) {
        console.log (`${this.flightName} ${this.flightNumber} is landed at terminal ${terminal}, ${name} proceed to terminal! `)
    }

}
flightStatus.book(15, "Ankit Soni");