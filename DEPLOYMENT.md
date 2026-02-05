# 🚀 Deployment Guide

Complete guide to deploy your portfolio website to production.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- ✅ Updated all content in \`portfolioData.js\` with your information
- ✅ Added your resume PDF
- ✅ Tested locally (both frontend and backend working)
- ✅ All environment variables configured
- ✅ Git repository created and code pushed to GitHub

## 🎯 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) ⭐ RECOMMENDED

**Best for**: Easy setup, free tier, automatic deployments

#### Deploy Frontend to Vercel

1. **Prepare Frontend**
\`\`\`powershell
cd frontend
npm run build
# Verify build works
\`\`\`

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: \`frontend\`
     - **Build Command**: \`npm run build\`
     - **Output Directory**: \`dist\`
   - Click "Deploy"

3. **Get your URL**: \`https://your-portfolio.vercel.app\`

#### Deploy Backend to Railway

1. **Prepare Backend**
   - Ensure \`.env\` is in \`.gitignore\`
   - All environment variables ready

2. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Configure:
     - **Root Directory**: \`backend\`
     - **Start Command**: \`npm start\`
   
3. **Add Environment Variables**
   - Click on your service → "Variables"
   - Add all variables from \`.env\`:
     ```
     NODE_ENV=production
     PORT=5000
     MONGODB_URI=your-mongodb-atlas-uri
     EMAIL_USER=your-email
     EMAIL_PASSWORD=your-password
     FRONTEND_URL=https://your-portfolio.vercel.app
     ```

4. **Get your API URL**: \`https://your-api.railway.app\`

5. **Update Frontend**
   - Create \`frontend/.env.production\`:
     ```
     VITE_API_URL=https://your-api.railway.app
     ```
   - Update API calls in Contact component to use \`import.meta.env.VITE_API_URL\`

---

### Option 2: Netlify (Frontend) + Heroku (Backend)

#### Deploy Frontend to Netlify

1. **Build Frontend**
\`\`\`powershell
cd frontend
npm run build
\`\`\`

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the \`dist\` folder
   - OR connect GitHub repo
   - Configure:
     - **Build Command**: \`npm run build\`
     - **Publish Directory**: \`dist\`
     - **Base Directory**: \`frontend\`

#### Deploy Backend to Heroku

1. **Install Heroku CLI**
\`\`\`powershell
# Download from heroku.com/cli
heroku login
\`\`\`

2. **Create Heroku App**
\`\`\`powershell
cd backend
heroku create your-portfolio-api
\`\`\`

3. **Set Environment Variables**
\`\`\`powershell
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASSWORD=your-password
heroku config:set FRONTEND_URL=https://your-site.netlify.app
\`\`\`

4. **Deploy**
\`\`\`powershell
git subtree push --prefix backend heroku main
\`\`\`

---

### Option 3: All-in-One on VPS (Advanced)

**Best for**: Full control, custom domain, single server

#### Using DigitalOcean/Linode/AWS EC2

1. **Create Droplet/Server**
   - Ubuntu 22.04 LTS
   - 2GB RAM minimum

2. **SSH into Server**
\`\`\`bash
ssh root@your-server-ip
\`\`\`

3. **Install Dependencies**
\`\`\`bash
# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
apt update
apt install -y mongodb-org
systemctl start mongod
systemctl enable mongod

# Install Nginx
apt install -y nginx

# Install PM2
npm install -g pm2
\`\`\`

4. **Clone and Setup Project**
\`\`\`bash
cd /var/www
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm run install:all

# Setup environment
cd backend
cp .env.example .env
nano .env  # Edit with your values

# Build frontend
cd ../frontend
npm run build
\`\`\`

5. **Configure Nginx**
\`\`\`bash
nano /etc/nginx/sites-available/portfolio
\`\`\`

Add configuration:
\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /var/www/portfolio/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

Enable site:
\`\`\`bash
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
\`\`\`

6. **Start Backend with PM2**
\`\`\`bash
cd /var/www/portfolio/backend
pm2 start server.js --name portfolio-api
pm2 startup
pm2 save
\`\`\`

7. **Setup SSL with Let's Encrypt**
\`\`\`bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d your-domain.com
\`\`\`

---

## 🗄️ Database Setup (MongoDB Atlas)

**For all deployment options, use MongoDB Atlas (FREE):**

1. **Create Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free

2. **Create Cluster**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select region closest to your users
   - Click "Create"

3. **Setup Access**
   - **Database Access**: Create user with password
   - **Network Access**: Add IP \`0.0.0.0/0\` (allow all) for production

4. **Get Connection String**
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace \`<username>\`, \`<password>\`, and \`<dbname>\`
   - Example: \`mongodb+srv://user:pass@cluster.mongodb.net/portfolio?retryWrites=true&w=majority\`

5. **Use in Environment Variables**
   - Add to Railway/Heroku/VPS environment:
     \`MONGODB_URI=your-connection-string\`

---

## 📧 Email Setup (Gmail)

**For contact form to work:**

1. **Enable 2-Step Verification**
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Create App Password**
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Add to Environment**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=16-character-app-password
   EMAIL_SERVICE=gmail
   ```

---

## 🌐 Custom Domain Setup

### Connect Domain to Vercel

1. Go to your project → Settings → Domains
2. Add your domain: \`yourdomain.com\`
3. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Connect Domain to Railway

1. Go to your service → Settings → Networking
2. Add custom domain
3. Update DNS:
   ```
   Type: CNAME
   Name: api
   Value: your-app.railway.app
   ```

---

## ✅ Post-Deployment Checklist

After deployment:
- [ ] Frontend loads correctly
- [ ] All sections display properly
- [ ] Links work (social, GitHub, demo)
- [ ] Resume downloads
- [ ] Contact form sends emails
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)
- [ ] SEO meta tags present
- [ ] Analytics setup (Google Analytics)
- [ ] Custom domain connected (optional)
- [ ] SSL certificate active (HTTPS)

---

## 🐛 Troubleshooting

### Frontend Issues

**Build fails:**
\`\`\`powershell
# Clear cache and rebuild
rm -rf node_modules .vite dist
npm install
npm run build
\`\`\`

**Environment variables not working:**
- Prefix with \`VITE_\` for Vite: \`VITE_API_URL\`
- Restart dev server after adding

### Backend Issues

**Can't connect to MongoDB:**
- Verify connection string format
- Check Network Access whitelist in Atlas
- Test locally first

**Emails not sending:**
- Verify Gmail App Password
- Check EMAIL_USER and EMAIL_PASSWORD
- Test with simple email service

**CORS errors:**
- Update FRONTEND_URL in backend .env
- Add frontend URL to CORS whitelist

---

## 📊 Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to \`frontend/index.html\`:
\`\`\`html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
\`\`\`

### Monitor Backend

**Railway/Heroku:**
- Built-in logs and metrics
- Check under "Observability" or "Metrics"

**VPS:**
\`\`\`bash
# View logs
pm2 logs portfolio-api

# Monitor
pm2 monit
\`\`\`

---

## 🔄 Continuous Deployment

### Automatic Deployments

Both Vercel and Railway support auto-deploy from GitHub:
1. Push code to GitHub
2. Deployment triggers automatically
3. New version goes live in ~2 minutes

### Manual Deployment

**Frontend:**
\`\`\`powershell
cd frontend
npm run build
# Upload dist/ to hosting
\`\`\`

**Backend:**
\`\`\`powershell
git add .
git commit -m "Update"
git push heroku main  # or railway
\`\`\`

---

## 💰 Cost Breakdown

### Free Tier (Recommended for Portfolio)
- **Vercel**: Unlimited projects, 100GB bandwidth
- **Railway**: $5 credit/month (usually enough)
- **MongoDB Atlas**: 512MB storage, free forever
- **Gmail**: Free
- **Total**: ~$0-5/month

### Paid Options
- **Custom Domain**: $10-15/year
- **Increased Railway limits**: $5-20/month
- **VPS (DigitalOcean)**: $6-12/month
- **MongoDB Atlas (paid)**: $9+/month

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live on the internet.

**Share your portfolio:**
- Update LinkedIn
- Add to GitHub profile
- Share on Twitter
- Update resume

**Next Steps:**
1. Monitor analytics
2. Gather feedback
3. Keep projects updated
4. Add new features
5. Optimize performance

---

## 📞 Support

Having issues? Check:
1. README.md - Full documentation
2. QUICKSTART.md - Quick setup guide
3. UPDATE_GUIDE.md - Content updates
4. GitHub Issues - Report problems

---

Made with ❤️ by Heet
