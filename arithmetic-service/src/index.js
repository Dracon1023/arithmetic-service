// const express = require('express')
// const app = express();
// const port = 3000;

// app.get('/',(req,res) => {
//     res.send('Arithmetic service')
// });

// app.listen(port);

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Arithmetic service');
});
app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
