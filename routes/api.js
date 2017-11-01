const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  res.send({type: 'GET'});
});

// add a new ninja
router.post('/ninjas', function(req, res, next){
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);
});

// update a ninja info
router.put('/ninjas/:id', function(req, res, next){
  res.send({type: 'GET'});
});

// delete a ninja
router.delete('/ninjas/:id', function(req, res, next){
  res.send({type: 'DELETE'});
});

module.exports = router;
