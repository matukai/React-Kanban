const express = require('express');
const router = express.Router();



router.route('/')
.get((req, res) => {
  console.log(req)
})


// .get( (req,res) => {
//   return Kanban.fetchAll()
//   .then(request => {
//     console.log(request)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// })


















module.exports = router;