var express = require('express'),
  router = express.Router(),
  db = require('../dbconfig/ContributeTable'),
  time = require('time')(Date),
  // outlook = require('../logindetails'),
  // nodeoutlook = require('nodejs-nodemailer-outlook'),
  log = require('log-to-file'),
  mail = require('../mailling/outllokmail');

// const details = new outlook();

var d = new Date();
d.setTimezone('IST', true);
d.getTimezone();

router.get('/fullname/', (req, res) => {
  var query = `select full_name from ${db.usertable} where qlid='${
    req.query.id
  }'`;
  db.teradata
    .read(query)
    .then(response => {
      res.send(JSON.stringify(response));
    })
    .catch(error => console.log(error));
});

router.get('/validate/', (req, res) => {
  var query = `select * from ${db.db_name} where userid = '${req.query.id}'`;
  db.teradata.read(query).then(response => {
    if (response[0] === undefined) {
      res.sendStatus(200);
      log(
        `${
          req.query.id
        } at ${d.getFullYear()}/${d.getMonth()}/${d.getDate()} :${d.getHours()} :${d.getMinutes()} :${d.getSeconds()}`,
        './server/logs/5formOk.txt'
      );
    } else {
      log(
        `${
          req.query.id
        } at ${d.getFullYear()}/${d.getMonth()}/${d.getDate()} :${d.getHours()} :${d.getMinutes()} :${d.getSeconds()}`,
        './server/logs/4duplicateError.txt'
      );
      res.sendStatus(405);
    }
  });
});

// https://github.com/nodemailer/nodemailer/issues/742
router.post('/contribute', (req, res) => {
  var query = `INSERT INTO ${db.db_name} (userid,fullname,amount) values('${
    req.body.id
  }',
  '${req.body.name}',${req.body.amount});`;
  db.teradata
    .write(query)
    .then(response => {
      log(
        `${req.body.id} has contributed ${
          req.body.amount
        } at ${d.getFullYear()}/${d.getMonth()}/${d.getDate()} :${d.getHours()} :${d.getMinutes()} :${d.getSeconds()}`,
        './server/logs/7formSubmitOk.txt'
      );
      try {
        const userid = req.body.id;
        mail.mailfunction(userid, req.body.amount);
        // nodeoutlook.sendEmail({
        //   auth: {
        //     user: details.id,
        //     pass: details.passowrd
        //   },
        //   host: 'outlook.td.teradata.com',
        //   port: 25,
        //   from: details.id,
        //   to: userid + '@teradata.com',
        //   subject: `Hey thank you for contributing to kerala fund and amount you are contribution is ${
        //     req.body.amount
        //   }. For any changes contact us`,
        //   html: '<b>This is bold text</b>',
        //   text: 'This is text version!'
        // });
      } catch (err) {
        log(
          `${req.body.id} has tried contributed ${
            req.body.amount
          } at ${d.getFullYear()}/${d.getMonth()}/${d.getDate()} :${d.getHours()} :${d.getMinutes()} :${d.getSeconds()} and the error is ${err}`,
          './server/logs/8mailError.txt'
        );
        console.log(err);
      }
      log(
        `${req.body.id} has contributed ${
          req.body.amount
        } at ${d.getFullYear()}/${d.getMonth()}/${d.getDate()} :${d.getHours()} :${d.getMinutes()} :${d.getSeconds()}`,
        './server/logs/9mailOk.txt'
      );
      res.sendStatus(201);
    })
    .catch(error => {
      log(
        `${req.body.id} has tried contributed ${
          req.body.amount
        } at ${d.getFullYear()}/${d.getMonth()}/${d.getDate()} :${d.getHours()} :${d.getMinutes()} :${d.getSeconds()} and the error is ${error}`,
        './server/logs/6formSubmitError.txt'
      );
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
