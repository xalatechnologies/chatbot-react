const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

const locations = [
  { name: 'Oslo' },
  { name: 'Bergen' },
  { name: 'Trondheim' },
  { name: 'Stavanger' },
  { name: 'Ålesund' },
  { name: 'Kristiansand' },
  { name: 'Bodø' },
  { name: 'Tromsø' },
  { name: 'Lillehammer' },
  { name: 'Fredrikstad' },
];

const travelRoutes = [
  {
    origin: 'Oslo',
    destination: 'Bergen',
    departureTime: '10:00',
    arrivalTime: '13:00',
    duration: '3 hours',
    mode: 'Train',
  },
  {
    origin: 'Oslo',
    destination: 'Bergen',
    departureTime: '12:30',
    arrivalTime: '16:15',
    duration: '3 hours 45 minutes',
    mode: 'Bus',
  },
  {
    origin: 'Bergen',
    destination: 'Trondheim',
    departureTime: '08:15',
    arrivalTime: '14:00',
    duration: '5 hours 45 minutes',
    mode: 'Train',
  },
  {
    origin: 'Trondheim',
    destination: 'Bodø',
    departureTime: '11:00',
    arrivalTime: '18:30',
    duration: '7 hours 30 minutes',
    mode: 'Coastal Express',
  },
  {
    origin: 'Stavanger',
    destination: 'Ålesund',
    departureTime: '09:45',
    arrivalTime: '13:15',
    duration: '3 hours 30 minutes',
    mode: 'Ferry',
  },
  // ... Add 15 more routes covering various locations and modes (train, bus, ferry)
];

app.get('/api/validate-location/:name', (req, res) => {
  const { name } = req.params;
  const foundLocation = locations.find((location) => location.name.toLowerCase().includes(name.toLowerCase()));
  if (foundLocation) {
    res.json({ status: 'OK', message: 'Valid location found' });
  } else {
    res.json({ status: 'ERROR', message: 'Location not found' });
  }
});

app.get('/api/travel-routes/:origin/:destination', (req, res) => {
  const { origin, destination } = req.params;
  const matchingRoutes = travelRoutes.filter(
    (route) => route.origin.toLowerCase() === origin.toLowerCase() && route.destination.toLowerCase() === destination.toLowerCase()
  );

  if (matchingRoutes.length > 0) {
    res.json({ status: 'OK', routes: matchingRoutes });
  } else {
    res.json({ status: 'ERROR', message: 'No routes found for this origin and destination' });
  }
});

app.listen(port, () => {
  console.log(`Mock API server listening on port ${port}`);
});
