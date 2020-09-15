const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => res.sendFile(__dirname + "\\Client\\index.html"))
app.get('/korv', (req, res) => res.sendFile(__dirname + "\\Client\\korv.css"))

app.post('/', (req, res) => {
    res.json(req.body);
    console.log(req.body["uname"] +  " " +  req.body["email"]);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
