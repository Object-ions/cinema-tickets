const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; //the + turn it into data dypr number

// Updated tottal in count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;


  console.log(selectedSeatsCount);
}

//Movie select event
movieSelect.addEventListener('click', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
})

//Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value
  updateSelectedCount();
})

//Seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
})
