let isLoginForm = true;

function toggleForm() {
  isLoginForm = !isLoginForm;
  document.getElementById('login-form').style.display = isLoginForm ? 'block' : 'none';
  document.getElementById('register-form').style.display = isLoginForm ? 'none' : 'block';
  document.getElementById('message').innerText = '';
}

function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  // Here you would send a request to your backend to validate the user
  // For simplicity, let's assume successful login for any non-empty input
  if (email.trim() !== '' && password.trim() !== '') {
    showMessage('Login successful!');
  } else {
    showMessage('Please enter valid email and password.');
  }
}

function registerUser() {
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  // Here you would send a request to your backend to register the user
  // For simplicity, let's assume successful registration for any non-empty input
  if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
    showMessage('Registration successful!');
  } else {
    showMessage('Please enter valid name, email, and password.');
  }
}

function showMessage(message) {
  document.getElementById('message').innerText = message;
}





// Dummy driver data (replace with actual data from backend)
const drivers = [
    { name: 'John Doe', vehicle: 'Car', rating: 4.8 },
    { name: 'Jane Smith', vehicle: 'Bike', rating: 4.5 },
    { name: 'Michael Johnson', vehicle: 'Auto', rating: 4.3 }
  ];
  
  // Function to display driver list
  function displayDrivers(driverData) {
    const driverList = document.getElementById('driverList');
    driverList.innerHTML = ''; // Clear previous data
  
    driverData.forEach(driver => {
      const driverCard = document.createElement('div');
      driverCard.className = 'card mb-2';
      driverCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${driver.name}</h5>
          <p class="card-text">Vehicle: ${driver.vehicle}</p>
          <p class="card-text">Rating: ${driver.rating}</p>
          <button class="btn btn-primary">Book Now</button>
        </div>
      `;
      driverList.appendChild(driverCard);
    });
  }
  
  // Search form submission
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropLocation = document.getElementById('dropLocation').value;
  
    // Dummy search result (replace with actual search logic and data retrieval)
    const filteredDrivers = drivers.filter(driver => driver.vehicle === 'Car'); // Example filter
  
    displayDrivers(filteredDrivers);
  });
  




// Sample trip data (can be replaced with actual data fetched from backend)
let tripsData = [
  { id: 1, name: "Trip 1", location: "Location 1", date: "2024-04-10" },
  { id: 2, name: "Trip 2", location: "Location 2", date: "2024-04-12" },
  { id: 3, name: "Trip 3", location: "Location 3", date: "2024-04-15" }
];

// Function to display trip list
function displayTripList() {
  let tripListHtml = '<h2>Trip List</h2><ul class="list-group">';
  tripsData.forEach(trip => {
    tripListHtml += `<li class="list-group-item">${trip.name} - ${trip.location} (${trip.date}) <button class="btn btn-danger btn-sm float-right" onclick="deleteTrip(${trip.id})">Delete</button></li>`;
  });
  tripListHtml += '</ul>';
  document.getElementById('tripListContainer').innerHTML = tripListHtml;
}

// Function to delete a trip
function deleteTrip(tripId) {
  tripsData = tripsData.filter(trip => trip.id !== tripId);
  displayTripList();
}

// Initial display of trip list
displayTripList();
