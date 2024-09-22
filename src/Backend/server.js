const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

// Initialize app and middleware
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ajenitya:chPGVQ6Ef6EbR6e1@user.c04d0.mongodb.net/jobportal?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  mobileNumber: String,
  location: String,
  experience: Number,
  resume: String,
});

const User = mongoose.model('User', userSchema);

// Multer setup for file uploads (resume)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// User registration route
app.post('/api/register', upload.single('resume'), async (req, res) => {
  const { fullName, email, password, mobileNumber, location, experience } = req.body;
  const resume = req.file ? req.file.filename : null;

  const newUser = new User({
    fullName,
    email,
    password,
    mobileNumber,
    location,
    experience,
    resume,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));