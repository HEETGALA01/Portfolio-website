# 🚀 Quick Start Guide

## Prerequisites
- Node.js (v16+)
- MongoDB (optional - for database features)
- Git

## Installation (5 minutes)

### Step 1: Install Dependencies
\`\`\`powershell
# From the root directory (web/)
npm run install:all
\`\`\`

### Step 2: Configure Backend
\`\`\`powershell
# The .env file is already created in backend/
# You can run without MongoDB and email (demo mode)
\`\`\`

### Step 3: Update Your Data
Edit \`frontend/src/data/portfolioData.js\` with your information from your resume:
- Personal details (name, email, phone, location)
- Social media links
- Skills and technologies
- Projects
- Work experience
- Education

### Step 4: Add Your Resume
Copy your resume PDF to:
\`\`\`
frontend/public/Heet resume.pdf
\`\`\`

### Step 5: Run the Project
\`\`\`powershell
# Start both frontend and backend
npm run dev
\`\`\`

Your portfolio will open at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🎨 Features You'll See

✅ **Hero Section** - Animated 3D sphere, typing effect, gradient background
✅ **About Section** - Flip card animation, progress bars, stats
✅ **Skills Section** - 3D floating icons, constellation visualization
✅ **Projects Section** - 3D tilt cards, modal popups, filters
✅ **Contact Section** - Animated form (works in demo mode without email setup)
✅ **Custom Cursor** - Magnetic effect on buttons and links
✅ **Smooth Scroll** - Buttery smooth scrolling
✅ **Loading Animation** - Premium 3D preloader

## 📝 Customization Tips

### Change Colors
Edit \`frontend/tailwind.config.js\`:
\`\`\`javascript
colors: {
  primary: {
    500: '#0ea5e9', // Your brand color
  }
}
\`\`\`

### Update Content
All content is in \`frontend/src/data/portfolioData.js\`

### Add Your Photo
Replace the emoji in About section with an image:
\`\`\`javascript
// In About.jsx, replace:
<div className="text-6xl">👨‍💻</div>
// With:
<img src="/your-photo.jpg" alt="Your Name" />
\`\`\`

## 🔧 Optional Setup

### Enable Email (Contact Form)
1. Get Gmail App Password:
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Create App Password: https://myaccount.google.com/apppasswords
   
2. Update \`backend/.env\`:
\`\`\`env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
\`\`\`

### Enable Database (Projects API)
1. **Local MongoDB:**
\`\`\`powershell
# Install MongoDB from mongodb.com
# Start MongoDB service
mongod
\`\`\`

2. **OR MongoDB Atlas (Free):**
   - Create account at mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Update \`backend/.env\`:
\`\`\`env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
\`\`\`

## 🎯 Next Steps

1. **Customize Data**: Update all fields in \`portfolioData.js\` with your resume data
2. **Add Projects**: Add real project screenshots to \`frontend/public/projects/\`
3. **Update Links**: Replace all placeholder links with your actual links
4. **Deploy**: Deploy to Vercel (frontend) + Railway/Heroku (backend)

## ❓ Need Help?

Check the main README.md for:
- Detailed setup instructions
- Deployment guides
- Troubleshooting
- API documentation

## 🎉 That's It!

Your premium portfolio is ready! The site works fully without database/email setup.
Add those features later when you're ready.

---

**Pro Tip**: Update the data in \`portfolioData.js\` section by section while referring to your resume PDF.
