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
│   ├── .env                # Environment variables
│   └── index.js            # Server entry point & API routes
├── package.json            # Root configuration & scripts
└── README.md
```

## Prerequisites

- **Node.js** (v14+ recommended)
- **MongoDB** (Ensure MongoDB is running locally or use a cloud URI)

## Installation

1.  **Clone or Download** the repository.
2.  **Install Dependencies** for both client and server:
    ```bash
    npm run install-all
    ```
    *Alternatively, you can install them manually:*
    ```bash
    npm install
    cd client && npm install
    cd ../server && npm install
    ```

## Configuration

1.  **Backend Environment Variables**:
    - The server requires a `.env` file in the `server/` directory.
    - Default content created:
      ```env
      MONGODB_URI=mongodb://localhost:27017/portfolio
      PORT=5000
      ```
    - Update `MONGODB_URI` if your database configuration differs.

## Running the Application

To run both the backend server and the frontend client simultaneously:

```bash
npm start
```

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend**: [http://localhost:5000](http://localhost:5000)

## Features

- **Dynamic React Components**: Header, Hero, About, Projects, Testimonials, Contact, etc.
- **Contact Form**: Submits data to the MongoDB database via the Express API.
- **Responsive Design**: Preserves the original high-quality CSS styling.
- **Interactive Elements**: Includes scroll effects, tilt animations, and a custom cursor ported to React hooks.

## Development

- **Client**:
  - Run `npm run client` to start only the Vite dev server.
- **Server**:
  - Run `npm run server` to start only the Express server.
