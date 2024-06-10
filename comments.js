// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./comments');

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
  comments.getComments()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post('/comments', (req, res) => {
  const { name, message } = req.body;
  comments.addComment(name, message)
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});