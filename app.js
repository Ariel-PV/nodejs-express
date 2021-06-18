const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Word of Express');
});

app.get('/about', (req, res ) => {
    res.send('This is a small Express proyect');
});

app.get('/contact-us', (req, res ) => {
    res.send('My email is ariel@hotmail.com');
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost${port}`);
})