require('dotenv').config();
const express = require('express');
const controllers = require('./controllers');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.options("/*", function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  res.sendStatus(200);
});

app.get('/account', controllers.getAccount);
app.get('/summoner', controllers.getSummoner);
app.get('/allMatches', controllers.getAllMatches);
app.get('/match', controllers.getMatch);
app.get('/masteryPoints', controllers.getMasteryPoints);
app.get('/ranked', controllers.getRanked);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('error');
  }
  console.log(`listening on port ${process.env.PORT}`);
})