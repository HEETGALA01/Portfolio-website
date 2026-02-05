# EmailJS Setup Guide

## 📧 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (Free)
3. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Select **Gmail** (or your preferred email provider)
4. Connect your Gmail account: **hgala5901@gmail.com**
5. Copy the **Service ID** (e.g., `service_xxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Message from {{from_name}} - Portfolio Contact
```

**Content:**
```html
<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

---
This message was sent from your portfolio contact form.
```

4. Click **Save**
5. Copy the **Template ID** (e.g., `template_xxxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find **Public Key**
3. Copy it (e.g., `xxxxxxxxxxxxxx`)

### Step 5: Update Your Code
Open `frontend/src/components/Contact.jsx` and replace:

```javascript
const serviceId = 'service_heetportfolio';  // Replace with your Service ID
const templateId = 'template_contactform';   // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY_HERE';    // Replace with your Public Key
```

### Step 6: Test It!
1. Save the file
2. Go to your portfolio
3. Fill out the contact form
4. Click "Send Message"
5. Check your email: **hgala5901@gmail.com** 📬

---

## ✅ What's Fixed:

1. **LinkedIn Button** - Now opens: https://www.linkedin.com/in/heet-gala001
2. **Mail Button** - Now opens: mailto:hgala5901@gmail.com
3. **Contact Form** - Sends real emails to: hgala5901@gmail.com

---

## 🚀 Free Tier Limits:
- **200 emails per month** (plenty for a portfolio)
- No credit card required
- Instant delivery

---

## 📝 Example IDs (yours will look similar):
- Service ID: `service_abc1234`
- Template ID: `template_xyz5678`
- Public Key: `abcdefGHIJKLMN123456`

---

## Need Help?
If you get stuck, EmailJS has excellent documentation:
- [Quick Start Guide](https://www.emailjs.com/docs/introduction/how-does-emailjs-work/)
- [React Integration](https://www.emailjs.com/docs/examples/reactjs/)
