const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const pdfParse = require('pdf-parse');
const { HfInference } = require('@huggingface/inference');


const app = express();
app.use(cors());
app.use(express.json());
const inference = new HfInference('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');

mongoose.connect('mongodb+srv://ajenitya:chPGVQ6Ef6EbR6e1@user.c04d0.mongodb.net/jobportal?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  mobileNumber: String,
  location: String,
  experience: Number,
  resume: String,
  resumeText: String,
});

const User = mongoose.model('User', userSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

async function getJobSuggestions(resumeText) {
  let suggestedJobs = '';

  try {
    for await (const chunk of inference.chatCompletionStream({
      model: 'mistralai/Mistral-Nemo-Instruct-2407',
      messages: [{ role: 'user', content: `Based on this resume: ${resumeText}, suggest the best title suitable for this,only the name,no other text.` }],
      max_tokens: 500,
    })) {
      suggestedJobs += chunk.choices[0]?.delta?.content || '';
    }
  } catch (error) {
    console.error('Error during Hugging Face API call:', error);
  }

  return suggestedJobs;
}


app.post('/api/register', upload.single('resume'), async (req, res) => {
  const { fullName, email, password, mobileNumber, location, experience } = req.body;
  const resume = req.file ? req.file.filename : null;

  try {
    let resumeText = '';
    if (req.file && req.file.path) {
      const resumeBuffer = req.file.path; 
      const dataBuffer = require('fs').readFileSync(resumeBuffer); 
      const parsedData = await pdfParse(dataBuffer); 
      resumeText = parsedData.text;
    }

  
    const newUser = new User({
      fullName,
      email,
      password,
      mobileNumber,
      location,
      experience,
      resume,
      resumeText, 
    });
    const jobSuggestions = await getJobSuggestions(resumeText);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', resumeText, jobSuggestions });
  } catch (err) {
    console.error(err);
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
