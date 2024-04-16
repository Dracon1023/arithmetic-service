require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors')
const { add } = require("./arithmetica")
const app = express();
app.use(cors())

if (!process.env.PORT) {
    throw new Error('Please specify the port number for the HTTP server with the environment variable PORT.')
}

const port = process.env.PORT;
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root path
/*
app.get('/', (req, res) => {
    res.send('Arithmetic service');
});
*/
app.get('/', (req, res) => {
    res.send('Arithmetic service - last updated 3/5/2024');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n)
    let m = Number(req.params.m)
    let sum = add(n, m)
    //res.body = JSON.stringify({ "sum": sum})
    res.json({ sum: `${sum}` })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

