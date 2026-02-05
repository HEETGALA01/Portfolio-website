# 📝 How to Update Portfolio Data from Your Resume

This guide will help you transfer information from your "Heet resume.pdf" to the website.

## 📍 Location of Data File

All portfolio content is stored in:
\`\`\`
frontend/src/data/portfolioData.js
\`\`\`

## 🔄 Step-by-Step Data Update Guide

### 1️⃣ Personal Information

Look for this section in your resume and update:

\`\`\`javascript
export const personalInfo = {
  name: "Heet",                                    // Your full name
  title: "Full Stack Developer",                  // Your job title
  tagline: "Building Digital Experiences...",     // Your tagline/motto
  email: "your.email@example.com",                // Your email
  phone: "+1 (123) 456-7890",                     // Your phone number
  location: "Your City, Country",                 // Your location
  avatar: "/avatar.jpg",                          // Your photo (add to public folder)
  resume: "/Heet resume.pdf",                     // Keep this as is
  social: {
    github: "https://github.com/yourusername",    // Your GitHub URL
    linkedin: "https://linkedin.com/in/...",      // Your LinkedIn URL
    twitter: "https://twitter.com/...",           // Your Twitter URL
    portfolio: "https://yourportfolio.com",       // Your portfolio URL
  }
};
\`\`\`

**From Resume:** Extract name, email, phone, location, and social links

---

### 2️⃣ About Section

The about section needs a **compelling bio**. Your resume might have a summary - expand it:

\`\`\`javascript
export const about = {
  description: \`Write 3-4 paragraphs about yourself:
    
    Paragraph 1: Your passion and what you do
    Paragraph 2: Your experience and expertise
    Paragraph 3: What drives you and your work philosophy
    Paragraph 4: What you enjoy outside of coding\`,
    
  stats: [
    { label: "Years Experience", value: "3+" },      // Update from resume
    { label: "Projects Completed", value: "50+" },   // Count your projects
    { label: "Technologies", value: "25+" },         // Count skills
    { label: "Client Satisfaction", value: "100%" }  // Your rating
  ]
};
\`\`\`

**From Resume:** Use summary/objective section, expand it with personality

---

### 3️⃣ Skills & Technologies

List ALL skills from your resume organized by category:

\`\`\`javascript
export const skills = {
  technical: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 95, icon: "⚛️" },
        // Add all frontend skills from resume
        // Level: 0-100 based on your proficiency
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90, icon: "🟢" },
        // Add all backend skills
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git/GitHub", level: 92, icon: "🔀" },
        // Add tools, platforms, methodologies
      ]
    }
  ]
};
\`\`\`

**From Resume:** Skills section - list everything you know

**Proficiency Levels:**
- 90-100: Expert, daily use
- 80-89: Very comfortable
- 70-79: Comfortable
- 60-69: Working knowledge

---

### 4️⃣ Work Experience

Copy each job from your resume:

\`\`\`javascript
export const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",              // Job title
    company: "Tech Company Inc.",                      // Company name
    location: "Remote",                                // Location
    period: "2023 - Present",                          // Date range
    description: "Brief job description",              // What you did
    achievements: [
      "Achievement 1",                                 // Bullet points
      "Achievement 2",                                 // from resume
      "Achievement 3",
      "Achievement 4"
    ],
    technologies: ["React", "Node.js", "MongoDB"]      // Tech used
  },
  // Add more jobs...
];
\`\`\`

**From Resume:** Work experience section - copy each role

---

### 5️⃣ Education

Copy education details:

\`\`\`javascript
export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",  // Degree
    institution: "University Name",                        // School name
    location: "City, Country",                             // Location
    period: "2016 - 2020",                                 // Dates
    grade: "GPA: 3.8/4.0",                                 // GPA/Grade
    description: "Major, minor, focus areas",              // Description
    achievements: [
      "Dean's List all semesters",                         // Achievements
      "Led university tech club",
    ]
  }
];
\`\`\`

**From Resume:** Education section

---

### 6️⃣ Projects

This is the most important section! For each project in your resume:

\`\`\`javascript
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",                      // Project name
    description: "Full-featured e-commerce...",        // Brief description
    image: "/projects/ecommerce.jpg",                  // Screenshot (add to public/projects/)
    category: "Full Stack",                            // Category: Full Stack/Frontend/Backend
    technologies: ["React", "Node.js", "MongoDB"],     // Tech stack used
    features: [
      "User authentication",                           // Key features
      "Shopping cart",                                 // List main features
      "Payment integration",
      "Admin panel",
    ],
    github: "https://github.com/you/project",          // GitHub repo
    demo: "https://demo-project.com",                  // Live demo URL
    stats: {
      users: "10K+",                                   // Project stats
      performance: "98/100",                           // Any metrics
      uptime: "99.9%"
    }
  },
  // Add 4-6 projects minimum
];
\`\`\`

**From Resume:** Projects section - expand each project with details

**Tips for Projects:**
- Add screenshots to \`frontend/public/projects/\`
- Use actual GitHub repo links
- Include live demo links if available
- If no demo, use GitHub link for both

---

### 7️⃣ Certifications (Optional)

If you have certifications in your resume:

\`\`\`javascript
export const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "ABC123XYZ"
  }
];
\`\`\`

**From Resume:** Certifications section

---

### 8️⃣ Services (What You Offer)

Based on your skills, update what services you provide:

\`\`\`javascript
export const services = [
  {
    id: 1,
    icon: "💻",
    title: "Web Development",
    description: "Custom web applications...",
    features: ["Responsive Design", "Performance", "SEO", "Compatible"]
  },
  // Keep relevant services based on your skills
];
\`\`\`

---

## ✅ Checklist

After updating, verify you've filled in:

- [ ] Personal info (name, email, phone, location)
- [ ] All social media links
- [ ] About section bio (3-4 paragraphs)
- [ ] Updated stats with real numbers
- [ ] All skills from resume with proficiency levels
- [ ] All work experience with achievements
- [ ] Education details
- [ ] At least 4-6 projects with:
  - [ ] Descriptions
  - [ ] Technologies
  - [ ] Features
  - [ ] GitHub/demo links
  - [ ] Screenshots (in public/projects/)
- [ ] Certifications (if any)
- [ ] Updated services based on skills

## 🎯 Pro Tips

1. **Be Specific**: Instead of "built websites", say "developed 10+ responsive web applications"
2. **Use Numbers**: Quantify achievements (increased performance by 60%, reduced load time by 2s)
3. **Show Impact**: Focus on results, not just tasks
4. **Keep It Current**: Update regularly with new projects and skills
5. **Be Honest**: Only list skills you can actually demonstrate

## 📸 Adding Images

### Profile Photo
1. Add your photo to \`frontend/public/avatar.jpg\`
2. Update: \`avatar: "/avatar.jpg"\`

### Project Screenshots
1. Create folder: \`frontend/public/projects/\`
2. Add screenshots: \`project1.jpg\`, \`project2.jpg\`, etc.
3. Update project image: \`image: "/projects/project1.jpg"\`

## 🔍 Where to Find Info in Your Resume

| Resume Section | Update In Portfolio |
|---------------|-------------------|
| Contact Info | personalInfo |
| Summary/Objective | about.description |
| Skills | skills.technical |
| Experience | experience array |
| Education | education array |
| Projects | projects array |
| Certifications | certifications array |

## 💡 Writing Tips

### About Section
\`\`\`
❌ "I am a developer"
✅ "Passionate Full Stack Developer with 3+ years of experience building scalable applications that impact thousands of users"

❌ "I know React and Node"
✅ "Specializing in modern JavaScript frameworks like React and Node.js, I transform complex problems into elegant, efficient solutions"
\`\`\`

### Project Descriptions
\`\`\`
❌ "Made a website"
✅ "Full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard serving 10,000+ users"
\`\`\`

---

## 🆘 Need Help?

If you're stuck:
1. Look at the example data already in the file
2. Copy the structure and replace with your info
3. Keep the format (quotes, commas, brackets)
4. Save the file and refresh browser to see changes

---

**Remember**: The website is already functional with example data. Update it section by section, saving and checking after each update!
