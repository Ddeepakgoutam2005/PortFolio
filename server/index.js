// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Contact = require('./models/Contact');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // Routes
// app.post('/api/contact', async (req, res) => {
//   try {
//     const { name, email_address, phone, message } = req.body;
    
//     const newContact = new Contact({
//       name,
//       email_address,
//       phone,
//       message,
//     });

//     await newContact.save();
//     res.status(201).json({ message: 'Submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// app.get('/', (req, res) => {
//     res.send('API is running');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// 🔐 CORS setup for both development and production
const allowedOrigins = [
  process.env.FRONTEND_URL,      // Production frontend
  'http://localhost:5173'         // Local development frontend
];

app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin (Postman, curl, etc.)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `CORS policy: Access from the origin ${origin} is not allowed.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email_address, phone, message } = req.body;
    
    if(!name || !email_address || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({ name, email_address, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Submitted successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
