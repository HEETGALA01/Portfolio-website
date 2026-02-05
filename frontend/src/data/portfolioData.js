// Portfolio Data - Updated with actual information
export const personalInfo = {
  name: "Heet Gala",
  title: "Full Stack Developer",
  tagline: "Building Scalable Web Applications & AI-Powered Solutions",
  email: "hgala5901@gmail.com",
  phone: "+91 7506506896",
  location: "Mumbai, Maharashtra, India",
  avatar: "/avatar.jpg",
  resume: "/Heet resume.pdf",
  social: {
    github: "https://github.com/HEETGALA01",
    linkedin: "https://www.linkedin.com/in/heet-gala001",
    mail: "mailto:hgala5901@gmail.com",
    portfolio: "https://heetgala.vercel.app",
  }
};

export const about = {
  description: `I'm a Full Stack Developer specializing in the MERN stack with hands-on experience building scalable web applications, AI-powered systems, and enterprise solutions. Currently pursuing my Bachelor's in Artificial Intelligence and Data Science at K.J. Somaiya College of Engineering, Mumbai.
    
    My journey spans from developing production-ready real estate chatbots to building optimized e-commerce platforms on Shopify, to creating comprehensive ERP systems. I've had the privilege of working with diverse clients, delivering solutions that directly impact business operations and customer engagement.
    
    What drives me is the intersection of artificial intelligence and web development - leveraging modern technologies to create intelligent systems that solve real problems. Beyond coding, I'm passionate about staying at the forefront of technology trends and contributing to research.`,
  stats: [
    { label: "Live Projects", value: "5+" },
    { label: "Client Deployments", value: "3" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Research Papers", value: "1" }
  ]
};

export const skills = {
  technical: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 95, icon: "FaReact" },
        { name: "React Native", level: 85, icon: "FaReact" },
        { name: "JavaScript", level: 95, icon: "SiJavascript" },
        { name: "HTML5", level: 95, icon: "FaHtml5" },
        { name: "CSS", level: 95, icon: "FaCss3Alt" },
        { name: "Shopify", level: 88, icon: "FaShopify" },
        { name: "WordPress", level: 82, icon: "FaWordpress" },
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", level: 92, icon: "FaNode" },
        { name: "Express.js", level: 90, icon: "SiExpress" },
        { name: "MongoDB", level: 90, icon: "SiMongodb" },
        { name: "SQL", level: 85, icon: "SiMysql" },
        { name: "REST APIs", level: 92, icon: "SiPostman" },
        { name: "Python", level: 88, icon: "FaPython" },
        { name: "C Language", level: 80, icon: "SiC" },
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git/GitHub", level: 95, icon: "FaGithub" },
        { name: "Docker", level: 85, icon: "FaDocker" },
        { name: "SEO Optimization", level: 88, icon: "SiGoogleanalytics" },
        { name: "Render", level: 90, icon: "SiRender" },
        { name: "Hostinger", level: 85, icon: "FaServer" },
        { name: "TensorFlow", level: 80, icon: "SiTensorflow" },
        { name: "Streamlit", level: 82, icon: "SiStreamlit" },
      ]
    }
  ]
};

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "ZootechX",
    location: "Hybrid, Mumbai, India",
    period: "Sep 2025 - Present",
    description: "Developing production-ready web applications, e-commerce platforms, and ERP systems for diverse clients using the MERN stack.",
    achievements: [
      "Developed a live real estate chatbot for Nine Reflex client using MERN stack with MongoDB-based lead storage",
      "Deployed backend services on Render and hosted production frontend on Hostinger",
      "Built and deployed a complete Shopify-based e-commerce website optimized for SEO and performance",
      "Developed comprehensive ERP systems for Medical and Import-Export industries using React, HTML, CSS, JavaScript"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Shopify", "Render", "Hostinger"]
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Infotech Pvt. Ltd.",
    location: "Online",
    period: "Sep 2024",
    description: "Built predictive models and extracted actionable insights from real-world datasets using machine learning techniques.",
    achievements: [
      "Performed comprehensive data preprocessing, exploratory data analysis, and visualization",
      "Developed machine learning models for regression, classification, and clustering tasks",
      "Extracted actionable insights from complex datasets to support business decisions",
      "Implemented data pipelines for automated model training and evaluation"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning"]
  },
  {
    id: 3,
    title: "Data Management Intern",
    company: "Geo-Fencing Pvt. Ltd.",
    location: "On-Site, Karnataka, India",
    period: "Jun 2023",
    description: "Worked on agricultural data acquisition and processing pipelines to improve data accuracy and efficiency.",
    achievements: [
      "Mapped and analyzed 700+ agricultural land plots using Excel and Google Earth",
      "Improved data accuracy by 40% through systematic data validation and processing",
      "Developed automated workflows for agricultural data acquisition",
      "Created comprehensive documentation for data processing procedures"
    ],
    technologies: ["Excel", "Google Earth", "Data Processing", "GIS Tools"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    institution: "K.J. Somaiya College of Engineering and Technology",
    location: "Mumbai, Maharashtra",
    period: "Aug 2021 - May 2025",
    grade: "Pursuing",
    description: "Specialized in AI/ML, Data Science, and Full Stack Development with focus on building intelligent systems and scalable web applications.",
    achievements: [
      "Published research paper in International Journal of Scientific Research in Engineering and Management",
      "Developed multiple AI-powered projects including stock prediction and security systems",
      "Gained hands-on experience in MERN stack, machine learning, and data analytics"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education (Science)",
    institution: "Rustomjee Junior College",
    location: "Mumbai, Maharashtra",
    period: "Jul 2019 - Apr 2021",
    grade: "Science Stream",
    description: "Completed higher secondary education with focus on Mathematics, Physics, Chemistry, and Computer Science.",
    achievements: [
      "Built strong foundation in mathematics and computational thinking",
      "Developed early interest in programming and web development"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Real Estate Chatbot - Nine Reflex",
    description: "Production-ready real estate chatbot deployed for Nine Reflex client to handle property inquiries, lead generation, and customer engagement with intelligent conversational flows.",
    image: "/ninerefex .png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Render", "Hostinger"],
    features: [
      "Developed using MERN stack for seamless real-time interactions",
      "Integrated MongoDB for robust lead storage and management",
      "Implemented dynamic conversational flows for property inquiries",
      "Deployed backend services on Render for scalability",
      "Hosted production frontend on Hostinger for optimal performance"
    ],
    github: "https://github.com/HEETGALA01/nine-reflex",
    demo: "https://ninereflex.com/",
    stats: {
      status: "Live",
      client: "Nine Reflex",
      deployment: "Production"
    }
  },
  {
    id: 2,
    title: "Customized E-Commerce Website - Oluxury India",
    description: "Fully customized Shopify-based e-commerce platform for Oluxury India with enhanced customer engagement features and optimized performance.",
    image: "/oluxury.png",
    category: "Full Stack",
    technologies: ["Shopify", "JavaScript", "CSS", "WhatsApp API", "SEO Tools"],
    features: [
      "Built and deployed complete Shopify-based website",
      "Integrated WhatsApp chatbot plugins for instant customer support",
      "Implemented request-to-quote functionality for B2B clients",
      "Performance-optimized UI components for faster load times",
      "SEO optimization to enhance search engine visibility and conversions"
    ],
    github: "https://github.com/heetgala/oluxury-ecommerce",
    demo: "https://oluxuryindia.com/",
    stats: {
      status: "Live",
      client: "Oluxury India",
      performance: "95/100"
    }
  },
  {
    id: 3,
    title: "Import-Export ERP System",
    description: "Comprehensive ERP system designed for the import-export industry to manage product records, transactions, and automate workflow processes.",
    image: "/importx.png",
    category: "Full Stack",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    features: [
      "Product record management with detailed inventory tracking",
      "Transaction management for import-export operations",
      "Workflow automation to streamline business processes",
      "Scalable frontend architecture for future enhancements",
      "User-friendly interface for easy navigation and data entry"
    ],
    github: "https://github.com/HEETGALA01/import-export-ERP-system",
    demo: "https://importx.netlify.app/",
    stats: {
      type: "Demo",
      modules: "5+",
      industry: "Import-Export"
    }
  },
  {
    id: 4,
    title: "Real-Time Stock Market Prediction System",
    description: "LSTM-based stock price prediction system leveraging deep learning to forecast market trends with interactive real-time visualization dashboard.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "LSTM", "Streamlit", "Pandas", "NumPy"],
    features: [
      "LSTM neural network for accurate stock price prediction",
      "Real-time market trend visualization using Streamlit",
      "Historical data analysis and pattern recognition",
      "Interactive dashboard for user-friendly market insights",
      "Continuous model training for improved accuracy"
    ],
    github: "https://github.com/HEETGALA01/REAL-TIME_STOCK_PREDICTION_APP",
    stats: {
      accuracy: "85%+",
      model: "LSTM",
      framework: "TensorFlow"
    }
  },
  {
    id: 5,
    title: "Medical ERP System",
    description: "Enterprise Resource Planning system developed for the medical industry to manage patient records, appointments, inventory, and billing operations.",
    image: "/medicalerp.png",
    category: "Full Stack",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Express.js"],
    features: [
      "Patient record management with secure data handling",
      "Appointment scheduling and tracking system",
      "Medical inventory management",
      "Billing and invoice generation",
      "Role-based access control for staff and administrators"
    ],
    github: "https://github.com/HEETGALA01/medical-erp",
    demo: "https://medicalsystemerp.netlify.app/",
    stats: {
      industry: "Healthcare",
      modules: "6+",
      status: "Demo"
    }
  },
  {
    id: 6,
    title: "AI-Powered Security Camera System",
    description: "Research project on real-time accident and suspicious activity detection using computer vision and deep learning, published in international journal.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop&q=80",
    category: "AI/ML",
    technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "Deep Learning"],
    features: [
      "Real-time video analysis for accident detection",
      "Suspicious activity recognition using computer vision",
      "Deep learning models for accurate threat identification",
      "Alert notification system for security personnel",
      "Published research in International Journal (Feb 2024)"
    ],
    github: "https://github.com/HEETGALA01/AI-Powered-Security-Camera-with-YOLO-NAS",
    stats: {
      publication: "Published",
      journal: "IJSREM",
      year: "2024"
    }
  }
];

export const certifications = [
  {
    id: 1,
    title: "Research Publication: AI-Powered Security Camera System",
    issuer: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    date: "February 2024",
    credentialId: "Published Research Paper",
    description: "Research on Real-Time Accident and Suspicious Activity Detection using AI and Computer Vision",
    certificate: "/Publication Certificate.pdf"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CTO, Tech Company",
    company: "Tech Corp",
    image: "/testimonials/person1.jpg",
    text: "Exceptional developer with great attention to detail. Delivered our project ahead of schedule with outstanding quality.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    company: "Digital Solutions",
    image: "/testimonials/person2.jpg",
    text: "A pleasure to work with. Great communication skills and always goes the extra mile to ensure client satisfaction.",
    rating: 5
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Founder",
    company: "StartUp Inc",
    image: "/testimonials/person3.jpg",
    text: "Highly skilled and professional. Transformed our ideas into a beautiful, functional application.",
    rating: 5
  }
];

export const services = [
  {
    id: 1,
    icon: "💻",
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"]
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "PWA", "App Store Deployment", "Push Notifications"]
  },
  {
    id: 3,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Backend Development",
    description: "Robust server-side solutions with scalable architecture and security.",
    features: ["REST APIs", "Database Design", "Authentication", "Cloud Deployment"]
  },
  {
    id: 5,
    icon: "🚀",
    title: "DevOps & Deployment",
    description: "Automated deployment pipelines and cloud infrastructure management.",
    features: ["CI/CD", "Docker", "AWS/Azure", "Monitoring"]
  },
  {
    id: 6,
    icon: "🔧",
    title: "Consulting & Support",
    description: "Technical consulting and ongoing support for your projects.",
    features: ["Code Review", "Architecture Design", "Performance Audit", "Maintenance"]
  }
];
