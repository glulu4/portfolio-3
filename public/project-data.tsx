import {JavaOriginal} from 'devicons-react';
import {FlaskOriginalWordmark} from 'devicons-react';
import {PythonOriginalWordmark} from 'devicons-react';
import {ReactOriginal} from 'devicons-react';
import {FlutterOriginal} from 'devicons-react';
import {HaskellOriginal} from 'devicons-react';
import {FirebaseOriginalWordmark} from 'devicons-react';
import {TailwindcssOriginal} from 'devicons-react';
import {NextjsOriginalWordmark} from 'devicons-react';
import TableauIcon from '../src/components/TableauIcon';

// https://devicons-react.vercel.app/latest
const FLASK = <FlaskOriginalWordmark size='70' />
const JAVA = < JavaOriginal size='50' />;
const PYTHON = <PythonOriginalWordmark size='60' />;
const REACT = < ReactOriginal size='60' />;
const FLUTTER = <FlutterOriginal size="55" />;
const HASKELL = <HaskellOriginal size='60' />;
const FIREBASE = <FirebaseOriginalWordmark size="82" />;
const TailWind = <TailwindcssOriginal size="60" />;
const Next = <NextjsOriginalWordmark size='75' />;
const Tableau = <TableauIcon />;

enum ProjectCategory {
    SCHOOL = "School",
    WEBSITE = "Website",
    APP = "Mobile",
    DATA = "Data",
    OTHER = "Other"
}

export const projectData = [
    {

        name: "Quantified",
        description: "Health tracking app",
        gif: "/gifs/quantified.gif",
        detail:
            <>
                Quantified – Leading the development of a
                React Native/Firebase health tracking app.

                The app is designed to allow users to track, analyze, and
                visualize their health metrics. I've been collaborating with
                senior developers to implement secure user
                authentication, real-time data updates, and
                dynamic graphing features. Spearheading the
                integration of Firebase for efficient data
                storage and app scalability.

                DESIGNS NOT IMPLEMENTED YET.

            </>,
        path: `quantified`,
        langaugesIcons: [REACT, FIREBASE],
        mobileDisplay: true,
        category: ProjectCategory.APP
    },

    {
        name: "Seo Crew",
        description: "Styled a company webiste",
        gif: "/gifs/seocrew.gif",

        detail:
            <>
                SEO Crew – I styled and developed a modern SEO services website using Tailwind CSS for
                responsive design, Vercel for seamless deployment, and Wisp for managing blogs.
                The project is focused on providing a fast, user-friendly experience to showcase
                SEO services and resources.    </>,
        path: `seocrew`,
        langaugesIcons: [REACT, TailWind],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },
    {
        name: "Sam's Monday Bagels",
        description: "Professional Bagel Website, designed for weekly orders",
        gif: "/gifs/bagel.gif",

        detail:
            <>
                Shmuel's Monday Bagels is a professional website for a local bakery
                in Pittsburgh. I used React and Flask for the frontend and backend.
                Moreover, ThreeJs, the Stripe API, and
                Yagmail, were used for the 3D bagel, payment processing, email system, respectively.
                All the code can be found on my <a href='https://github.com/glulu4/Bagels' target='_target'>github</a>.
                The site, can be found <a href='https://shmuelsmondaybagels.com/' target='_target'>here</a>.
            </>,
        path: `bagel`,
        langaugesIcons: [FLASK, REACT],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },

    {
        name: "Receipt Budget Tracker",
        description: "A mobile app that scans receipts and tracks expenses",
        gif: "/gifs/app.gif",

        detail:
            <>
                For this project, I used React Native (JavaScript) and Flask (Python) to
                implement a full-stack application to scan receipts to track expenses and
                taxable soda ounces for restaurants. In certain cities, there is a soda tax,
                so this app was intended to help small restaurants. I implemented the Azure
                Document Intelligence model for receipt scanning.
            </>,
        path: `budget`,
        langaugesIcons: [FLASK, REACT],
        mobileDisplay: true,
        category: ProjectCategory.APP
    },

    {
        name: "Virtual Memory Simulator",
        description: "A virtual memory simulation",
        detail:
            <>
                The gif to the right / bottom displays a simulation of vvirtual memory and paging,
                using both a single-level page table and a two-level tree. I used Java for this project. The code
                can be found on my <a href='https://github.com/glulu4/Virtual-Memory-Simulation' target='_target'>github</a>.
            </>,
        path: `vmsim`,
        langaugesIcons: [JAVA],
        mobileDisplay: false,
        category: ProjectCategory.SCHOOL,
    },
    {
        name: "Neighborhood Analysis",
        description: "Python Program that determines the best Pittsburgh neighborhood",
        gif: "/gifs/neighborhood.gif",

        detail:
            <>
                This group project aimed to find the best neighborhood in Pittsburgh,
                based off of the crime rate, number of acres of park-land / trees, and income.
                My role included the data analysis of the 'natural environment conditions'.
                The code can be found on my <a href='https://github.com/glulu4/Pittsburgh_Neighborhood_Analysis' target='_target'>github</a>.
            </>,
        path: `neighborhood`,
        langaugesIcons: [PYTHON],
        mobileDisplay: false,
        category: ProjectCategory.SCHOOL

    },

    {
        name: "Sudoku Solver in Haskell",
        description: "Implemented DFS in Haskell to solve sudoku",
        gif: "/gifs/sudoku.gif",

        detail:
            <>
                In my functional programming class, one of our projects was to implement
                the DFS algorithm to solve sudoku.
            </>,
        path: `sudoku`,
        langaugesIcons: [HASKELL],
        mobileDisplay: false,
        category: ProjectCategory.SCHOOL
    },

    {
        name: "Bouncing DVD Logo",
        description: "Recreated the classic bouncing dvd logo",
        detail: <></>,
        path: `dvd`,
        langaugesIcons: [REACT],
        mobileDisplay: false,
        category: ProjectCategory.OTHER
    },
    {
        name: "Hoodies For Israel",
        description: "Simple website, designed to raise money for Israel by selling hoodies",
        gif: "/gifs/hoodie.gif",
        detail:
            <>
                Hoodies for Israel is a React web app that integrates the
                Stripe Checkout API. A hallmark of ths project is the dynamic resizing of the page
                and the rows. I used vanilla CSS flexbox to achieve this.
                The code can be found <a href='https://github.com/glulu4/Hoodie_Site' target='_target'>here</a>.
                The site, can be found <a href='https://hoodiesforisrael.com/' target='_target'>here</a>.
            </>,
        path: `hoodie`,
        langaugesIcons: [REACT],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },
    {
        name: "Custom Blog with CMS",
        description: "Blog site - Judaism in the City",
        gif: "/gifs/giseleBlog.gif",
        detail:
            <>
                Judaism in the City is a Next.js blog site
                styled with Tailwind Css and integartes the Wisp CMS.

                The site, can be found <a href='https://www.judaisminthecity.com/about' target='_target'>here</a>.
            </>,
        path: `custom-blog`,
        langaugesIcons: [Next, TailWind],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },

    {
        name: "Ecommerce Jewelry Website",
        description: "A beautifully designed eCommerce platform for repurposed jewelry.",
        gif: "/gifs/chanel.gif",
        detail:
            <>
                Amber's Jewelry Boutique is a Next.js-powered eCommerce site that showcases a curated collection of
                repurposed jewelry pieces. Styled with Tailwind CSS, the site provides a seamless and visually
                appealing shopping experience.

                To streamline product management, I developed an **automated script** that efficiently adds products in bulk,
                reducing manual effort and ensuring consistency in product listings.

                I integrated the Stripe API for payments and inventory management.

                The site can be found <a href='https://www.ambersjewelryboutique.com' rel="noreferrer" target='_blank'>here</a>.
            </>,
        path: `jewelry`,
        langaugesIcons: [Next, TailWind],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },


    {
        name: "Shakespeare Language Model",
        description: "Trained an n-gram model on a Shakespeare corpus",
        gif: "/gifs/ngram.gif",

        detail: <>
            N-gram langauge model that is trained on a Shakespeare corpus of text.
            No smoothing is used. A dynamic context size is used. All the code can be found <a href='https://github.com/glulu4/N-gram-Langauge-Model' target='_target'>here</a>.
        </>,
        path: `ngram`,
        langaugesIcons: [PYTHON],
        mobileDisplay: false,
        category: ProjectCategory.SCHOOL
    },
    {
        name: "Snap App",
        description: "Flutter productivity web app",
        gif: "/gifs/snap.gif",

        detail:
            <>
                Snap App, the productivity app, was a class project I worked on
                with two others, Hannah Harhai @hannahharhai & Maya Iwabuchi @mayajoyiwabuchi.
                We designed this web app under the MVVM design principle. All the code is on my <a href='https://github.com/glulu4/Snap_App' target='_target'>github</a>.
            </>,
        path: `snap-app`,
        langaugesIcons: [FLUTTER],
        mobileDisplay: false,
        category: ProjectCategory.SCHOOL
    },
    {
        name: "Complex Word Classifier",
        description: "Naive Bayes / Logistic Regression model that can predict complex words in a given text",
        gif: "/gifs/classifier.gif",
        path: `classifier`,
        detail:

            <>
                This project features a complex word
                classifier that classifies a word as complex based on two key
                metrics: word length and average occurrence, as sourced
                from Google's unigram count data. Rather than identifying
                words within a text, this program focuses on analyzing words
                from a given list and generates corresponding scores for each.
                Don't worry, the scores appear at the end.
                The code can be found on my <a href='https://github.com/glulu4/Complex-Word-Classifier/blob/main/README.md' target='_target'>github</a>.
            </>,
        langaugesIcons: [PYTHON],
        mobileDisplay: false,
        category: ProjectCategory.SCHOOL
    },
    {
        name: "Python Bank Statement Parser",
        description: "Python bank statment parsers that clean and export data",
        // gif: "...",
        path: `python-parser`,
        detail:

            <>
                I was hired on a contract to develop Python scripts to analyze PDF bank statements.
                The goal was to extract data and export it into structured Pandas
                DataFrames for detailed financial analysis
            </>,
        langaugesIcons: [PYTHON],
        mobileDisplay: false,
        category: ProjectCategory.DATA
    },
    {
        name: "Tableau Interactive Dashboard",
        description: "Dynamic Tableau dashboard designed to analyze and visualize nursing home data",
        // /gif: "...",
        path: `tableau-dashboard`,
        detail:
            <>
                I was hired on a contract to develop and design interactive Tableau dashboards for visualizing key business metrics.
                The dashboards integrated seamlessly with data sources and provided actionable insights through filters, calculated fields,
                and custom visualizations. Additionally, I collaborated with stakeholders to ensure the dashboards aligned with business goals.
            </>,
        langaugesIcons: [Tableau],
        mobileDisplay: false,
        category: ProjectCategory.DATA
    },
    {
        name: "Modern Kitchen Website",
        description: "Designed a modern webiste for custom kitchens",
        gif: "/gifs/kitchen-modern-video.gif",
        path: `kitchen-miami`,
        detail:
            <>
                I was hired to design and develop a sleek webiste for kitchen contractors in Miami.
                I used Next.js and Tailwind CSS to design the site. I also used the Wisp Starter Blog to start the project.
            </>,
        langaugesIcons: [Next, TailWind],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },
    {
        name: "Roofing Website",
        description: "Designed & developed a modern roofing website",
        gif: "/gifs/roofing.gif",
        path: `roofing`,
        detail:
            <>
                I was hired to design and develop a beautiful website for local roofers. They requested a unique design and cohesive color system to match their branding.
                I worked closely with them to create a professional and visually appealing platform that effectively showcases their services and builds trust with potential clients.
                The project involved using Next.js and Tailwind CSS for a responsive and modern design.
                Additionally, I utilized the Wisp Starter Blog as a foundation to accelerate development and ensure scalability.      </>,
        langaugesIcons: [Next, TailWind],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },
    {
        name: "ThingsToGoDo.com",
        description: "Generate ideas for things to do in your area with AI",
        gif: "/gifs/event.gif",
        path: `event`,
        detail:
            <>
                Created a small but beautifully designed website with next.js and tailwind to generate ideas for things to do in any area.
                I integrated the Open AI api and used a proxy to hide my server endpoint.
            </>,
        langaugesIcons: [Next, TailWind, FIREBASE],
        mobileDisplay: false,
        category: ProjectCategory.WEBSITE
    },


];


export type Project = typeof projectData[number];