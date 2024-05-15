const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const evaluateExpression = require('./evaluateExpression');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    const result = evaluateExpression(expression);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});
