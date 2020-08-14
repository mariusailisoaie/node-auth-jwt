const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(express.static('public'));

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(result => app.listen(PORT, () => console.log(`Server running on port ${ PORT }`)))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
