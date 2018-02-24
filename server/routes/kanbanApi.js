const express = require('express');
const router = express.Router();
const Card = require('../knex/models/Card');


router.route('/')
.get((req,res) => {
  console.log(req)
})
.post((req,res) => {
  console.log(req.body)



  
  return new Card ({
    title: inputTitle,
    priority: inputPriority,
    created_by: inputCreatedBy,
    assigned_to: inputAssignedTo
  })
  .save()
  .then(result => {
    result = result.toJSON(result)
  })
  .catch(err => {
    console.log(err)
  })
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