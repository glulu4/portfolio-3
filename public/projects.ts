export enum Skill {
    UI = "UI",
    UX = "UX",
    FullStack = "Full Stack",
    DesignSystem = "Design System",
    Development = "Development",
    MotionDesign = "Motion Design",
    Branding = "Branding",
    Visual = "Visual"
}

export enum Category {
    MobileApp = "Mobile app",
    Website = "Website",
    Script = "Script",
    Dashboard = "Dashboard",
    Programming = "Programming",
}

export const projects = [
    {
        title: "Quantified",
        skills: [Skill.UI, Skill.UX, Skill.FullStack], // Inferred from React Native and Firebase
        category: Category.MobileApp,
        link:null,
        description: `
      Quantified is a mobile health tracking app built with React Native and Firebase.
      The app is designed to allow users to track, analyze, and visualize their health metrics in a more holistic way.
      Code available upon request
    `,
    },

    {
        title: "Sam's Monday Bagels",
        skills: [Skill.UI, Skill.Development], // Inferred from React, Flask, ThreeJs
        category: Category.Website,
        link: "https://shmuelsmondaybagels.com/",
        description: `
      Shmuel's Monday Bagels is a professional website for a local bakery in Pittsburgh.
      I used React and Flask for the frontend and backend, ThreeJs for the 3D bagel, Stripe API for payment processing,
      and Yagmail for the email system. Code available on GitHub.
    `,
    },
  {
    title: "Funding Website",
    skills: [Skill.UI, Skill.UX, Skill.Visual, Skill.FullStack, Skill.Branding], // Inferred from React Native and Flask
    category: Category.Website,
    // link: "https://www.gettfunded.com",
    link: "https://get-funding.vercel.app",
    description: `
      This is a modern yet sleek web app that guides users who need a loan 
      through a modern form to see if they qualify for a loan.
      I designed the branding, UI/UX, and visual elements, and developed the platform using Next.js and Tailwind CSS.
      Code and Demo available upon request. Website is currently down due to client complications.
    `,
  },

  {
    title: "ISAACC18",
    skills: [Skill.UI, Skill.UX, Skill.Visual, Skill.FullStack, Skill.Branding], // Inferred from React Native and Flask
    category: Category.Website,
    link: "https://www.isaacc18.org",
    description: `
      ISAACC18 ( International Support Of Anesthesia And Critical Care in Israel ) is a dedicated international network of over 200 experienced volunteer anesthesiologists. 
      The website is built with Next.js and Tailwind CSS, featuring a modern design and responsive layout.
      This projects features user management and auth & donation processing with Stripe
    `,
  },



  {
    title: "The Alon Group",
    skills: [Skill.UI, Skill.DesignSystem, Skill.UX, Skill.Visual, Skill.Branding],
    category: Category.Website,
    link: "https://www.thealongroup.com",
    description: `
      The Alon Group is a real estate firm specializing in high-end residential and commercial properties.
      I designed and built their website using Wix, focusing on a clean, modern aesthetic that reflects the brand’s professionalism and trustworthiness.
      The site includes custom iconography (designed by me), property listings, and contact forms, with responsive layout for seamless browsing on all devices.
      My role covered everything from visual design and branding to layout structuring and final deployment.
    `,
  },
  




  {
    title: "eCFR Analyzer",
    skills: [Skill.FullStack, Skill.Development], // Inferred from Python
    category: Category.Programming,
    link: "https://ecfr-two.vercel.app",
    description: `
    eCFR Analyzer is a small website designed to parse the Electronic Code of Federal Regulations (eCFR) XML data.
    The system processes all 50 Titles of federal regulations, extracting word counts by agency per Title.
    It also enables comparisons of agency word counts across different dates to visualize regulatory growth or changes over time.
    Visualizations are generated to make regulatory analysis more accessible and actionable.
    This project focuses on large data handling, parsing, and dynamic reporting.
    Code and demos available upon request.
  `,
  },

  {
    title: "Currency Arbitrage Detector",
    skills: [Skill.Development],
    category: Category.Programming,
    link: null,
    description: `
    Currency Arbitrage Detector is a C++ program designed to find arbitrage opportunities between currency exchange rates.
    I built the program using Boost for handling HTTP requests to fetch real-time currency data, and implemented the Bellman-Ford algorithm to detect negative cycles indicating arbitrage opportunities.
    This project was mainly a personal learning exercise to deepen my understanding of C++, graph algorithms, and real-world financial applications.
    Code available upon request.
  `,
  },

    {
        title: "Receipt Budget Tracker",
        skills: [Skill.UI, Skill.FullStack], // Inferred from React Native and Flask
        category: Category.MobileApp,
        link: null,
        description: `
      A mobile app that scans receipts and tracks expenses using React Native and Flask.
      Implements Azure Document Intelligence for receipt scanning to help small restaurants with soda tax tracking.
    `,
    },
  {
    title: "Mass Product Uploader",
    skills: [Skill.Development], // Inferred from Haskell
    category: Category.Script,
    link: null,
    description: `
      I developed a script that generated product titles and descriptions with the OpenAI api, 
      then created an image link and uploaded a product to the stripe api. I also developed a related 
      script that pulled all the products from the stripe api and uploaded them to the google merchant api.
    `,
  },
  {
    title: "Multithreaded AI Product Description Updater",
    skills: [Skill.Development], // Inferred from Python and Shopify API
    category: Category.Script,
    link: null,
    description: `
      I created a multithreaded Python script that uses the OpenAI API to generate SEO-optimized product 
      descriptions for an entire Shopify catalog. The script fetches product data via the Shopify Admin API, 
      processes multiple products in parallel using Python's threading library, and updates each product's 
      description in-place. The solution significantly reduced the time needed to update large inventories 
      while improving discoverability through AI-generated copy.
    `,
  },
  
    {
        title: "Virtual Memory Simulator",
        skills: [Skill.Development], // Inferred from Java
        category: Category.Script,
        link: null,
        description: `
      A virtual memory simulation using a single-level page table and two-level tree, implemented in Java.
      Code available on GitHub.
    `,
    },
    {
        title: "Neighborhood Analysis",
        skills: [Skill.Development], // Inferred from Python
        category: Category.Script,
        link: null,
        description: `
      A Python program to determine the best Pittsburgh neighborhood based on crime rate, park-land, and income.
      My role included data analysis of natural environment conditions. Code on GitHub.
    `,
    },
    {
        title: "Sudoku Solver in Haskell",
        skills: [Skill.Development], // Inferred from Haskell
        category: Category.Script,
        link: null,
        description: `
      Implemented DFS algorithm in Haskell to solve Sudoku as a functional programming class project.
    `,
    },
    {
        title: "Bouncing DVD Logo",
        skills: [Skill.UI], // Inferred from React
        category: Category.Website,
        link: `/dvd`,
        description: `
      Recreated the classic bouncing DVD logo using React.
    `,
    },
    {
        title: "Hoodies For Israel",
        skills: [Skill.UI, Skill.Development], // Inferred from React and Stripe
        category: Category.Website,
        link: null,
        description: `
      A React web app integrating Stripe Checkout API to raise money for Israel by selling hoodies.
      Uses vanilla CSS flexbox for dynamic resizing. Code on GitHub.
    `,
    },
    {
        title: "Custom Blog with CMS",
        skills: [Skill.UI, Skill.Development], // Inferred from Next.js and Tailwind
        category: Category.Website,
        link: "https://www.judaisminthecity.com/about",
        description: `
      Judaism in the City is a Next.js blog site styled with Tailwind CSS and integrated with Wisp CMS.
    `,
    },
    {
        title: "Ecommerce Jewelry Website",
        skills: [Skill.UI, Skill.Development], // Inferred from Next.js, Tailwind, and Stripe
        category: Category.Website,
        link: "https://www.ambersjewelryboutique.com",
        description: `
      Amber's Jewelry Boutique is a Next.js eCommerce site for repurposed jewelry, styled with Tailwind CSS.
      Includes an automated script for bulk product addition and Stripe API for payments and inventory.
    `,
    },
    {
        title: "Shakespeare Language Model",
        skills: [Skill.Development], // Inferred from Python
        category: Category.Script,
        link: null,
        description: `
      N-gram language model trained on a Shakespeare corpus using Python with dynamic context size.
      No smoothing used. Code on GitHub.
    `,
    },
    {
        title: "Snap App",
        skills: [Skill.UI, Skill.Development], // Inferred from Flutter
        category: Category.Website,
        link: null,
        description: `
      A Flutter productivity web app designed under MVVM principles, a class project with collaborators.
      Code on GitHub.
    `,
    },
    {
        title: "Complex Word Classifier",
        skills: [Skill.Development], // Inferred from Python
        category: Category.Script,
        link: null,
        description: `
      A Naive Bayes/Logistic Regression model to predict complex words based on length and occurrence.
      Code on GitHub.
    `,
    },

    {
        title: "Python Bank Statement Parser",
        skills: [Skill.Development], // Inferred from Python
        category: Category.Script,
        link: "https://example.com/python-parser",
        description: `
      Python scripts to analyze PDF bank statements, exporting data into Pandas DataFrames for financial analysis.
    `,
    },
    {
        title: "Python Invoice Parser",
        skills: [Skill.Development], // Inferred from Python
        category: Category.Script,
        link: "https://example.com/python-parser",
        description: `
      I was hired as a freelancer to create a python script to convert invoices from one format to another and apply taxes where necessary.
    `,
    },
    {
        title: "Tableau Interactive Dashboard",
        skills: [Skill.Visual], // Inferred from Tableau
        category: Category.Dashboard,
        link: "https://example.com/tableau-dashboard",
        description: `
      I was hired as a freelancer to create an interactive Tableau dashboard for nursing home data analysis, with filters and custom visualizations.
    `,
    },
    {
        title: "Modern Kitchen Website",
        skills: [Skill.UI, Skill.Development], // Inferred from Next.js and Tailwind
        category: Category.Website,
        link: "https://www.modernkitchensmiami.com",
        description: `
      A sleek website for kitchen contractors in Miami, built with Next.js and Tailwind CSS.
    `,
    },
    {
        title: "Roofing Website",
        skills: [Skill.UI, Skill.Development], // Inferred from Next.js and Tailwind
        category: Category.Website,
        link: "https://www.paragonexterior.com",
        description: `
      A modern roofing website with a unique design and cohesive color system, built with Next.js and Tailwind CSS,
      using Wisp Starter Blog.
    `,
    },
    {
        title: "ThingsToGoDo.com",
        skills: [Skill.UI, Skill.Development], // Inferred from Next.js, Tailwind, and Open AI
        category: Category.Website,
        link: "https://www.thingstogodo.com",
        description: `
      A Next.js website with Tailwind CSS to generate AI-powered ideas for things to do, using Open AI API with a proxy.
    `,
    },
  {
    title: "Non-Profit Homepage Website",
    skills: [Skill.Development, Skill.DesignSystem, Skill.UI], // Inferred from Next.js, Tailwind, and TypeScript
    category: Category.Website,
    link: "https://orginization-page-demo.vercel.app",
    description: `
        I designed and developed a modern homepage for a non-profit organization using Next.js, Tailwind CSS, 
        and TypeScript. The site highlights the mission, impact, and ways to get involved, with an emphasis 
        on clean design, accessibility, and performance. I implemented reusable UI components, mobile-first 
        responsiveness, and SEO best practices to help the organization increase visibility and engagement online.
      `,
  },
    
];


export type ProjectData = typeof projects[number];