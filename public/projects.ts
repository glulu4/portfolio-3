export enum Skill {
    UI = "UI",
    UX = "UX",
    FullStack = "Full Stack",
    DesignSystem = "Design System",
    Development = "Development",
    MotionDesign = "Motion Design",
    Branding = "Branding",
    Photography = "Photography",
    Visual = "Visual"
}

export enum Category {
    MobileApp = "Mobile app",
    Website = "Website",
    Script = "Script",
    Dashboard = "Dashboard",
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
        title: "Seo Crew",
        skills: [Skill.UI, Skill.Development], // Inferred from Tailwind CSS and Vercel deployment
        category: Category.Website,
        link: "https://www.seo-crew.com",
        description: `
      SEO Crew – I styled and developed a modern SEO services website using Tailwind CSS for responsive design,
      Vercel for seamless deployment, and Wisp for managing blogs. The project focuses on providing a fast,
      user-friendly experience to showcase SEO services and resources.
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
    title: "Get Funded",
    skills: [Skill.UI, Skill.UX, Skill.Visual, Skill.FullStack, Skill.Branding], // Inferred from React Native and Flask
    category: Category.Website,
    link: "https://www.gettfunded.com",
    description: `
      Get Funded is a modern yet sleek web app that guides users who need a loan 
      through a modern form to see if they qualify for a loan.
      I designed the branding, UI/UX, and visual elements, and developed the platform using Next.js and Tailwind CSS.
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
        link: "https://hoodiesforisrael.com/",
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
        category: Category.MobileApp,
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
];


export type ProjectData = typeof projects[number];