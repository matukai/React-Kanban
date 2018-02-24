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
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  })
  .save()
  // .then(result => {
  //   console.log(result)
  //   result = result.toJSON(result)
  // })
  // .catch(err => {
  //   console.log(err)
  // })
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