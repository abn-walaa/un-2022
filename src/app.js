const path = require('path')
require('dotenv').config({ path: path.join(__dirname, "../.env") })
const express = require('express');
const app = express();
const avarage = require('./routers/avg');
const cors = require('cors')
const limit = require('express-rate-limit')
const helmet = require('helmet')

app.use(limit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,

}))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.get('*', express.static(path.join(__dirname, "../public/")))
app.use('/show', avarage);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
