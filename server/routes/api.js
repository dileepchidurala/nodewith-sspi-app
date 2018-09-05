var express = require('express'),
  router = express.Router(),
  db = require('../dbconfig/ContributeTable'),
  time = require('time')(Date);

var d = new Date();
d.setTimezone('IST', true);
d.getTimezone();

// router.get('/contri', (req, res) => {
//   var query = `select amount from ${db.db_name};`;
//   db.teradata
//     .read(query)
//     .then(response => res.send(response))
//     .catch(err => console.log(err));
// });

router.post('/contribute', (req, res) => {
  var query = `INSERT INTO ${db.db_name} values('${req.body.id}',
  '${req.body.name}',${req.body.amount});`;
  db.teradata
    .write(query)
    .then(response => {
      console.log(
        `${req.body.id} has contributed ${req.body.amount} at ${d.toString()}`
      );
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(
        `Error occured while ${req.body.id} has contributing ${
          req.body.amount
        } at ${d.toString()}`
      );
      res.sendStatus(501);
    });
});

module.exports = router;
