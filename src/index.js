const express = require('express');
const path = require('path');
const cors = require('cors')
const { add } = require("./arithmetica")
const app = express();
app.use(cors())
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root path
/*
app.get('/', (req, res) => {
    res.send('Arithmetic service');
});
*/
app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname})
})

app.get('/:n/:m', (req, res) => {
    let n = Number(req.params.n)
    let m = Number(req.params.m)
    let sum = add(n, m)
    //res.body = JSON.stringify({ "sum": sum})
    res.status(200).json({ sum: `${sum}` })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

