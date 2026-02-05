# 🚀 Premium Portfolio Website

A modern, premium portfolio website featuring stunning 3D effects, smooth animations, and interactive elements built with React, Three.js, Node.js, and MongoDB.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready-success)
![React](https://img.shields.io/badge/React-18.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green)
![Three.js](https://img.shields.io/badge/Three.js-3D-orange)

## ✨ Features

### 🎨 Premium Design
- **3D Graphics**: Interactive Three.js backgrounds and animations
- **Custom Cursor**: Animated cursor with magnetic effects on hover
- **Glass Morphism**: Modern frosted glass effect cards
- **Gradient Animations**: Dynamic gradient meshes and backgrounds
- **Smooth Scroll**: Buttery smooth scrolling with Lenis
- **Dark Mode**: Elegant dark theme with smooth transitions

### 🎭 Animations
- **GSAP**: Professional scroll-triggered animations
- **Framer Motion**: Fluid page transitions and micro-interactions
- **React Spring**: Physics-based animations
- **3D Card Effects**: Tilt and depth effects on hover
- **Particle Systems**: Animated background particles
- **Loading Animation**: Premium preloader with 3D elements

### 📱 Responsive Sections
1. **Hero Section**: Animated 3D sphere, typing animation, gradient background
2. **About Section**: Card flip animations, animated progress bars, parallax effects
3. **Skills Section**: 3D floating icons, interactive constellation visualization
4. **Projects Section**: 3D card hover effects, modal transitions, filterable gallery
5. **Contact Section**: Animated form, 3D icons, email integration

### 🔧 Technical Features
- **Performance Optimized**: Code splitting, lazy loading, optimized rendering
- **SEO Friendly**: Meta tags, semantic HTML, optimized for search engines
- **Accessible**: ARIA labels, keyboard navigation, reduced motion support
- **Mobile Responsive**: Fully optimized for all screen sizes
- **API Backend**: RESTful API with Express and MongoDB
- **Email Integration**: Contact form with NodeMailer

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Three.js / React Three Fiber** - 3D graphics
- **Framer Motion** - Animation library
- **GSAP** - Professional animations
- **React Spring** - Physics-based animations
- **Tailwind CSS** - Utility-first styling
- **Lenis** - Smooth scroll
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **NodeMailer** - Email service
- **Express Validator** - Input validation
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas account)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
cd web
\`\`\`

### 2. Install Dependencies

#### Install Root Dependencies
\`\`\`bash
npm install
\`\`\`

#### Install All Project Dependencies
\`\`\`bash
npm run install:all
\`\`\`

Or install separately:

\`\`\`bash
# Frontend dependencies
cd frontend
npm install

# Backend dependencies
cd ../backend
npm install
\`\`\`

### 3. Configure Environment Variables

#### Backend Configuration

1. Copy the example environment file:
\`\`\`bash
cd backend
cp .env.example .env
\`\`\`

2. Update \`.env\` with your configuration:

\`\`\`env
# Server Configuration
NODE_ENV=development
PORT=5000

# Frontend URL
FRONTEND_URL=http://localhost:3000

# MongoDB (Choose one option)
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# Option 2: MongoDB Atlas (Recommended)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Email Configuration (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
OWNER_NAME=Heet
\`\`\`

#### Email Setup (Gmail)

1. Enable 2-Step Verification in your Google Account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Select "Mail" and your device
4. Copy the 16-character password
5. Use it in the \`EMAIL_PASSWORD\` field

#### MongoDB Setup

**Option 1: Local MongoDB**
\`\`\`bash
# Install MongoDB locally
# Windows: Download from https://www.mongodb.com/try/download/community
# Mac: brew install mongodb-community
# Linux: sudo apt-get install mongodb

# Start MongoDB service
mongod
\`\`\`

**Option 2: MongoDB Atlas (Recommended)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (free tier available)
3. Click "Connect" and choose "Connect your application"
4. Copy the connection string
5. Replace \`<username>\`, \`<password>\`, and \`<database>\`

### 4. Update Portfolio Data

Edit \`frontend/src/data/portfolioData.js\` with your personal information:

\`\`\`javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  location: "Your City, Country",
  // ... update all fields with your data
};
\`\`\`

Replace the data from your resume PDF for:
- Personal information
- Skills and technologies
- Work experience
- Education
- Projects
- Certifications

### 5. Add Your Resume PDF

Copy your resume PDF to:
\`\`\`
frontend/public/Heet resume.pdf
\`\`\`

## 🎮 Running the Application

### Development Mode

#### Run Both Frontend and Backend Concurrently
\`\`\`bash
npm run dev
\`\`\`

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

#### Run Separately

**Frontend Only:**
\`\`\`bash
cd frontend
npm run dev
\`\`\`

**Backend Only:**
\`\`\`bash
cd backend
npm run dev
\`\`\`

### Production Build

#### Build Frontend
\`\`\`bash
cd frontend
npm run build
\`\`\`

The build files will be in \`frontend/dist/\`

#### Start Backend in Production
\`\`\`bash
cd backend
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
web/
├── frontend/
│   ├── public/
│   │   └── Heet resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx          # Hero section with 3D effects
│   │   │   ├── About.jsx         # About section with card flip
│   │   │   ├── Skills.jsx        # Skills with 3D visualization
│   │   │   ├── Projects.jsx      # Projects gallery with 3D cards
│   │   │   ├── Contact.jsx       # Contact form with animations
│   │   │   ├── Navbar.jsx        # Navigation bar
│   │   │   ├── Footer.jsx        # Footer section
│   │   │   ├── CustomCursor.jsx  # Custom animated cursor
│   │   │   └── Loader.jsx        # Loading animation
│   │   ├── data/
│   │   │   └── portfolioData.js  # Your portfolio content
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── routes/
│   │   ├── contact.js            # Contact form API
│   │   └── projects.js           # Projects CRUD API
│   ├── server.js                 # Express server
│   ├── package.json
│   ├── .env                      # Environment variables
│   └── .env.example              # Environment template
├── package.json                  # Root package.json
└── README.md
\`\`\`

## 🎨 Customization Guide

### Colors & Theme

Edit \`frontend/tailwind.config.js\`:

\`\`\`javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change primary color
    // ... other shades
  },
}
\`\`\`

### Animations

- **GSAP animations**: Edit in component files (Hero.jsx, About.jsx, etc.)
- **Framer Motion**: Modify motion components in each section
- **Custom cursor**: Customize in CustomCursor.jsx

### Content

All content is in \`frontend/src/data/portfolioData.js\`:
- Personal information
- About section
- Skills and technologies
- Projects
- Experience
- Education
- Services

## 🌐 API Endpoints

### Contact API
- **POST** \`/api/contact\` - Send contact form email

### Projects API
- **GET** \`/api/projects\` - Get all projects
- **GET** \`/api/projects/:id\` - Get single project
- **POST** \`/api/projects\` - Create new project
- **PUT** \`/api/projects/:id\` - Update project
- **DELETE** \`/api/projects/:id\` - Delete project

## 🚢 Deployment

### Frontend (Vercel - Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Set root directory to \`frontend\`
4. Deploy

### Frontend (Netlify)

\`\`\`bash
cd frontend
npm run build
# Upload dist folder to Netlify
\`\`\`

### Backend (Heroku)

\`\`\`bash
# Install Heroku CLI
heroku login
heroku create your-portfolio-api

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASSWORD=your-password

# Deploy
git subtree push --prefix backend heroku main
\`\`\`

### Backend (Railway)

1. Connect your GitHub repository
2. Select \`backend\` folder as root
3. Add environment variables
4. Deploy

## 🔧 Troubleshooting

### Port Already in Use
\`\`\`bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
\`\`\`

### MongoDB Connection Issues
- Ensure MongoDB is running locally OR
- Check MongoDB Atlas whitelist IPs
- Verify connection string format

### Email Not Sending
- Verify Gmail App Password is correct
- Check "Less secure app access" is enabled
- Use App-specific password (2FA enabled)

### Build Errors
\`\`\`bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf frontend/.vite
\`\`\`

## 📚 Resources

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://docs.mongodb.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Heet**
- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Three.js community for amazing 3D graphics
- Framer Motion for smooth animations
- Tailwind CSS for utility classes
- All open-source contributors

---

Made with ❤️ and ☕ by Heet
