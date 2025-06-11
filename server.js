const express = require('express');
const path = require('path');
const multer = require('multer');
// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  }
});

const app = express();
const upload = multer({ storage: storage });
// Set up the server  
const PORT = 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));
// Set up body parser for form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'project.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'profile.html'));
});
// Set up multer middleware
app.post('/CCform', upload.single('file'), (req, res) => {
res.send({ body: req.body, file: req.file });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
