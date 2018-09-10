const express = require('express'),
  bodyParser = require('body-Parser'),
  path = require('path'),
  http = require('http'),
  app = express(),
  cors = require('cors'),
  api = require('./server/routes/api'),
  log = require('log-to-file');

// const api = require('./server/routes/api');

app.use(
  cors({
    origin: 'http://153.65.41.154:3000/',
    credentials: true
  })
);
app.use('/', () => {
  log('Got a request', './server/logs/1allrequests.txt');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/keralafundproject')));

app.use('/user', function(req, res, next) {
  var nodeSSPI = require('node-sspi');
  var nodeSSPIObj = new nodeSSPI({
    retrieveGroups: true,
    authoritative: false
  });
  nodeSSPIObj.authenticate(req, res, function(err) {
    res.finished || next();
  });
});

app.use('/user', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.connection.user) {
    res.send(JSON.stringify({ name: req.connection.user }));
    log(
      `getting ${req.connection.user} is successful`,
      './server/logs/3getUserOk.txt'
    );
  } else {
    log(
      `Got error while fetching user ${req.connection.user} is not successful`,
      './server/logs/2getUserErr.txt'
    );
  }
});

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/keralafundproject/index.html'));
});

//set port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on port number:${port}`));
