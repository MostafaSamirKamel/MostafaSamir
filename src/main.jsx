import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Terminal,
  Video,
  X,
} from 'lucide-react';
import './styles.css';

function GithubIcon({ size = 16, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon({ size = 16, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

const links = {
  linkedin: 'https://www.linkedin.com/in/mostafasameer00',
  github: 'https://github.com/MostafaSamirKamel',
  email: 'mailto:mostafasameer858@gmail.com',
  phone: 'tel:+201050753724',
  whatsapp: 'https://wa.me/201050753724',
};

const domains = [
  {
    id: 'mern',
    title: 'Front-End & MERN Stack',
    tag: 'Primary Core Stack',
    description: 'Developing responsive, production-ready React.js and Next.js web applications, RESTful APIs, and full-stack JavaScript solutions.',
    skills: ['React.js (17+)', 'Next.js 16', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS'],
  },
  {
    id: 'mean',
    title: 'MEAN Stack Development',
    tag: 'NTI 6-Week Training',
    description: 'Full-stack application development using Angular, Node.js, Express.js, and MongoDB with structured architecture.',
    skills: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Auth'],
  },
  {
    id: 'ai-embedded',
    title: 'AI, Data & Embedded Systems',
    tag: 'Engineering Degree',
    description: 'BSc in AI & Data Science (GPA 3.35) with hands-on experience developing ML pipelines, computer vision models, and AVR hardware systems.',
    skills: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Embedded C', 'AVR (ATmega32)'],
  },
];

// Exact CV Order and Categorization
const projectCatalogue = [
  // 1. Flagship Graduation Project
  {
    name: 'RAFIQ — AI-Powered Autism Therapy Platform',
    category: 'flagship',
    sectionTitle: 'Flagship Graduation Project',
    label: 'Flagship Graduation Project',
    description: 'Arabic-first ASD therapy & progress-management platform featuring interactive therapeutic exercises, emotion detection, and clinical progress tracking.',
    stack: ['Next.js', 'React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'FastAPI (Docker)', 'DeepFace', 'MediaPipe', 'PyTorch Arabic ASR', 'OpenCV', 'DistilGPT-2'],
    github: null,
    demo: 'https://r-frontend-psi.vercel.app/',
    featured: true,
  },

  // 2. Next.js & React Applications (Live on Vercel)
  {
    name: 'Rayan (Map & Geo-Location App)',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'Next.js & React App',
    description: 'Geospatial tracking application with interactive map routing, live geo-queries, stateful validation flows, and multi-language i18n support.',
    stack: ['Next.js 16', 'React 19', 'Redux Toolkit', 'React Leaflet', 'Zod', 'i18n'],
    github: 'https://github.com/MostafaSamirKamel/rayan',
    demo: 'https://rayan-phi.vercel.app/',
    featured: true,
  },
  {
    name: 'Shop Mart (E-Commerce)',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'Next.js E-Commerce',
    description: 'Dynamic product catalog with multi-criteria filters, search, and a persistent stateful cart experience.',
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Shadcn UI'],
    github: 'https://github.com/MostafaSamirKamel/shop-mart',
    demo: 'https://mostafa-shop-mart.vercel.app/',
    featured: true,
  },
  {
    name: 'Recipe Studio',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'Next.js Web App',
    description: 'Recipe discovery application with server-side rendering (SSR) and dynamic category routing.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/MostafaSamirKamel/Recipe_Studio',
    demo: 'https://mostafa-recipe-studio.vercel.app/',
  },
  {
    name: 'Northbench Academy',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'Next.js Web App',
    description: 'Marketing & admissions portal with filterable course catalog and dark mode support.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Dark Mode'],
    github: 'https://github.com/MostafaSamirKamel/northbench',
    demo: 'https://mostafa-northbench.vercel.app/',
  },
  {
    name: 'Route Posts (Social Feed)',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'React SPA',
    description: 'Social feed with user authentication, likes, comments, and saved bookmarks.',
    stack: ['React (Vite)', 'TanStack Query', 'Axios', 'PrimeReact'],
    github: 'https://github.com/MostafaSamirKamel/Route_Posts',
    demo: 'https://mostafa-route-posts.vercel.app/',
    featured: true,
  },
  {
    name: 'Social Network App',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'React SPA',
    description: 'Follow feeds, profile dashboard, secure form submissions, and client-side data fetching.',
    stack: ['React (Vite)', 'Flowbite', 'React Query', 'Zod', 'React Hook Form'],
    github: 'https://github.com/MostafaSamirKamel/social-app',
    demo: 'https://mostafa-social-app.vercel.app/',
  },
  {
    name: 'Bakery Catalog App',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'React Storefront',
    description: 'Bakery storefront with cart management, order summaries, and toast notifications.',
    stack: ['React (Vite)', 'Bootstrap 5', 'Axios', 'React Toastify'],
    github: 'https://github.com/MostafaSamirKamel/Backery',
    demo: 'https://mostafa-bakery.vercel.app/',
  },
  {
    name: 'Saraha (Anonymous Feedback Platform – Frontend)',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'Next.js Client',
    description: 'Anonymous messaging client featuring dynamic QR profiles and motion-led feedback animations.',
    stack: ['Next.js 16', 'React 19', 'Framer Motion', 'QR Code React'],
    github: 'https://github.com/MostafaSamirKamel/saraha-frontend',
    demo: 'https://saraha-frontend-three.vercel.app/',
    featured: true,
  },
  {
    name: 'FreshCart (Grocery E-Commerce)',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'Next.js E-Commerce',
    description: 'Grocery storefront with dynamic product catalog, category filters, and quantity-managed cart.',
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS'],
    github: 'https://github.com/MostafaSamirKamel/FreshCart2',
    demo: 'https://fresh-cart-two-jade.vercel.app/',
  },
  {
    name: 'React Movie Explorer',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'React SPA',
    description: 'Movie discovery SPA with TMDB API data, favorites collection, pagination, and client routing.',
    stack: ['React 19', 'Vite', 'React Router v7', 'Context API', 'Axios', 'TMDB API'],
    github: 'https://github.com/MostafaSamirKamel/ReactMovieApp',
    demo: 'https://react-movie-app-woad-five.vercel.app/',
  },
  {
    name: 'React Portfolio Dashboard',
    category: 'react',
    sectionTitle: 'Next.js & React Applications',
    label: 'React SPA',
    description: 'Interactive single-page portfolio with client-side routing and structured layout.',
    stack: ['React 19', 'Vite', 'React Router v7', 'Bootstrap 5'],
    github: 'https://github.com/MostafaSamirKamel/ReactJS-Assignment-one',
    demo: 'https://react-js-assignment-one-two.vercel.app/',
  },

  // 3. Node.js Backend
  {
    name: 'Saraha Backend (Secure Messaging API)',
    category: 'backend',
    sectionTitle: 'Node.js Backend',
    label: 'Production REST API',
    description: 'Production-grade secure messaging REST API with Redis caching, Argon2 password hashing, Joi validation, Nodemailer/Resend, Cloudinary, and Jest & Supertest suites.',
    stack: ['Node.js', 'Express', 'MongoDB/Mongoose', 'Redis', 'Argon2', 'Joi', 'Nodemailer', 'Cloudinary', 'Jest', 'Supertest'],
    github: 'https://github.com/MostafaSamirKamel/saraha-backend',
    demo: null,
    featured: true,
  },

  // 4. Static Web Applications (Live on GitHub Pages)
  {
    name: 'NutriPlan (Nutrition & Fitness Tracker)',
    category: 'static',
    sectionTitle: 'Static Web Applications',
    label: 'Static Web App',
    description: 'Food scanner, recipe search, nutrition charting, and health dashboard views.',
    stack: ['HTML5', 'JS (ES6 Modules)', 'Tailwind CSS', 'Plotly.js'],
    github: 'https://github.com/MostafaSamirKamel/NutriApp',
    demo: 'https://mostafasamirkamel.github.io/NutriApp',
    featured: true,
  },
  {
    name: 'Muddaber (Personal Finance Tracker)',
    category: 'static',
    sectionTitle: 'Static Web Applications',
    label: 'Arabic Finance Tool',
    description: 'Arabic budget and expense tracker designed for quick everyday entry with full RTL support.',
    stack: ['HTML5', 'Vanilla JS', 'Bootstrap RTL'],
    github: 'https://github.com/MostafaSamirKamel/muddaber',
    demo: 'https://mostafasamirkamel.github.io/muddaber',
  },
  {
    name: 'DJI Mavic 4 Pro Landing Page',
    category: 'static',
    sectionTitle: 'Static Web Applications',
    label: 'Product Landing Page',
    description: 'Product marketing landing page with scroll transitions and specifications accordion.',
    stack: ['HTML5', 'CSS3', 'Vanilla JS'],
    github: 'https://github.com/MostafaSamirKamel/dron',
    demo: 'https://mostafasamirkamel.github.io/dron',
  },
  {
    name: 'GameArena (Gaming Portal)',
    category: 'static',
    sectionTitle: 'Static Web Applications',
    label: 'Gaming Dashboard',
    description: 'Dark-themed esports gaming portal with dashboard grid and tournament countdowns.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/MostafaSamirKamel/GameArena',
    demo: 'https://mostafasamirkamel.github.io/GameArena',
  },
  {
    name: 'CodeAlpha Image Gallery',
    category: 'static',
    sectionTitle: 'Static Web Applications',
    label: 'Image Gallery',
    description: 'Searchable portfolio image gallery with keyword filters and animated zoom lightbox.',
    stack: ['HTML5', 'CSS3', 'Vanilla JS', 'Bootstrap 5'],
    github: 'https://github.com/MostafaSamirKamel/CodeAlpha_ImageGallery',
    demo: 'https://mostafasamirkamel.github.io/CodeAlpha_ImageGallery',
  },
  {
    name: 'The UX Review Blog',
    category: 'static',
    sectionTitle: 'Static Web Applications',
    label: 'Editorial Blog',
    description: 'Readability-focused blog with article grids, tag sorting, and responsive typography.',
    stack: ['HTML5', 'CSS3', 'Responsive Typography'],
    github: 'https://github.com/MostafaSamirKamel/UX-Review',
    demo: 'https://mostafasamirkamel.github.io/UX-Review',
  },

  // 5. Pure JavaScript & Web API Applications
  {
    name: 'Product Management CRUD System',
    category: 'javascript',
    sectionTitle: 'Pure JavaScript & Web APIs',
    label: 'CRUD Inventory Tool',
    description: 'Inventory management system with tax/discount calculation, live search, and LocalStorage persistence.',
    stack: ['HTML5', 'Vanilla JS', 'LocalStorage', 'Bootstrap 5'],
    github: 'https://github.com/MostafaSamirKamel/ProductManagementSystem',
    demo: 'https://mostafasamirkamel.github.io/ProductManagementSystem',
  },
  {
    name: 'Weather Forecasting App',
    category: 'javascript',
    sectionTitle: 'Pure JavaScript & Web APIs',
    label: 'Weather REST API',
    description: 'Real-time weather forecast dashboard with automatic geolocation support.',
    stack: ['HTML5', 'Vanilla JS', 'Weather REST API'],
    github: 'https://github.com/MostafaSamirKamel/WeatherApp',
    demo: 'https://mostafasamirkamel.github.io/WeatherApp',
  },
  {
    name: 'Asynchronous Movie Browser',
    category: 'javascript',
    sectionTitle: 'Pure JavaScript & Web APIs',
    label: 'Movie Search Tool',
    description: 'Lightweight movie search application with asynchronous fetch requests and live filters.',
    stack: ['HTML5', 'Vanilla JS', 'TMDB API'],
    github: 'https://github.com/MostafaSamirKamel/JavaScriptExam-MovieApp',
    demo: 'https://mostafasamirkamel.github.io/JavaScriptExam-MovieApp',
  },
  {
    name: 'Local Authentication System',
    category: 'javascript',
    sectionTitle: 'Pure JavaScript & Web APIs',
    label: 'Auth Validation Engine',
    description: 'Register and login engine with strict regex validation and LocalStorage sessions.',
    stack: ['HTML5', 'Vanilla JS', 'LocalStorage', 'Bootstrap 5'],
    github: 'https://github.com/MostafaSamirKamel/loginsystem',
    demo: 'https://mostafasamirkamel.github.io/loginsystem',
  },
  {
    name: 'Random Quote Generator',
    category: 'javascript',
    sectionTitle: 'Pure JavaScript & Web APIs',
    label: 'API Generator',
    description: 'Quote engine with dynamic backgrounds, category fetching, and social sharing.',
    stack: ['HTML5', 'Vanilla JS', 'Quotes API'],
    github: 'https://github.com/MostafaSamirKamel/RandomQuoteGenerator',
    demo: 'https://mostafasamirkamel.github.io/RandomQuoteGenerator',
  },
  {
    name: 'DevFolio Template',
    category: 'javascript',
    sectionTitle: 'Pure JavaScript & Web APIs',
    label: 'Portfolio Template',
    description: 'Developer portfolio with typing animations, filterable portfolio grids, and skill indicators.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    github: 'https://github.com/MostafaSamirKamel/DevFolio',
    demo: 'https://mostafasamirkamel.github.io/DevFolio',
  },
  {
    name: 'Mealify Landing Page',
    category: 'javascript',
    sectionTitle: 'Pure JavaScript & Web APIs',
    label: 'Restaurant Page',
    description: 'Restaurant portal with gallery, menus, chef testimonials, and a responsive grid layout.',
    stack: ['HTML5', 'CSS3', 'Grid / Flexbox'],
    github: 'https://github.com/MostafaSamirKamel/mealify',
    demo: 'https://mostafasamirkamel.github.io/mealify',
  },

  // 6. Premium 3D & Showcase Sites
  {
    name: 'Apple iPhone 15 Pro Showcase',
    category: '3d',
    sectionTitle: '3D & Showcase Sites',
    label: '3D WebGL Replica',
    description: 'High-fidelity 3D replica marketing page with scroll-driven animations and device orbit controls.',
    stack: ['3D WebGL', 'Three.js', 'Scroll Animations'],
    github: null,
    demo: 'https://myappleiphone.vercel.app/',
    featured: true,
  },
  {
    name: 'Interactive 3D WebGL Portfolio',
    category: '3d',
    sectionTitle: '3D & Showcase Sites',
    label: 'WebGL Experience',
    description: 'Immersive portfolio with WebGL/Three.js visual scenes and parallax scene transitions.',
    stack: ['WebGL', 'Three.js', 'Parallax'],
    github: null,
    demo: 'https://interactive-3d-portfolio-snowy.vercel.app/',
  },
  {
    name: 'Closca Detox Juice Landing Page',
    category: '3d',
    sectionTitle: '3D & Showcase Sites',
    label: 'Product Showcase',
    description: 'Premium product page with vibrant visual contrasts and CSS keyframe animations.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CSS Animations'],
    github: null,
    demo: 'https://closca-detox-juice.vercel.app/',
  },

  // 7. AI & Machine Learning Projects
  {
    name: 'Customer Segmentation (Unsupervised Learning)',
    category: 'ai',
    sectionTitle: 'AI & Machine Learning',
    label: 'Clustering Model',
    description: 'K-Means clustering and Elbow Method with Seaborn visual exploration, segmenting retail shoppers by income and spending habits.',
    stack: ['Python', 'K-Means', 'Pandas', 'Seaborn', 'scikit-learn'],
    github: 'https://github.com/MostafaSamirKamel/AI-ML_Projects/tree/main/Customer%20Segmentation%20using%20K-Means%20Clustering',
    demo: null,
  },
  {
    name: 'Fraud Detection Classification',
    category: 'ai',
    sectionTitle: 'AI & Machine Learning',
    label: 'ML Classification',
    description: 'Feature engineering, imbalanced-data handling with SMOTE, and F1/Precision/Recall evaluation of fraud detection models.',
    stack: ['Python', 'Classification', 'SMOTE', 'scikit-learn'],
    github: 'https://github.com/MostafaSamirKamel/AI-ML_Projects/tree/main/Fraud_detection_ML(classification)',
    demo: null,
  },
  {
    name: 'Hand Gesture Recognition & Tracking',
    category: 'ai',
    sectionTitle: 'AI & Machine Learning',
    label: 'Computer Vision',
    description: 'Real-time hand landmark extraction with MediaPipe paired with an SVM classifier for live webcam gesture inference.',
    stack: ['Python', 'MediaPipe', 'SVM', 'OpenCV'],
    github: 'https://github.com/MostafaSamirKamel/AI-ML_Projects/tree/main/Hand-Gesture-Classification',
    demo: null,
  },
  {
    name: 'Handwritten Digit Recognition',
    category: 'ai',
    sectionTitle: 'AI & Machine Learning',
    label: 'Deep Learning CNN',
    description: 'Convolutional Neural Network (CNN) trained on MNIST and deployed via a lightweight Flask prediction API with OpenCV preprocessing.',
    stack: ['Python', 'CNN', 'TensorFlow', 'Flask', 'OpenCV'],
    github: 'https://github.com/MostafaSamirKamel/AI-ML_Projects/tree/main/Handwritten_digits_classification_using_neural_network',
    demo: null,
  },
  {
    name: 'HR Analytics (Employee Attrition Predictor)',
    category: 'ai',
    sectionTitle: 'AI & Machine Learning',
    label: 'Predictive Modeling',
    description: 'Scikit-learn Random Forest Classifier predicting employee attrition factors from the IBM HR Analytics dataset.',
    stack: ['Python', 'Random Forest', 'scikit-learn', 'Pandas'],
    github: 'https://github.com/MostafaSamirKamel/AI-ML_Projects/tree/main/IBM_HR%20Analytics%20_Employee_Attrition',
    demo: null,
  },
  {
    name: 'Startup Funding Analysis',
    category: 'ai',
    sectionTitle: 'AI & Machine Learning',
    label: 'Exploratory Data Analysis',
    description: 'Comprehensive EDA mapping global startup funding cycles, VC trends, and industry distributions with Pandas and Seaborn.',
    stack: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    github: 'https://github.com/MostafaSamirKamel/AI-ML_Projects/tree/main/Start%20UPs_%20Data%20Analysis',
    demo: null,
  },
  {
    name: 'Spam Email Filter (NLP)',
    category: 'ai',
    sectionTitle: 'AI & Machine Learning',
    label: 'Natural Language Processing',
    description: 'Text tokenization, TF-IDF vectorization, and Naive Bayes classification for email spam detection.',
    stack: ['Python', 'NLP', 'TF-IDF', 'Naive Bayes'],
    github: 'https://github.com/MostafaSamirKamel/AI-ML_Projects/tree/main/spam%20email%20filter(NLP)',
    demo: null,
  },

  // 8. Embedded Systems Projects (ATmega32)
  {
    name: 'Real-Time Clock',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'ATmega32 Timer2 System',
    description: 'Timer2 asynchronous overflow mode with 32.768kHz crystal, keypad adjustment, 7-segment display, and LCD.',
    stack: ['Embedded C', 'AVR (ATmega32)', 'Timer2', 'Keypad', 'LCD'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/Counter_withSevenSegment_and_Timer0(CTC%20Mode)',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-microcontroller-avr-activity-7319147538463252480-XdHL',
  },
  {
    name: 'Traffic Light Controller',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'Intersection Controller',
    description: 'Timer0 CTC mode intersection controller with hardware interrupts for emergency vehicle priority.',
    stack: ['Embedded C', 'AVR', 'Timer0 CTC', 'Interrupts'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/TrafficLight_withTimer',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-avr-microcontroller-activity-7319005532520898560-r6oZ',
  },
  {
    name: 'Electronic Voting Machine',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'Hardware Debounce System',
    description: 'Button polling with hardware debounce protection and LCD interface for real-time vote tallies.',
    stack: ['Embedded C', 'AVR', 'LCD', 'Debounce Logic'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/ElectronicVotingMachine',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-votingmachine-microcontroller-activity-7309015778337431552-o4w6',
  },
  {
    name: 'Digital Calculator',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: '4x4 Keypad & LCD',
    description: '4x4 matrix keypad driver with LCD parsing standard algebraic operations.',
    stack: ['Embedded C', 'AVR', '4x4 Keypad Driver', 'LCD'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/KeyPad',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_avr-atmega32-embeddedsystems-activity-7306809446939156480-Cqxi',
  },
  {
    name: 'Temperature Control System',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'ADC & Sensor Driver',
    description: 'LM35 sensor via internal ADC, LCD status display, and relay-driven cooling fan activation.',
    stack: ['Embedded C', 'AVR', 'ADC', 'LM35 Sensor', 'Relay'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/Temp_ADC',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-atmega32-avr-activity-7315235746997534720-IM70',
  },
  {
    name: 'Counter – 7-Segment Multiplexing',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'Display Multiplexer',
    description: 'Time-division multiplexing of multiple 7-segment displays via Timer0 CTC interrupts.',
    stack: ['Embedded C', 'AVR', 'Timer0 CTC', '7-Segment'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/Counter_withSevenSegment_and_Timer0(CTC%20Mode)',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-microcontroller-avr-activity-7319147538463252480-XdHL',
  },
  {
    name: 'Safe Lock System',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'EEPROM Security System',
    description: 'EEPROM-persisted passcode validation with keypad input, lockout delay, and piezo alarm states.',
    stack: ['Embedded C', 'AVR', 'EEPROM', 'Keypad', 'Buzzer'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/Safe',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-microcontroller-atmega32-activity-7309705127882317824-ORAL',
  },
  {
    name: 'Relay & Power Control Drive',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'Power Switching HAL',
    description: 'GPIO-driven relay switching for isolated high-current AC/DC load control (e.g., 12V lamp).',
    stack: ['Embedded C', 'AVR', 'GPIO', 'Relay Switching'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/Relay',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-microcontroller-avr-activity-7299495090383654912-pc3L',
  },
  {
    name: 'LCD Animations Engine',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'CGRAM Graphics Engine',
    description: 'Custom CGRAM graphics for icons, animated battery/progress bars, and scrolling transitions.',
    stack: ['Embedded C', 'AVR', 'HD44780 LCD', 'CGRAM'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/lcd_animation',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-microcontroller-avr-activity-7253518658566545408-ohYj',
  },
  {
    name: 'Seven Segment Display Driver',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'Modular HAL Driver',
    description: 'Modular Hardware Abstraction Layer (HAL) driver for common anode/cathode 7-segment displays in C.',
    stack: ['Embedded C', 'AVR', 'HAL Architecture'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/SevenSegment',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-microcontroller-avr-activity-7298828221964312576-2FTR',
  },
  {
    name: 'LED, Button & Buzzer Peripheral Driver',
    category: 'embedded',
    sectionTitle: 'Embedded Systems (ATmega32)',
    label: 'Peripheral I/O Subsystem',
    description: 'I/O driver integrating pull-up buttons, LED arrays, and debounced passive buzzers.',
    stack: ['Embedded C', 'AVR', 'GPIO', 'Debouncing'],
    github: 'https://github.com/MostafaSamirKamel/AVR_atmega32_project/tree/main/LED%20and%20BUTTON%20and%20BUZZER',
    demo: null,
    linkedinDemo: 'https://www.linkedin.com/posts/mostafasameer00_embeddedsystems-microcontroller-avr-activity-7298826100426612737-6ZEE',
  },
];

// Logical Filter Categories matching the exact CV breakdown
const filterCategories = [
  { id: 'all', label: 'All Projects', count: projectCatalogue.length },
  { id: 'react', label: 'Next.js & React Apps', count: projectCatalogue.filter(p => p.category === 'react' || p.category === 'flagship').length },
  { id: 'backend', label: 'Node.js Backend', count: projectCatalogue.filter(p => p.category === 'backend').length },
  { id: 'static', label: 'Static Web Apps', count: projectCatalogue.filter(p => p.category === 'static').length },
  { id: 'javascript', label: 'Pure JavaScript & APIs', count: projectCatalogue.filter(p => p.category === 'javascript').length },
  { id: '3d', label: '3D & Showcase Sites', count: projectCatalogue.filter(p => p.category === '3d').length },
  { id: 'ai', label: 'AI & Machine Learning', count: projectCatalogue.filter(p => p.category === 'ai').length },
  { id: 'embedded', label: 'Embedded Systems (ATmega32)', count: projectCatalogue.filter(p => p.category === 'embedded').length },
];

const skillsCategories = [
  {
    category: 'Front-End Development',
    icon: Globe,
    description: 'Building responsive, production-ready interfaces with modern architecture, strict typing, and accessible styling.',
    skills: [
      'React.js (17+)',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux Toolkit',
      'React Router',
      'React Hook Form',
      'Formik',
      'Zod / Yup',
      'Tailwind CSS',
      'Bootstrap 5',
      'Material-UI',
      'Ant Design',
      'Sass',
      'HTML5 & CSS3',
    ],
  },
  {
    category: 'Back-End & Databases',
    icon: Database,
    description: 'Designing RESTful APIs, securing endpoints with JWT, caching with Redis, and managing SQL/NoSQL schemas.',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB & Mongoose',
      'MySQL',
      'PostgreSQL',
      'SQL Server',
      'RESTful APIs',
      'FastAPI',
      'Flask',
      'JWT Authentication',
      'Redis Caching',
    ],
  },
  {
    category: 'Full-Stack MERN & MEAN',
    icon: Layers,
    description: 'End-to-end JavaScript applications across both the MERN and MEAN architectures.',
    skills: [
      'MERN Stack (Primary)',
      'MEAN Stack (NTI 6-Week)',
      'Angular',
      'State Management',
      'Full-Stack Architecture',
      'API Integration',
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: Sparkles,
    description: 'Training and deploying machine learning pipelines, deep neural networks, and computer vision models.',
    skills: [
      'Python',
      'scikit-learn',
      'TensorFlow & Keras',
      'PyTorch',
      'OpenCV',
      'YOLO',
      'MediaPipe',
      'Pandas & NumPy',
      'SciPy',
      'Matplotlib & Seaborn',
      'Plotly',
      'ANN, CNN, RNN, Transformers',
    ],
  },
  {
    category: 'Embedded Systems (ATmega32 & ARM)',
    icon: Cpu,
    description: 'Hardware abstraction, microcontroller firmware, hardware timers, interrupts, and communication protocols.',
    skills: [
      'Embedded C',
      'C / C++',
      'AVR (ATmega32)',
      'ARM Cortex',
      'Arduino',
      'GPIO & ADC',
      'Timers & Interrupts',
      'EEPROM',
      'RTOS / FreeRTOS',
      'UART, I2C, SPI',
      'AUTOSAR',
    ],
  },
  {
    category: 'DevOps, Tools & CS Fundamentals',
    icon: Terminal,
    description: 'Version control, automated CI/CD deployments, cloud hosting, and core computer science fundamentals.',
    skills: [
      'Git & GitHub',
      'GitLab',
      'Postman',
      'Chrome DevTools',
      'Vercel & Netlify',
      'GitHub Actions & CI/CD',
      'Docker',
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Agile / Scrum',
      'System Architecture',
    ],
  },
];

const training = [
  // Web Development
  { category: 'Web Development', title: 'Full-Stack MEAN Development (6 Weeks)', provider: 'National Telecommunication Institute (NTI)' },
  { category: 'Web Development', title: 'Frontend Development (React.js)', provider: 'Route Academy' },
  { category: 'Web Development', title: 'Backend Development (Node.js)', provider: 'Route Academy' },
  // AI & Data Science
  { category: 'AI & Data Science', title: 'Computer Vision Engineer', provider: 'National Telecommunication Institute (NTI)' },
  { category: 'AI & Data Science', title: 'Generative AI', provider: 'Sprints' },
  { category: 'AI & Data Science', title: 'Machine Learning', provider: 'Sprints' },
  { category: 'AI & Data Science', title: 'Intro to Deep Learning', provider: 'Kaggle' },
  { category: 'AI & Data Science', title: 'Intro to Machine Learning', provider: 'Kaggle' },
  { category: 'AI & Data Science', title: 'AI & Applications', provider: 'Zewail City' },
  { category: 'AI & Data Science', title: 'AI & Data Science', provider: 'DotPy Academy' },
  { category: 'AI & Data Science', title: 'Data Analysis', provider: 'Almdrasa' },
  // Programming & CS
  { category: 'Programming & CS', title: 'Python Programming', provider: 'Microsoft' },
  { category: 'Programming & CS', title: 'Programming Fundamentals', provider: 'Beni-Suef University' },
  { category: 'Programming & CS', title: 'OOP & Data Structures', provider: 'Tasabuq' },
  { category: 'Programming & CS', title: 'Computer Science Foundations', provider: 'University of Delaware' },
  // Embedded Systems
  { category: 'Embedded Systems', title: 'Embedded Systems (AVR)', provider: 'Information Technology Institute (ITI)' },
  { category: 'Embedded Systems', title: 'Embedded Systems (AVR)', provider: 'Eng. Mohamed Zaghloul' },
  { category: 'Embedded Systems', title: 'Embedded Systems (ARM)', provider: 'Eng. Ahmed Bahaa' },
  // Events
  { category: 'Events & Community', title: 'DevFest Beni-Suef', provider: 'GDSC EELU Beni-Suef' },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const filteredProjects =
    selectedFilter === 'all'
      ? projectCatalogue
      : selectedFilter === 'react'
      ? projectCatalogue.filter((p) => p.category === 'react' || p.category === 'flagship')
      : projectCatalogue.filter((p) => p.category === selectedFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Bar */}
      <div className="scroll-indicator" style={{ transform: `scaleX(${scrollProgress})` }} />

      {/* Header Navigation */}
      <header className="site-header">
        <div className="header-container page-container">
          <a href="#top" className="site-logo" onClick={closeMenu}>
            <span className="logo-badge">MS</span>
            <div className="logo-text">
              <span className="logo-name">Mostafa Samir Kamel</span>
              <span className="logo-role">Software Engineer</span>
            </div>
          </a>

          <nav className={`site-nav ${menuOpen ? 'nav-active' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#certifications" onClick={closeMenu}>Certificates</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="header-actions">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm header-cta"
            >
              <WhatsappIcon size={14} />
              <span>Contact Me</span>
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ShopMart Style Hero Section with Ice-Blue Gradient Banner */}
        <div className="hero-wrapper">
          <section className="hero-section page-container">
            <div className="hero-content reveal is-visible">
              <div className="status-badge">
                <span className="status-pulse" />
                <span>Available for Full-Time & Freelance Roles</span>
              </div>

              <h1 className="hero-title">
                Software <em>Engineer</em>
              </h1>

              <p className="hero-lead">
                Software Engineer and 2026 graduate in <strong>Artificial Intelligence & Data Science</strong> with hands-on experience across both the <strong>MERN</strong> and <strong>MEAN</strong> stacks. Building responsive React.js and Next.js applications, RESTful APIs, and practical software solutions.
              </p>

              {/* Domain Tabs */}
              <div className="hero-domain-tabs">
                {domains.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`domain-tab ${activeTab === idx ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                  >
                    <span className="domain-tab-tag">{item.tag}</span>
                    <strong>{item.title}</strong>
                  </button>
                ))}
              </div>

              <div className="domain-panel">
                <p>{domains[activeTab].description}</p>
                <div className="skill-tags">
                  {domains[activeTab].skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  <span>View Projects ({projectCatalogue.length})</span>
                  <ArrowDown size={16} />
                </a>
                <a href={links.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="hero-profile-column reveal is-visible">
              <div className="profile-card">
                <div className="profile-image-wrapper">
                  <img
                    src="/mostafa-profile.png"
                    alt="Mostafa Samir Kamel"
                    className="profile-photo"
                  />
                </div>
                <div className="profile-details">
                  <div className="profile-header">
                    <div>
                      <h3 className="profile-name">Mostafa Samir Kamel</h3>
                      <span className="profile-title">Software Engineer</span>
                    </div>
                    <span className="profile-location">
                      <MapPin size={13} />
                      <span>Beheira, Egypt</span>
                    </span>
                  </div>

                  <div className="profile-metrics">
                    <div className="metric-item">
                      <strong>{projectCatalogue.length}</strong>
                      <span>Projects</span>
                    </div>
                    <div className="metric-divider" />
                    <div className="metric-item">
                      <strong>3.35</strong>
                      <span>BSc GPA</span>
                    </div>
                    <div className="metric-divider" />
                    <div className="metric-item">
                      <strong>19</strong>
                      <span>Certificates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* About Section */}
        <section id="about" className="section-padding bg-light">
          <div className="page-container">
            <div className="section-header reveal">
              <span className="section-label">About</span>
              <h2 className="section-heading">About Me</h2>
              <p className="section-subtitle">
                Software Engineer with a strong academic background in Artificial Intelligence & Data Science.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-card reveal">
                <h3>Professional Summary</h3>
                <p>
                  I am a Software Engineer and 2026 graduate in <strong>Artificial Intelligence & Data Science</strong> from Beni Suef National University (GPA: 3.35 / 4.00). I bring hands-on experience building full-stack applications across both the <strong>MERN</strong> and <strong>MEAN</strong> stacks.
                </p>
                <p>
                  Skilled in building responsive, production-ready React.js and Next.js applications, RESTful APIs, and full-stack JavaScript solutions, alongside experience developing AI models and embedded systems.
                </p>

                <div className="key-highlights">
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="highlight-icon" />
                    <div>
                      <strong>Front-End Engineering</strong>
                      <p>Responsive React.js and Next.js applications with state management, strict TypeScript, and accessible UI styling.</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="highlight-icon" />
                    <div>
                      <strong>MERN & MEAN Development</strong>
                      <p>Designing RESTful APIs, JWT authentication, MongoDB schemas, and end-to-end JavaScript architecture.</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="highlight-icon" />
                    <div>
                      <strong>AI & Embedded Systems</strong>
                      <p>Experience in machine learning pipelines, deep learning CNNs, computer vision, and AVR hardware systems.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="experience" className="about-sidebar reveal">
                <div className="info-card">
                  <div className="info-card-header">
                    <GraduationCap size={22} className="info-icon" />
                    <div>
                      <h4>BSc in Artificial Intelligence & Data Science</h4>
                      <span>Beni Suef National University · Graduated 2026</span>
                    </div>
                  </div>
                  <p className="info-card-desc">
                    College of Computing and Artificial Intelligence with a cumulative GPA of <strong>3.35 / 4.00</strong>.
                  </p>
                </div>

                <div className="info-card">
                  <div className="info-card-header">
                    <Briefcase size={22} className="info-icon" />
                    <div>
                      <h4>Machine Learning Engineer Intern</h4>
                      <span>Technocolabs Softwares Inc. · Mar 2025 – May 2025</span>
                    </div>
                  </div>
                  <ul className="info-list">
                    <li>Performed data preprocessing, feature engineering, and exploratory data analysis (EDA) on real-world datasets.</li>
                    <li>Applied classification and clustering algorithms, improving model accuracy through data optimization techniques.</li>
                    <li>Collaborated in an Agile environment, contributing to improved workflow efficiency and model performance.</li>
                  </ul>
                </div>

                <div className="info-card">
                  <div className="info-card-header">
                    <Globe size={20} className="info-icon" />
                    <div>
                      <h4>Languages & Soft Skills</h4>
                      <span>Communication & Teamwork</span>
                    </div>
                  </div>
                  <p className="info-card-desc" style={{ marginBottom: '8px' }}>
                    <strong>Languages:</strong> Arabic (Native) · English (Intermediate - Reading & Writing)
                  </p>
                  <p className="info-card-desc">
                    <strong>Soft Skills:</strong> Problem Solving · Team Collaboration · Attention to Detail · Continuous Learning · Adaptability · Time Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div className="page-container">
            <div className="section-header reveal">
              <span className="section-label">Projects</span>
              <h2 className="section-heading">Featured Projects</h2>
              <p className="section-subtitle">
                All {projectCatalogue.length} projects organized in the exact order and structure of the CV.
              </p>
            </div>

            {/* Filter Tabs matching exact CV breakdown */}
            <div className="filter-bar reveal">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${selectedFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(cat.id)}
                  type="button"
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <article
                  key={`${project.name}-${index}`}
                  className="project-card-item reveal is-visible"
                >
                  <div className="card-top-row">
                    <span className="project-category-tag">{project.label}</span>
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>

                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="project-card-links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link primary-link"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.linkedinDemo && (
                      <a
                        href={project.linkedinDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link primary-link"
                      >
                        <LinkedinIcon size={14} />
                        <span>LinkedIn Demo</span>
                      </a>
                    )}
                    {!project.demo && !project.github && !project.linkedinDemo && (
                      <span className="private-repo-tag">Internal Project</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-light">
          <div className="page-container">
            <div className="section-header reveal">
              <span className="section-label">Skills</span>
              <h2 className="section-heading">Technical Skills</h2>
              <p className="section-subtitle">
                Core technologies, frameworks, and programming languages used across projects.
              </p>
            </div>

            <div className="skills-grid">
              {skillsCategories.map((group) => {
                const IconComponent = group.icon;
                return (
                  <div key={group.category} className="skill-card reveal">
                    <div className="skill-card-head">
                      <div className="skill-icon-box">
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <h3>{group.category}</h3>
                        <p>{group.description}</p>
                      </div>
                    </div>
                    <div className="skill-pills-list">
                      {group.skills.map((skill) => (
                        <span key={skill} className="skill-pill-item">{skill}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience & Certifications Section */}
        <section id="certifications" className="section-padding">
          <div className="page-container">
            <div className="section-header reveal">
              <span className="section-label">Certificates</span>
              <h2 className="section-heading">Training & Certifications</h2>
              <p className="section-subtitle">
                Completed programs in web development, machine learning, computer science, and embedded systems.
              </p>
            </div>

            <div className="certifications-grid">
              {training.map((item, index) => (
                <div key={`${item.title}-${index}`} className="cert-card reveal">
                  <div className="cert-top">
                    <span className="cert-category">{item.category}</span>
                    <span className="cert-index">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="cert-title">{item.title}</h4>
                  <p className="cert-provider">{item.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section (ShopMart Deep Navy) */}
        <section id="contact" className="section-padding bg-dark">
          <div className="page-container">
            <div className="contact-wrapper reveal">
              <div className="contact-left">
                <span className="contact-tag">Contact</span>
                <h2 className="contact-headline">
                  Get In Touch
                </h2>
                <p className="contact-subtext">
                  Available for full-time engineering roles, contract opportunities, and collaborations. Feel free to reach out.
                </p>

                <div className="contact-info-items">
                  <a href={links.email} className="contact-info-row">
                    <div className="contact-icon"><Mail size={16} /></div>
                    <div>
                      <span className="contact-label">Email</span>
                      <strong className="contact-value">mostafasameer858@gmail.com</strong>
                    </div>
                  </a>

                  <a href={links.phone} className="contact-info-row">
                    <div className="contact-icon"><Phone size={16} /></div>
                    <div>
                      <span className="contact-label">Phone / WhatsApp</span>
                      <strong className="contact-value">+20 105 075 3724</strong>
                    </div>
                  </a>

                  <div className="contact-info-row">
                    <div className="contact-icon"><MapPin size={16} /></div>
                    <div>
                      <span className="contact-label">Location</span>
                      <strong className="contact-value">Beheira, Egypt</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-right">
                <div className="direct-cta-card">
                  <h3>Send a Message</h3>
                  <p>Reach out directly via email and I will respond promptly.</p>

                  <a href={links.email} className="btn btn-primary btn-block">
                    <Mail size={16} />
                    <span>Send Email</span>
                  </a>

                  <div className="social-links-grid">
                    <a href={links.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                      <LinkedinIcon size={16} />
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <a href={links.github} target="_blank" rel="noreferrer" className="social-btn">
                      <GithubIcon size={16} />
                      <span>GitHub Repositories</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="page-container footer-content">
          <div className="footer-left">
            <span>© {new Date().getFullYear()} Mostafa Samir Kamel</span>
            <span className="footer-divider">·</span>
            <span>Software Engineer</span>
            <span className="footer-divider">·</span>
            <span>BSc in AI & Data Science</span>
          </div>

          <a href="#top" className="back-to-top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
