const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const horseRouter = require('./routes/horseRouter');
const sponsorRouter = require('./routes/sponsorRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/horses', horseRouter);
app.use('/sponsors', sponsorRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-html');
    res.end('<html><body><h1>Portfolio Express Server</h1></body></html>')
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});