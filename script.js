//  Faire le onclick sur le Search qui va récupérer les valeurs des inputs et fetch

function bookTrip(id) {
    fetch(`http://localhost:3000/bookings/${id}`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => {
            console.log(data)
        })
    }


    document.querySelector('#searchbutton').addEventListener('click', function () {
            const departure = document.querySelector('#Departure').value;
            const arrival = document.querySelector('#Arrival').value;
console.log(departure)
console.log(arrival)
            fetch(`http://localhost:3000/trips/${departure}/${arrival}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then(response => response.json())
                .then(data => {
                    if (data.result) {
                    document.querySelector('#contentRight').innerHTML = ""
console.log(data)
                    for (let i = 0; i < data.trips.length; i++) {
                    document.querySelector('#contentRight').innerHTML += 
                    `<div class="trip" >
                        <div class="Departure">${data.trips[i].departure}</div>
                        <div class="Arrival">${data.trips[i].arrival}</div>
                        <div class="Date">${data.trips[i].date}</div>
                     
                    <button onclick="bookTrip('${data.trips[i]._id}')">Book</button>
                    </div>
                    `
    
                    }};
     });  
   
    })