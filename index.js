const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// TODO: import routes later

sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
});
