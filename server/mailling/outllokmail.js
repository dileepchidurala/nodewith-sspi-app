const outlook = require('../logindetails'),
  nodeoutlook = require('nodejs-nodemailer-outlook');

const details = new outlook();

mailfunction = (user, amount) => {
  nodeoutlook.sendEmail({
    auth: {
      user: details.id,
      pass: details.passowrd
    },
    host: 'outlook.td.teradata.com',
    port: 25,
    from: details.id,
    to: user + '@teradata.com',
    subject: `Hey thank you for contributing to kerala fund `,
    html: `Hey thank you for contributing to kerala fund and amount <b>you are contribution is ${amount}</b>. For any changes contact us`,
    text: 'This is text version!'
  });
};
exports.mailfunction = mailfunction;
