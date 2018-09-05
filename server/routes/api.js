var express = require('express'),
  router = express.Router(),
  db = require('../dbconfig/ContributeTable');

router.get('/contri', (req, res) => {
  var query = `select amount from ${db.db_name};`;
  db.teradata
    .read(query)
    .then(response => res.send(response))
    .catch(err => console.log(err));
});

router.post('/contribute', (req, res) => {
  var query = `INSERT INTO ${db.db_name} values('${req.body.id}',
  '${req.body.name}',${req.body.amount});`;
  db.teradata
    .write(query)
    .then(response => res.sendStatus(200))
    .catch(error => res.send(error));
});

module.exports = router;
