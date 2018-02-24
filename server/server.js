//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const kanbanRoutes = require('./routes/kanbanApi');


//CONSTANTS
const PORT = process.env.PORT || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/kanban', kanbanRoutes);





// app.get('/', (req,res) => {
//   res.send('smoke')
// })







app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
})