const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const filesRouter = require('./routes/files');
const config = require('./config');
const app = express();
const port = config.port;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(filesRouter);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));