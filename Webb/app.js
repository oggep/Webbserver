const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + "\\Client\\index.html"))
app.get('/korv', (req, res) => res.sendFile(__dirname + "\\Client\\korv.css"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))