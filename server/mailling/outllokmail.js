const outlook = require('../logindetails'),
  nodeoutlook = require('nodejs-nodemailer-outlook'),
  logfunc = require('../logs/logfunction');

const details = new outlook();

// https://github.com/nodemailer/nodemailer/issues/742

mailfunction = (user, amount) => {
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
      subject: `Hey thank you for contributing to kerala fund `,
      html: `Hey thank you for contributing to kerala fund and amount <b>you are contribution is ${amount}</b>. For any changes contact us`,
      text: 'This is text version!'
    });
    logfunc(`${user} amount: ${amount}`, `9mailOk.txt`);
  } catch (error) {
    logfunc(`${user} amount: ${amount}`, `8mailError.txt`, true, error);
  }
};
exports.mailfunction = mailfunction;
