let array  = [
    ['o' , 'o' , 'o'],
    ['o' , 'o' , 'o'],
    ['o' , 'o' , 'o']
]

function funcseat(rows , cols , seatelement){
    if (array[rows][cols] == 'o'){
        array[rows][cols] = 'x';
        updateseatstatus(seatelement , 'booked');
        alert("Seat(" + rows + cols + ") is now booked");
    }else{
        alert("Seat(" + rows + cols + ") was already booked");
    }
}
function updateseatstatus(seatelement , status){
    if (status === 'booked'){
        seatelement.classList.remove('allowed');
        seatelement.classList.add("booked");
    }
}
function randomSeat() {
    // Get all available seats (those with the 'allowed' class)
    const availableSeats = document.querySelectorAll('.allowed');
    
    // If there are no available seats, notify the user
    if (availableSeats.length === 0) {
        alert("No available seats.");
        return;
    }

    // Pick a random seat from the available ones
    const randomIndex = Math.floor(Math.random() * availableSeats.length);
    const randomSeatElement = availableSeats[randomIndex];

    // Extract the row and column from the seat's id (e.g., 'seat-0-0' -> row=0, col=0)
    const [row, col] = randomSeatElement.id.split('-').slice(1);

    // Call the theaterseat function with the random seat's row, column, and element
    theaterseat(parseInt(row), parseInt(col), randomSeatElement);
}
