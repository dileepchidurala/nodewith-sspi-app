var express = require('express'),
  router = express.Router(),
  db = require('../dbconfig/ContributeTable'),
  time = require('time')(Date),
  outlook = require('../logindetails'),
  nodeoutlook = require('nodejs-nodemailer-outlook'),
  log = require('log-to-file');

const details = new outlook();

var d = new Date();
d.setTimezone('IST', true);
d.getTimezone();

router.get('/validate/', (req, res) => {
  var query = `select * from ${db.db_name} where userid = '${req.query.id}'`;
  db.teradata.read(query).then(response => {
    if (response[0] === undefined) {
      res.sendStatus(200);
    } else {
      res.sendStatus(405);
    }
  });
});

// https://github.com/nodemailer/nodemailer/issues/742
router.post('/contribute', (req, res) => {
  log(`${req.body.id}`);
  var query = `INSERT INTO ${db.db_name} (userid,fullname,amount) values('${
    req.body.id
  }',
  '${req.body.name}',${req.body.amount});`;
  db.teradata
    .write(query)
    .then(response => {
      log(
        `${req.body.id} has contributed ${req.body.amount} at ${d.toString()}`,
        'contribute.txt'
      );
      console.log(
        `${req.body.id} has contributed ${req.body.amount} at ${d.toString()}`
      );
      try {
        const userid = req.body.id; // .substring(3);
        nodeoutlook.sendEmail({
          auth: {
            user: details.id,
            pass: details.passowrd
          },
          host: 'outlook.td.teradata.com',
          port: 25,
          from: details.id,
          to: userid + '@teradata.com',
          subject: `Hey thank you for conributing to kerala fund and amount you are conributing is ${
            req.body.amount
          }. For any changes contact us`,
          html: '<b>This is bold text</b>',
          text: 'This is text version!'
        });
      } catch (err) {
        log(`${req.body.id}`, 'mailerror.txt');
        console.log(err);
      }
      log(`${req.body.id}`, 'success.txt');
      res.sendStatus(201);
    })
    .catch(error => {
      log(`${req.body.id}`, 'submittionError.txt');
      console.log(
        `Error occured while ${req.body.id} has contributing ${
          req.body.amount
        } at ${d.toString()}`
      );
      console.log(error);
      res.sendStatus(501);
    });
});

module.exports = router;
