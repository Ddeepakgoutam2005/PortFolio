# Deepak Goutam - Static Portfolio

This is a modern, responsive, and fully static React portfolio website. It has been optimized for performance and ease of deployment.

## Features
- **Fast & Lightweight**: Built with React and Vite for optimal performance.
- **FormSubmit Integration**: Contact form submissions are handled by FormSubmit.co via AJAX, delivering messages directly to your email without refreshing the page.
- **Responsive Design**: Optimized for all screen sizes, from mobile to desktop.
- **Smooth Animations**: Includes interactive tilt effects, custom cursors, and an infinite horizontal project slider.
- **Static Deployment**: Fully compatible with Vercel, Netlify, and GitHub Pages.

## Project Structure
```text
/
├── public/             # Static assets (images, fonts, css)
├── src/
│   ├── components/     # Reusable React components
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd PortFolio-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the local development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production Build
To create a production-ready build:
```bash
npm run build
```
The output will be in the `dist/` directory.

## Contact Form Setup
The contact form uses [FormSubmit](https://formsubmit.co/). To receive submissions:
1. Open `src/components/Contact.jsx`.
2. Update the email address in the `handleSubmit` function:
   ```javascript
   const response = await fetch("https://formsubmit.co/ajax/your-email@example.com", { ... });
   ```
3. The first time you submit the form from your live site, you'll receive an activation email from FormSubmit. Confirm it to start receiving messages.

## Deployment on Vercel
1. Push your code to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel will automatically detect the Vite project and deploy it.

## License
This project is open-source and available for personal use.
