const express = require('express');
const router = express.Router();

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
  res.send({type: 'GET'});
});

// add a new ninja
router.post('/ninjas', function(req, res){
  res.send({type: 'POST'});
});

// update a ninja info
router.put('/ninjas/:id', function(req, res){
  res.send({type: 'GET'});
});

// delete a ninja
router.delete('/ninjas/:id', function(req, res){
  res.send({type: 'DELETE'});
});

module.exports = router;
