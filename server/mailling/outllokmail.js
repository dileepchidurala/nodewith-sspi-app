const outlook = require('../logindetails'),
nodeoutlook = require('nodejs-nodemailer-outlook');


const details = new outlook();

mailfunction = (user)=> {
try {
    nodeoutlook.sendEmail({
      auth: {
        user: details.id,
        pass: details.passowrd
      },
      host: 'outlook.td.teradata.com',
      port: 25,
      from: details.id,
      to: user + '@teradata.com',
      subject: `Hey thank you for conributing to kerala fund and amount you are conributing is ${
        req.body.amount
      }. For any changes contact us`,
      html: '<b>This is bold text</b>',
      text: 'This is text version!'
    });
  } catch (err) {
    log(`${user}`, 'mailerror.txt');
    console.log(err);
  }
}
