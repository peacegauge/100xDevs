const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

//middleware
app.use(bodyParser.json())

app.get('/listen', (req, res) => {
    res.json({
        name: "Ezra",
        whatsSaid : "There is an issue with the builders",
    })
})

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
