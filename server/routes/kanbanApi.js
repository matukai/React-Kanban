const express = require('express');
const router = express.Router();
const Card = require('../knex/models/Card');


router.route('/')
.get( (req,res) => {
  return Kanban.fetchAll()
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    console.log(err)
  })
})
.post((req,res) => {
  return new Card ({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  })
  .save()
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    console.log(err)
  })
})

router.route('/:id')
.put((req,res) => {
  console.log(req)
  let id = req.params.id;
  console.log(id)
  return new Card({'id': id})
  .save({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  })
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    console.log(err)
  })
})



















module.exports = router;