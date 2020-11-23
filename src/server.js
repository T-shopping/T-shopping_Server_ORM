const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true, }));
app.use(authMiddleware);

const router = require('./router');

app.use('/', router);

app.listen(8080, () => {
    console.log('Server is running at 8080');
})