//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send('smoke')
})







app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
})