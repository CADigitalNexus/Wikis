const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const { prototype } = require('events')
const app = express()

const port = process.env.PORT || 3000

app.use(cors({
  origin: '*'
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('running')
});