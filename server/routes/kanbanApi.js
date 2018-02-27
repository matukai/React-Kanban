const express = require('express');
const router = express.Router();
const Card = require('../knex/models/Card');


router.route('/')
.get( (req,res) => {
  //console.log(req)
  return Card
  .fetchAll()
  .then(result => {
    return res.json(result)
  })
  .catch(err => {
    console.log(err)
  })
})
.post((req,res) => {
  //console.log(req.body)
  return new Card ({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  })
  .save()
  .then(result => {
    //console.log(result)
    return res.json(result)
  })
  .catch(err => {
    console.log(err)
  })
})

router.route('/:id')
.put((req,res) => {
  console.log(req.params.id)
  return new Card({'id': req.params.id})
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
.delete((req,res) => {
  console.log(req)
  return new Card({'id':req.params.id})
  .destroy()
  .then(err => {
    console.log('DESTROY PROOOOOOOMISE')
    return res.json(result)
  })
  .catch(err => {
    console.log(err)
  })
})


















module.exports = router;