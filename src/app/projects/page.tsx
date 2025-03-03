
// "use client";
// import React, {useEffect, useRef} from "react";
// import ProjectHero from "@/components/ProjectHero";
// import WorkRow from "@/components/WorkRow";

// const Page = () => {

//     return (
//         <div>
//             <ProjectHero
//                 video="/videos/tennis.mp4"
//                 header={
//                     <div className="flex flex-col items-start space-y-4 ">
//                         <h1 className="text-6xl sm:text-8xl font-bold text-textSec">
//                             Work
//                         </h1>
//                         <div className="pl-2 flex flex-row items-center gap-6 text-textSec text-lg">
//                             <a href="/" className="hover:text-hoverColor">
//                                 Home
//                             </a>
//                             <a href="/about" className="hover:text-hoverColor">
//                                 About
//                             </a>
//                             <a href="/contact" className="hover:text-hoverColor">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>
//                 }
//             >
//                 <div
//                     className="flex flex-col space-y-4 w-full max-w-4xl mx-auto overflow-y-auto h-[70vh] py-4"
//                     style={{
//                         WebkitMaskImage:
//                             "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
//                         maskImage:
//                             "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
//                     }}
//                 >
//                     <WorkRow
//                         title="Talenthub"
//                         skills="UI / UX / Design System"
//                         category="Mobile app"
//                         link="https://example.com/talenthub"
//                     />
//                     <WorkRow
//                         title="Nolito"
//                         skills="UI / UX / Design System / Development"
//                         category="Dashboard"
//                         link="https://example.com/nolito"
//                     />
//                     <WorkRow
//                         title="Synapse"
//                         skills="UI / Design System / Motion Design / Development"
//                         category="Website"
//                         link="https://example.com/synapse"
//                     />
//                     <WorkRow
//                         title="Talenthub"
//                         skills="UI / UX / Design System"
//                         category="Mobile app"
//                         link="https://example.com/talenthub"
//                     />
//                     <WorkRow
//                         title="Nolito"
//                         skills="UI / UX / Design System / Development"
//                         category="Dashboard"
//                         link="https://example.com/nolito"
//                     />
//                     <WorkRow
//                         title="Synapse"
//                         skills="UI / Design System / Motion Design / Development"
//                         category="Website"
//                         link="https://example.com/synapse"
//                     />
//                     <WorkRow
//                         title="Talenthub"
//                         skills="UI / UX / Design System"
//                         category="Mobile app"
//                         link="https://example.com/talenthub"
//                     />
//                     <WorkRow
//                         title="Nolito"
//                         skills="UI / UX / Design System / Development"
//                         category="Dashboard"
//                         link="https://example.com/nolito"
//                     />
//                     <WorkRow
//                         title="Synapse"
//                         skills="UI / Design System / Motion Design / Development"
//                         category="Website"
//                         link="https://example.com/synapse"
//                     />
//                     <WorkRow
//                         title="Synergies"
//                         skills="UI / Branding / Photography / Design System"
//                         category="Website"
//                         link="https://example.com/synergies"
//                     />
//                     <WorkRow
//                         title="Voltrive"
//                         skills="UI / Visual / Branding / Design System"
//                         category="Website"
//                         link="https://example.com/voltrive"
//                     />
//                 </div>
//             </ProjectHero>
//         </div>
//     );
// };

// export default Page;



// "use client";
// import React, {useEffect, useRef, useState} from "react";
// import ProjectHero from "@/components/ProjectHero";
// import WorkRow from "@/components/WorkRow";

// const Page = () => {
//     const scrollContainerRef = useRef(null);
//     const [visibleItems, setVisibleItems] = useState([]);
//     const itemRefs = useRef([]);

//     // Sample data for work items
//     const workItems = [
//         {
//             title: "Talenthub",
//             skills: "UI / UX / Design System",
//             category: "Mobile app",
//             link: "https://example.com/talenthub"
//         },
//         {
//             title: "Nolito",
//             skills: "UI / UX / Design System / Development",
//             category: "Dashboard",
//             link: "https://example.com/nolito"
//         },
//         {
//             title: "Synapse",
//             skills: "UI / Design System / Motion Design / Development",
//             category: "Website",
//             link: "https://example.com/synapse"
//         },
//         {
//             title: "Talenthub",
//             skills: "UI / UX / Design System",
//             category: "Mobile app",
//             link: "https://example.com/talenthub"
//         },
//         {
//             title: "Nolito",
//             skills: "UI / UX / Design System / Development",
//             category: "Dashboard",
//             link: "https://example.com/nolito"
//         },
//         {
//             title: "Synapse",
//             skills: "UI / Design System / Motion Design / Development",
//             category: "Website",
//             link: "https://example.com/synapse"
//         },
//         {
//             title: "Talenthub",
//             skills: "UI / UX / Design System",
//             category: "Mobile app",
//             link: "https://example.com/talenthub"
//         },
//         {
//             title: "Nolito",
//             skills: "UI / UX / Design System / Development",
//             category: "Dashboard",
//             link: "https://example.com/nolito"
//         },
//         {
//             title: "Synapse",
//             skills: "UI / Design System / Motion Design / Development",
//             category: "Website",
//             link: "https://example.com/synapse"
//         },
//         {
//             title: "Synergies",
//             skills: "UI / Branding / Photography / Design System",
//             category: "Website",
//             link: "https://example.com/synergies"
//         },
//         {
//             title: "Voltrive",
//             skills: "UI / Visual / Branding / Design System",
//             category: "Website",
//             link: "https://example.com/voltrive"
//         }
//     ];

//     useEffect(() => {
//         // Initialize item refs array
//         itemRefs.current = workItems.map((_, i) => itemRefs.current[i] || React.createRef());

//         // Initialize all items as not visible
//         setVisibleItems(workItems.map(() => false));

//         const handleScroll = () => {
//             if (!scrollContainerRef.current) return;

//             const container = scrollContainerRef.current;
//             const containerRect = container.getBoundingClientRect();
//             const containerCenter = containerRect.top + containerRect.height / 2;

//             // Calculate new visibility based on position
//             const newVisibility = itemRefs.current.map((ref, index) => {
//                 if (!ref.current) return false;

//                 const itemRect = ref.current.getBoundingClientRect();
//                 const itemCenter = itemRect.top + itemRect.height / 2;

//                 // Calculate distance from center (normalized to 0-1 range)
//                 const distanceFromCenter = Math.abs(itemCenter - containerCenter) / (containerRect.height / 2);
//                 const isVisible = distanceFromCenter < 0.5; // Items close to center are considered visible

//                 // Update the transform for rolodex effect
//                 if (ref.current) {
//                     // Calculate rotation based on position
//                     const rotationFactor = (itemCenter - containerCenter) / 20;
//                     const scaleFactor = 1 - Math.abs(distanceFromCenter) * 0.2;
//                     const translateZ = -Math.abs(distanceFromCenter) * 30;

//                     ref.current.style.transform = `
//                         perspective(1000px) 
//                         rotateX(${rotationFactor}deg)
//                         scale(${scaleFactor})
//                         translateZ(${translateZ}px)
//                     `;

//                     // Adjust opacity based on distance from center
//                     ref.current.style.opacity = 1 - Math.abs(distanceFromCenter) * 0.8;
//                 }

//                 return isVisible;
//             });

//             setVisibleItems(newVisibility);
//         };

//         const container = scrollContainerRef.current;
//         if (container) {
//             container.addEventListener('scroll', handleScroll);
//             // Initial check
//             handleScroll();
//         }

//         return () => {
//             if (container) {
//                 container.removeEventListener('scroll', handleScroll);
//             }
//         };
//     }, [workItems.length]);

//     return (
//         <div>
//             <ProjectHero
//                 video="/videos/tennis.mp4"
//                 header={
//                     <div className="flex flex-col items-start space-y-4 ">
//                         <h1 className="text-6xl sm:text-8xl font-bold text-textSec">
//                             Work
//                         </h1>
//                         <div className="pl-2 flex flex-row items-center gap-6 text-textSec text-lg">
//                             <a href="/" className="hover:text-hoverColor">
//                                 Home
//                             </a>
//                             <a href="/about" className="hover:text-hoverColor">
//                                 About
//                             </a>
//                             <a href="/contact" className="hover:text-hoverColor">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>
//                 }
//             >
//                 <div
//                     ref={scrollContainerRef}
//                     className="flex flex-col space-y-8 w-full max-w-4xl mx-auto overflow-y-auto h-[70vh] py-4 perspective"
//                     style={{
//                         WebkitMaskImage:
//                             "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
//                         maskImage:
//                             "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
//                         perspective: "1000px"
//                     }}
//                 >
//                     {workItems.map((item, index) => (
//                         <div
//                             key={index}
//                             ref={itemRefs.current[index]}
//                             className="transition-all duration-300 transform-gpu"
//                             style={{
//                                 transformOrigin: "center center",
//                                 transformStyle: "preserve-3d",
//                                 backfaceVisibility: "hidden"
//                             }}
//                         >
//                             <WorkRow
//                                 title={item.title}
//                                 skills={item.skills}
//                                 category={item.category}
//                                 link={item.link}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </ProjectHero>
//         </div>
//     );
// };

// export default Page;


"use client";
import React, {useEffect, useRef, useState} from "react";
import ProjectHero from "@/components/ProjectHero";
import WorkRow from "@/components/WorkRow";

const Page = () => {
    const scrollContainerRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);
    const rafRef = useRef(null);
    const lastScrollTop = useRef(0);

    // Sample data for work items
    const workItems = [
        {
            title: "Talenthub",
            skills: "UI / UX / Design System",
            category: "Mobile app",
            link: "https://example.com/talenthub"
        },
        {
            title: "Nolito",
            skills: "UI / UX / Design System / Development",
            category: "Dashboard",
            link: "https://example.com/nolito"
        },
        {
            title: "Synapse",
            skills: "UI / Design System / Motion Design / Development",
            category: "Website",
            link: "https://example.com/synapse"
        },
        {
            title: "Talenthub",
            skills: "UI / UX / Design System",
            category: "Mobile app",
            link: "https://example.com/talenthub"
        },
        {
            title: "Nolito",
            skills: "UI / UX / Design System / Development",
            category: "Dashboard",
            link: "https://example.com/nolito"
        },
        {
            title: "Synapse",
            skills: "UI / Design System / Motion Design / Development",
            category: "Website",
            link: "https://example.com/synapse"
        },
        {
            title: "Talenthub",
            skills: "UI / UX / Design System",
            category: "Mobile app",
            link: "https://example.com/talenthub"
        },
        {
            title: "Nolito",
            skills: "UI / UX / Design System / Development",
            category: "Dashboard",
            link: "https://example.com/nolito"
        },
        {
            title: "Synapse",
            skills: "UI / Design System / Motion Design / Development",
            category: "Website",
            link: "https://example.com/synapse"
        },
        {
            title: "Synergies",
            skills: "UI / Branding / Photography / Design System",
            category: "Website",
            link: "https://example.com/synergies"
        },
        {
            title: "Voltrive",
            skills: "UI / Visual / Branding / Design System",
            category: "Website",
            link: "https://example.com/voltrive"
        }
    ];

    useEffect(() => {
        // Initialize item refs array
        itemRefs.current = workItems.map((_, i) => itemRefs.current[i] || React.createRef());

        // Initialize all items as not visible
        setVisibleItems(workItems.map(() => false));

        const updateItemStyles = () => {
            if (!scrollContainerRef.current) return;

            const container = scrollContainerRef.current;
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.top + containerRect.height / 2;
            const containerHeight = containerRect.height;

            // Calculate new visibility based on position
            const newVisibility = itemRefs.current.map((ref, index) => {
                if (!ref.current) return false;

                const itemRect = ref.current.getBoundingClientRect();
                const itemCenter = itemRect.top + itemRect.height / 2;

                // Calculate distance from center (normalized to 0-1 range)
                const distanceFromCenter = Math.abs(itemCenter - containerCenter) / (containerHeight / 2);
                const isVisible = distanceFromCenter < 0.7; // Items close to center are considered visible

                // Update the transform for rolodex effect
                if (ref.current) {
                    // Calculate rotation based on position relative to center
                    const rotationFactor = (itemCenter - containerCenter) / 25;

                    // Use easing function for smoother scale and opacity transitions
                    const easeOutQuad = (t) => t * (2 - t);
                    const easedDistance = easeOutQuad(Math.min(1, distanceFromCenter));

                    const scaleFactor = 1 - easedDistance * 0.15;
                    const translateZ = -Math.abs(easedDistance) * 20;
                    const opacity = 1 - easedDistance * 0.7;

                    ref.current.style.transform = `
                        perspective(1000px) 
                        rotateX(${rotationFactor}deg)
                        scale(${scaleFactor})
                        translateZ(${translateZ}px)
                    `;

                    // Adjust opacity based on distance from center
                    ref.current.style.opacity = opacity;
                }

                return isVisible;
            });

            setVisibleItems(newVisibility);
        };

        const handleScroll = () => {
            // Cancel any pending animation frame
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            // Use requestAnimationFrame to optimize performance
            rafRef.current = requestAnimationFrame(updateItemStyles);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, {passive: true});
            // Initial check
            updateItemStyles();

            // Add wheel event to smooth the scroll
            container.addEventListener('wheel', (e) => {
                // Prevent default only if needed
                if (e.deltaY !== 0) {
                    e.preventDefault();

                    // Calculate smooth scroll amount
                    const scrollAmount = e.deltaY * 0.5;
                    container.scrollTop += scrollAmount;
                }
            }, {passive: false});
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
                container.removeEventListener('wheel', handleScroll);
            }
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [workItems.length]);

    return (
        <div>
            <ProjectHero
                video="/videos/tennis.mp4"
                header={
                    <div className="flex flex-col items-start space-y-4 ">
                        <h1 className="text-6xl sm:text-8xl font-bold text-textSec">
                            Work
                        </h1>
                        <div className="pl-2 flex flex-row items-center gap-6 text-textSec text-lg">
                            <a href="/" className="hover:text-hoverColor">
                                Home
                            </a>
                            <a href="/about" className="hover:text-hoverColor">
                                About
                            </a>
                            <a href="/contact" className="hover:text-hoverColor">
                                Contact
                            </a>
                        </div>
                    </div>
                }
            >
                <div
                    ref={scrollContainerRef}
                    className="flex flex-col space-y-8 w-full max-w-4xl mx-auto overflow-y-auto h-[70vh] py-4 will-change-scroll"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                        perspective: "1000px",
                        scrollbarWidth: "none",
                        paddingTop: "20vh",
                        paddingBottom: "20vh"
                    }}
                >
                    {workItems.map((item, index) => (
                        <div
                            key={index}
                            ref={itemRefs.current[index]}
                            className="transition-transform duration-300 will-change-transform"
                            style={{
                                transformOrigin: "center center",
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden"
                            }}
                        >
                            <WorkRow
                                title={item.title}
                                skills={item.skills}
                                category={item.category}
                                link={item.link}
                            />
                        </div>
                    ))}
                </div>
            </ProjectHero>
        </div>
    );
};

export default Page;