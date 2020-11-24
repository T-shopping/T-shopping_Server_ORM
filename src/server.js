require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true, }));
// app.use(authMiddleware);

const router = require('./router');
const { PORT } = process.env;

app.use('/static', express.static('public'));
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})