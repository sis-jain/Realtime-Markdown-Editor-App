const express = require('express');
const bodyParser = require('body-parser');
const { marked } = require('marked');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API Endpoint
app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).json({ error: 'Markdown content is required' });
  }
  const html = marked(markdown);
  res.json({ html });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});