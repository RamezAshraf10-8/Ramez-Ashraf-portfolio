/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Centralized data file for Ramez Ashraf's Portfolio.
 * Update your information, links, projects, and skills here
 * without needing to modify HTML or UI components!
 */

const PORTFOLIO_DATA = {
  // Personal & Professional Information
  personal: {
    fullName: "Ramez Ashraf Abdelmoniem",
    shortName: "Ramez Ashraf",
    roleHeadline: "Computer Engineering Graduate | AI & Machine Learning | Data & Software",
    targetRoles: [
      "AI Engineer",
      "Machine Learning Engineer",
      "Computer Vision Engineer",
      "Data Analyst",
      "Junior Data Engineer",
      "Software Engineer"
    ],
    email: "rameznasr73@gmail.com",
    phone: "+201018189406",
    location: "Rehab City, Cairo, Egypt",
    githubUrl: "https://github.com/RamezAshraf10-8",
    linkedinUrl: "https://linkedin.com/in/ramez-ashraf-",
    cvPdfPath: "assets/docs/Ramez_Ashraf_CV.pdf",
    avatarImage: "assets/images/profile-portrait.jpg",
    bioIntro: "Computer Engineering graduate passionate about Artificial Intelligence, Machine Learning, Data, and Software Development. I enjoy transforming real-world problems into practical technology solutions through programming, data, and intelligent systems.",
    aboutDetailed: [
      "I am a fresh Computer Engineering graduate from The British University in Egypt (BUE) with an engineering foundation rooted in software architecture, computer vision, machine learning, and cloud data systems.",
      "Throughout my academic journey and specialized technical internships, I have focused on building applied AI solutions—such as deep learning instance segmentation models for automotive damage inspection, real-time facial landmark tracking for assistive communication, and NLP retrieval systems.",
      "With hands-on experience in AWS cloud infrastructure, network security, and data pipeline tooling, I bring an end-to-end engineering mindset: from model prototyping in PyTorch to scalable deployment and clean software engineering."
    ],
    stats: [
      { label: "Degree & GPA", value: "B.Sc. BUE (3.1/4.0)", detail: "Computer Engineering (2021–2026)" },
      { label: "AI & ML Training", value: "60+ Hours", detail: "Hands-on machine learning & Python" },
      { label: "Key Technical Projects", value: "6+ Built", detail: "Computer vision, NLP, Cloud & Apps" },
      { label: "Practical Internships", value: "4 Programs", detail: "AI, AWS Cloud, Cyber & Networks" }
    ]
  },

  // Technical Skills categorized by domain
  skills: {
    programming: {
      category: "Programming Languages",
      icon: "code",
      items: [
        { name: "Python", level: "Core / Advanced", tag: "Primary" },
        { name: "SQL", level: "Advanced", tag: "Databases" },
        { name: "C++", level: "Proficient", tag: "Systems & OOP" },
        { name: "C#", level: "Proficient", tag: "Desktop / .NET" },
        { name: "Java", level: "Proficient", tag: "Android / OOP" },
        { name: "JavaScript", level: "Proficient", tag: "Web" },
        { name: "HTML & CSS", level: "Proficient", tag: "Frontend" },
        { name: "Assembly", level: "Academic", tag: "Microprocessors" }
      ]
    },
    aiAndML: {
      category: "AI, Machine Learning & Vision",
      icon: "cpu",
      items: [
        { name: "Computer Vision", level: "Specialization", tag: "Core" },
        { name: "PyTorch", level: "Advanced", tag: "Deep Learning" },
        { name: "YOLOv11 (Ultralytics)", level: "Advanced", tag: "Instance Seg" },
        { name: "OpenCV", level: "Advanced", tag: "Vision Processing" },
        { name: "Google MediaPipe", level: "Advanced", tag: "Landmark Tracking" },
        { name: "Natural Language Processing", level: "Proficient", tag: "NLP" },
        { name: "Scikit-Learn", level: "Advanced", tag: "ML Algorithms" },
        { name: "Feature Engineering", level: "Proficient", tag: "Data Prep" },
        { name: "Model Evaluation", level: "Proficient", tag: "Metrics & Tuning" },
        { name: "Classification & Regression", level: "Core", tag: "Modeling" }
      ]
    },
    dataAndLibraries: {
      category: "Data Engineering & Python Libraries",
      icon: "database",
      items: [
        { name: "NumPy", level: "Advanced", tag: "Math & Arrays" },
        { name: "Pandas", level: "Advanced", tag: "Data Analysis" },
        { name: "Matplotlib & Seaborn", level: "Advanced", tag: "Visualization" },
        { name: "Data Cleaning & Preprocessing", level: "Core", tag: "Pipelines" },
        { name: "NLTK", level: "Proficient", tag: "Text Processing" },
        { name: "TF-IDF Vectorization", level: "Proficient", tag: "Embeddings" },
        { name: "Excel & Data Modeling", level: "Proficient", tag: "Analysis" }
      ]
    },
    cloudAndDevOps: {
      category: "Cloud, DevOps & Security",
      icon: "cloud",
      items: [
        { name: "AWS S3, EC2, IAM", level: "Hands-on", tag: "Compute & Storage" },
        { name: "AWS Lambda & Serverless", level: "Hands-on", tag: "Microservices" },
        { name: "Amazon Athena & QuickSight", level: "Hands-on", tag: "Data Analytics" },
        { name: "Amazon Rekognition & Comprehend", level: "Hands-on", tag: "Cloud AI" },
        { name: "Terraform & CloudFormation", level: "Familiar", tag: "IaC" },
        { name: "Juniper SRX / Junos OS", level: "Trained", tag: "Firewalls & VPN" },
        { name: "Network Security & Kali Linux", level: "Trained", tag: "Pen-Testing" }
      ]
    },
    toolsAndFrameworks: {
      category: "Development Tools & Frameworks",
      icon: "wrench",
      items: [
        { name: "Git & GitHub", level: "Daily Use", tag: "Version Control" },
        { name: "VS Code", level: "Primary IDE", tag: "Editor" },
        { name: "Jupyter Notebook & Google Colab", level: "Advanced", tag: "ML Research" },
        { name: "Flutter & Firebase", level: "Proficient", tag: "Mobile" },
        { name: "React", level: "Proficient", tag: "Web" },
        { name: "Gradio", level: "Proficient", tag: "AI Interfaces" },
        { name: "Figma", level: "Proficient", tag: "UI/UX Design" }
      ]
    }
  },

  // Featured and technical projects
  projects: [
    {
      id: "eyelids-morse-code",
      title: "Eyelids-Controlled Morse Code Communication System",
      subheading: "Bachelor's Dissertation — Assistive AI & Computer Vision",
      badge: "Major Research Dissertation",
      category: "computer-vision",
      image: "assets/images/eyelid-morse.jpg",
      featured: true,
      summary: "An AI/computer vision-based assistive communication system that translates intentional eye blinks into Morse code and text, empowering individuals with severe motor impairments (such as ALS or locked-in syndrome) using only a standard laptop webcam.",
      highlights: [
        "Tracks 12 facial/eye landmarks per frame using Google MediaPipe Face Landmarker.",
        "Computes Eye Aspect Ratio (EAR) with rolling-average smoothing to eliminate noise and spurious blinks.",
        "Engineered a timing-based classifier distinguishing intentional vs. involuntary blinks (dot, dash, and delete).",
        "Pioneered a delete-gesture error-correction mechanism, attaining 100% decoding accuracy across 5 participants vs. 62% in the closest benchmark study.",
        "Synthesized real-time audio tones (NumPy/Pygame) providing eyes-free feedback without requiring specialized hardware."
      ],
      technologies: ["Python", "OpenCV", "Google MediaPipe", "Computer Vision", "NumPy", "Pygame", "Matplotlib", "EAR Algorithm"],
      githubUrl: "https://github.com/RamezAshraf10-8",
      demoType: "morse-simulator",
      metrics: {
        accuracy: "100% Accuracy (5 Participants)",
        benchmark: "+38% Gain over baseline",
        fps: "Real-time 30+ FPS on CPU",
        hardware: "Standard Laptop Webcam"
      }
    },
    {
      id: "smart-vehicle-inspection",
      title: "Smart Vehicle Inspection and Repair Estimator (FixZone)",
      subheading: "Graduation Project — AI Instance Segmentation & Mobile App",
      badge: "Graduation Project",
      category: "ai-ml",
      image: "assets/images/vehicle-inspection.jpg",
      featured: true,
      summary: "An end-to-end AI system for automated vehicle damage detection and repair-cost estimation. Features a fine-tuned YOLOv11m-seg instance segmentation model coupled with a cross-platform Flutter application and Firebase backend.",
      highlights: [
        "Trained YOLOv11m-seg on the CarDD dataset across 6 damage classes: dent, scratch, crack, glass shatter, broken lamp, and flat tire.",
        "Achieved 0.769 box mAP@0.5 and 0.763 mask mAP@0.5 on the held-out test evaluation set.",
        "Designed a rule-based severity module (minor/moderate/severe) mapping segmentation mask area ratios with class-specific thresholds.",
        "Created an algorithmic repair-cost estimation module calibrated from automotive workshop pricing data.",
        "Shipped 'FixZone' Flutter mobile application with Firebase: instant damage scanning, PDF inspection reports, repair shop locator, and rule-based assistant."
      ],
      technologies: ["Python", "PyTorch", "YOLOv11m-seg", "OpenCV", "Flutter", "Firebase", "CarDD Dataset", "Instance Segmentation"],
      githubUrl: "https://github.com/RamezAshraf10-8",
      demoType: "vehicle-preview",
      metrics: {
        mAP_box: "0.769 Box mAP@0.5",
        mAP_mask: "0.763 Mask mAP@0.5",
        classes: "6 Damage Categories",
        stack: "End-to-End Mobile + AI"
      }
    },
    {
      id: "fixzone-nlp-chatbot",
      title: "FixZone AI Chatbot — Intelligent Q&A Assistant",
      subheading: "AI & Python Trainee Project — NLP & Classification",
      badge: "NLP System",
      category: "ai-ml",
      image: "assets/images/chatbot-nlp.jpg",
      featured: true,
      summary: "An intelligent conversational chatbot trained on structured question-and-answer datasets to interpret varied user phrasings, extract semantic features, and generate accurate real-time domain responses.",
      highlights: [
        "Implemented end-to-end NLP preprocessing: tokenization, stopword removal, and word stemming using NLTK.",
        "Constructed a TF-IDF feature space capturing semantic keyword importance across user queries.",
        "Trained a Logistic Regression classifier and cosine similarity matching algorithm for resilient intent detection.",
        "Engineered an interactive Gradio interface allowing users to query damage guidelines, repair procedures, and system information in real time."
      ],
      technologies: ["Python", "NLTK", "Scikit-Learn", "TF-IDF", "Logistic Regression", "Pandas", "Gradio"],
      githubUrl: "https://github.com/RamezAshraf10-8",
      demoType: "chatbot-simulator",
      metrics: {
        model: "TF-IDF + Logistic Regression",
        framework: "Scikit-learn & NLTK",
        ui: "Gradio Interactive Demo",
        domain: "Customer Support & Diagnostics"
      }
    },
    {
      id: "aws-cloud-pipeline",
      title: "AWS Cloud Serverless Architecture & Real-Time Data Pipeline",
      subheading: "Cloud Computing Trainee — ICT Hub (2025)",
      badge: "Cloud & Data Engineering",
      category: "cloud-data",
      image: "assets/images/cloud-pipeline.jpg",
      featured: false,
      summary: "Architected and deployed serverless microservice pipelines on AWS integrating AI cloud services, automated event streaming, and analytical data querying.",
      highlights: [
        "Built an AI Resume Ranker leveraging Amazon Comprehend for automated semantic talent qualification.",
        "Engineered real-time Face Recognition alerts integrating Amazon Rekognition with Amazon SNS notifications.",
        "Constructed analytical data pipelines combining Amazon S3 data lake, Amazon Athena SQL querying, and Amazon QuickSight BI dashboards.",
        "Implemented Infrastructure as Code (IaC) using AWS CloudFormation and Terraform; optimized operational spend via Cost Explorer."
      ],
      technologies: ["AWS S3", "AWS Lambda", "Amazon Athena", "Amazon QuickSight", "Amazon Rekognition", "Amazon Comprehend", "Terraform", "CloudFormation"],
      githubUrl: "https://github.com/RamezAshraf10-8",
      metrics: {
        infra: "Serverless & Microservices",
        bi: "Athena SQL + QuickSight",
        iac: "Terraform & CloudFormation",
        ai_services: "Comprehend & Rekognition"
      }
    },
    {
      id: "etfrag-movie-app",
      title: "Etfrag — Full-Stack Movie Browsing Web Application",
      subheading: "Software Engineering Project — React & Firebase",
      badge: "Web Application",
      category: "software-web",
      image: "assets/images/etfrag-movie.jpg",
      featured: false,
      summary: "A production-grade movie exploration web app designed in Figma and developed in React, offering user authentication, dynamic TMDB API integration, personalized watchlists, and family-safe browsing filters.",
      highlights: [
        "Implemented Gmail OAuth and secure session state with Firebase Authentication.",
        "Built responsive UI from custom high-fidelity Figma prototypes featuring glassmorphic media cards.",
        "Integrated TMDB REST API for real-time trending titles, multi-language support, genre filters, and children mode.",
        "Integrated EmailJS for direct contact support and responsive client notifications."
      ],
      technologies: ["React", "JavaScript", "Firebase Auth", "TMDB API", "Figma", "EmailJS", "CSS3"],
      githubUrl: "https://github.com/RamezAshraf10-8",
      metrics: {
        auth: "Firebase OAuth",
        api: "TMDB REST API",
        design: "Figma UI/UX Prototypes",
        features: "Watchlists & Multi-Profile"
      }
    },
    {
      id: "network-and-systems",
      title: "Network Applications Suite & Custom C++ Data Structures",
      subheading: "Computer Engineering Core — Socket Programming & Low-Level C++",
      badge: "Systems & Networking",
      category: "software-web",
      image: "assets/images/chatbot-nlp.jpg",
      featured: false,
      summary: "A suite of multi-threaded network communication tools and custom algorithmic systems engineered without third-party libraries.",
      highlights: [
        "Engineered a UDP file transfer tool with server-side renaming and packet verification.",
        "Developed a TCP/SMTP secure email sender with TLS authentication.",
        "Built a multi-threaded UDP real-time chat client supporting concurrent duplex messaging.",
        "Implemented custom template-based linked lists and dynamic arrays in C++ from scratch (no STL containers) for an OOP inventory management system."
      ],
      technologies: ["Python", "Socket Programming", "C++", "OOP", "TCP/IP & UDP", "Multi-threading", "Data Structures"],
      githubUrl: "https://github.com/RamezAshraf10-8",
      metrics: {
        protocols: "UDP, TCP, SMTP + TLS",
        concurrency: "Multi-threading",
        cpp: "Custom Template Data Structures",
        standard: "Pure POSIX / Sockets"
      }
    }
  ],

  // Practical Internships and Training (Accurately from CV)
  experience: [
    {
      title: "Cloud Computing Trainee",
      organization: "ICT Hub",
      location: "Cairo, Egypt",
      period: "2025",
      type: "Technical Training",
      badge: "Cloud & Data",
      description: "Intensive hands-on training program focused on AWS cloud engineering, serverless microservices, and automated data pipelines.",
      bulletPoints: [
        "Designed and deployed serverless, microservices, and load-balanced architectures on AWS.",
        "Engineered an AI resume ranker with Amazon Comprehend and automated facial recognition alert workflows with Amazon Rekognition and SNS.",
        "Constructed scalable serverless data querying pipelines leveraging Amazon Athena, S3 data lakes, and Amazon QuickSight analytics.",
        "Utilized AWS CloudFormation and Terraform for Infrastructure as Code (IaC); analyzed resource costs using AWS Cost Explorer and Trusted Advisor."
      ],
      tags: ["AWS", "Lambda", "Athena", "QuickSight", "Terraform", "Serverless", "IaC"]
    },
    {
      title: "Cybersecurity Intern",
      organization: "ICT Hub",
      location: "Cairo, Egypt",
      period: "2025",
      type: "Technical Internship",
      badge: "Security",
      description: "Applied hands-on penetration testing methodologies across simulated virtualized lab environments.",
      bulletPoints: [
        "Executed complete pen-testing lifecycle: reconnaissance, vulnerability scanning, active exploitation, and remediation reporting.",
        "Conducted network analysis and port scanning using Kali Linux, Nmap, and Netdiscover.",
        "Simulated target exploitation using Metasploit, establishing reverse shells and investigating privilege escalation vectors in controlled sandboxes.",
        "Drafted professional pen-test documentation detailing threat severity ratings and remediation steps."
      ],
      tags: ["Kali Linux", "Nmap", "Metasploit", "Penetration Testing", "Vulnerability Analysis"]
    },
    {
      title: "Network Security Intern",
      organization: "BARQ Systems",
      location: "Cairo, Egypt",
      period: "2024",
      type: "Enterprise Internship",
      badge: "Enterprise Networks",
      description: "Enterprise networking internship working with industrial firewalls, security zoning, and high availability systems.",
      bulletPoints: [
        "Configured security zones, policy rules, NAT, and IPsec VPN tunnels on Juniper SRX enterprise firewalls via Junos OS CLI and J-Web.",
        "Configured Unified Threat Management (UTM) capabilities including antispam, antivirus, and web filtering policies.",
        "Set up high-availability clustering topologies and monitored live network traffic for abnormal behaviors."
      ],
      tags: ["Juniper SRX", "Junos OS", "IPsec VPN", "Firewalls", "UTM", "High Availability"]
    },
    {
      title: "AI & Python Trainee (60+ Hours)",
      organization: "ICT Hub",
      location: "Cairo, Egypt",
      period: "2023",
      type: "AI & ML Training",
      badge: "AI Foundational Training",
      description: "Rigorous 60+ hour hands-on program in Python programming, machine learning foundations, NLP, and socket communications.",
      bulletPoints: [
        "Completed 60+ hours of applied curriculum spanning Python fundamentals, linear algebra for ML, and classification/regression algorithms.",
        "Constructed an intelligent NLP chatbot capable of parsing varied question phrasings and returning accurate responses from training datasets.",
        "Built three networked socket communication applications: UDP file transfer, TCP/SMTP email sender with TLS authentication, and multi-threaded real-time UDP chat."
      ],
      tags: ["Python", "Machine Learning", "NLP Chatbot", "Socket Programming", "Data Preprocessing"]
    }
  ],

  // Education Details (From CV)
  education: {
    institution: "The British University in Egypt (BUE)",
    location: "Cairo, Egypt",
    degree: "Bachelor of Science in Computer Engineering",
    period: "2021 – 2026",
    status: "Fresh Graduate (2026)",
    gpa: "3.1 / 4.0",
    overview: "Comprehensive 5-year engineering curriculum integrating hardware engineering, software architecture, artificial intelligence, computer vision, and distributed computing systems.",
    keyCoursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++/Python)",
      "Database Systems & SQL",
      "Computer Networks & Protocols",
      "Software Engineering",
      "Microprocessors & Architecture",
      "Operating Systems",
      "Cloud Architecture",
      "Human-Computer Interaction (HCI)",
      "Signal Processing"
    ]
  },

  // Certifications & Verified Credentials
  certifications: [
    {
      title: "AI & Python Specialization (60+ Hours)",
      issuer: "ICT Hub",
      date: "2023",
      category: "AI & Machine Learning",
      description: "Comprehensive practical training covering Python programming, machine learning classification, NLP retrieval systems, and socket networking.",
      status: "Completed & Verified"
    },
    {
      title: "AWS Cloud Computing & Serverless Architecture",
      issuer: "ICT Hub",
      date: "2025",
      category: "Cloud & Data Engineering",
      description: "Hands-on engineering across AWS core services (EC2, S3, IAM, Lambda, Athena, QuickSight, DynamoDB, Rekognition, Comprehend) and Terraform IaC.",
      status: "Completed & Verified"
    },
    {
      title: "Enterprise Network Security & Juniper SRX",
      issuer: "BARQ Systems",
      date: "2024",
      category: "Network Engineering",
      description: "Enterprise firewall zoning, IPsec VPN configurations, Junos OS CLI management, and Unified Threat Management implementation.",
      status: "Completed & Verified"
    },
    {
      title: "Applied Cybersecurity & Penetration Testing",
      issuer: "ICT Hub",
      date: "2025",
      category: "Cybersecurity",
      description: "Reconnaissance, vulnerability scanning with Nmap, exploitation with Metasploit, privilege escalation, and remediation reporting.",
      status: "Completed & Verified"
    }
  ],

  // GitHub Code Repositories Highlight
  githubRepos: [
    {
      name: "FixZone-AI-Vehicle-Inspection",
      description: "End-to-end automated vehicle damage segmentation & repair cost estimation using YOLOv11m-seg, Flutter & Firebase.",
      topics: ["python", "pytorch", "yolov11", "computer-vision", "flutter", "firebase"],
      stars: "Featured",
      forks: "Graduation Project",
      url: "https://github.com/RamezAshraf10-8"
    },
    {
      name: "Eyelid-Morse-Code-Assistive-CV",
      description: "Assistive communication system tracking eye landmarks via MediaPipe and translating blinks to Morse code text.",
      topics: ["python", "opencv", "mediapipe", "assistive-tech", "ear-algorithm"],
      stars: "Dissertation",
      forks: "100% Accuracy",
      url: "https://github.com/RamezAshraf10-8"
    },
    {
      name: "FixZone-NLP-QA-Chatbot",
      description: "NLP question answering chatbot trained on structured domain dataset with TF-IDF and Logistic Regression.",
      topics: ["python", "nltk", "scikit-learn", "tf-idf", "gradio"],
      stars: "Trainee Project",
      forks: "NLP",
      url: "https://github.com/RamezAshraf10-8"
    },
    {
      name: "AWS-Serverless-Data-Pipeline",
      description: "Cloud data pipelines using AWS Athena, S3, Lambda, and QuickSight with Terraform infrastructure as code.",
      topics: ["aws", "terraform", "athena", "quicksight", "serverless", "data-lake"],
      stars: "Cloud IaC",
      forks: "AWS",
      url: "https://github.com/RamezAshraf10-8"
    },
    {
      name: "Etfrag-Movie-Streaming-App",
      description: "React web app with TMDB API integration, Firebase authentication, watchlists, and Figma-designed glassmorphism UI.",
      topics: ["react", "javascript", "firebase", "tmdb-api", "figma"],
      stars: "Full-Stack",
      forks: "React",
      url: "https://github.com/RamezAshraf10-8"
    },
    {
      name: "Network-Socket-Applications-Suite",
      description: "Concurrent UDP file transfer with server-side renaming, TCP/SMTP TLS email sender, and multi-threaded UDP chat.",
      topics: ["python", "socket-programming", "udp", "tcp", "multi-threading"],
      stars: "Systems",
      forks: "Networking",
      url: "https://github.com/RamezAshraf10-8"
    }
  ],

  // Interactive Live Demo Presets for Recruiters
  interactiveDemos: {
    morse: {
      title: "Interactive Eyelid Morse Code Simulator",
      description: "Try Ramez's assistive communication logic! Click and hold the button below to simulate an intentional blink. A quick tap generates a Dot (•), a longer hold generates a Dash (—), and holding over 1.2s triggers the Error-Correction Delete gesture.",
      dictionary: {
        ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
        "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
        "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R",
        "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
        "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1", "..---": "2",
        "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7",
        "---..": "8", "----.": "9"
      }
    },
    chatbot: {
      title: "FixZone AI Knowledge Assistant",
      sampleQueries: [
        "What is FixZone?",
        "What damage types can the AI detect?",
        "How accurate is the vehicle inspection model?",
        "How is repair cost estimated?",
        "What technologies were used in FixZone?"
      ],
      kb: {
        "what is fixzone": "FixZone is an end-to-end AI vehicle inspection system that automates damage detection and repair cost estimation from photos, featuring a Flutter mobile app and YOLOv11m-seg instance segmentation backend.",
        "damage types": "FixZone detects 6 distinct damage classes on the CarDD dataset: dent, scratch, crack, glass shatter, broken lamp, and flat tire.",
        "accuracy": "The fine-tuned YOLOv11m-seg model achieved 0.769 box mAP@0.5 and 0.763 mask mAP@0.5 on the held-out test evaluation set.",
        "repair cost": "FixZone computes repair costs using a rule-based severity module (minor/moderate/severe) derived from segmentation mask-to-image area ratios and calibrated automotive workshop pricing matrices.",
        "technologies": "FixZone is built with Python, PyTorch, YOLOv11m (Ultralytics), OpenCV, Flutter (Dart), and Google Firebase backend."
      }
    }
  }
};

// Export to global scope for browser usage
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
