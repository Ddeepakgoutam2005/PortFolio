# MERN Stack Portfolio

This project is a modern Full-Stack MERN (MongoDB, Express, React, Node.js) application, converted from a static HTML/CSS/JS portfolio.

## Project Structure

```text
/
├── client/                 # React Frontend (Vite)
│   ├── public/             # Static assets (images, fonts, css)
│   │   └── assets/
│   ├── src/
│   │   ├── components/     # Reusable React components (Hero, About, etc.)
│   │   ├── App.jsx         # Main application component & logic
│   │   └── main.jsx        # Entry point
│   ├── index.html
│   └── vite.config.js
├── server/                 # Node.js/Express Backend
│   ├── models/             # MongoDB Mongoose models
│   │   └── Contact.js
│   ├── index.js            # Server entry point & API routes
│   └── .env                # (You must create this file)
├── .gitignore              # Git ignore rules
└── README.md
```

## Prerequisites

- **Node.js** (v14+ recommended)
- **MongoDB** (Ensure MongoDB is running locally or use a cloud URI like MongoDB Atlas)
- **Git**

## Getting Started

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install Dependencies

You must install dependencies for both the `client` and `server` folders separately.

**Client (Frontend)**
```bash
cd client
npm install
```

**Server (Backend)**
```bash
cd ../server
npm install
```

### 3. Configure Environment Variables

The backend server requires environment variables to connect to MongoDB. You must create a `.env` file manually.

1.  Navigate to the `server/` directory.
2.  Create a new file named `.env`.
3.  Add the following content to the file:

```env
# MongoDB Connection String
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/portfolio

# For MongoDB Atlas (Cloud):
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/portfolio

# Server Port
PORT=5000
```

> **Note:** Replace the `MONGODB_URI` with your actual connection string if different.

### 4. Run the Application

Since the frontend and backend are separate, you need to run them in **two separate terminals**.

**Terminal 1: Start the Backend Server**
```bash
cd server
npm start
```
*The server will run on [http://localhost:5000](http://localhost:5000)*

**Terminal 2: Start the Frontend Client**
```bash
cd client
npm run dev
```
*The client will run on [http://localhost:5173](http://localhost:5173)*

## Features

- **Dynamic React Components**: Header, Hero, About, Projects, Testimonials, Contact, etc.
- **Contact Form**: Submits data to the MongoDB database via the Express API.
- **Responsive Design**: Preserves the original high-quality CSS styling.
- **Interactive Elements**: Includes scroll effects, tilt animations, and a custom cursor ported to React hooks.
