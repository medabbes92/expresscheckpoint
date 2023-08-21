const express = require('express');
const app = express();
const checkWorkingHours= require('./middleware/horaire')
app.set('view engine', 'ejs');


// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/middleware/views/home.html');; 
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/middleware/views/services.html'); 
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/middleware/views/contact.html') 
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/middleware/views/style.css') 
});

app.use(express.static(__dirname + '/views'));


app.use(checkWorkingHours);
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
