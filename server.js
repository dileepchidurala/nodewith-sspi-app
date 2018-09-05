const express = require('express'),
  bodyParser = require('body-Parser'),
  path = require('path'),
  http = require('http'),
  app = express(),
  cors = require('cors'),
  api = require('./server/routes/api');

// const api = require('./server/routes/api');

app.use(
  cors({
    origin: 'http://153.65.41.154:3000/',
    credentials: true
  })
);

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
  res.send(JSON.stringify({ name: req.connection.user }));
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
