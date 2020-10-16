const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webshop', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => res.sendFile(__dirname + "\\Client\\index.html"))
app.get('/korv', (req, res) => res.sendFile(__dirname + "\\Client\\korv.css"))

const userSchema = new mongoose.Schema({
  unamne: String,
  email: String,
});

const User = mongoose.model('User', usernSchema);


app.post('/', (req, res) => {
    res.json(req.body);
});


user.save();