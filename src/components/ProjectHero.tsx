// import React, {useRef} from "react";

// interface ProjectHeroProps {
//     video: string; // Changed from videos array to single video
//     children: React.ReactNode;
// }

// const ProjectHero = ({video, children}: ProjectHeroProps) => {
//     const videoRef = useRef<HTMLVideoElement | null>(null);

//     // No useEffect needed for simple looping
//     return (
//         <div className="relative h-screen w-full overflow-hidden z-0">
//             <video
//                 ref={videoRef}
//                 className="absolute top-0 left-0 h-full w-full object-cover"
//                 src={video}
//                 autoPlay
//                 muted
//                 playsInline
//                 loop // Added loop attribute
//             ></video>
//             <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-left justify-center bg-black bg-opacity-50 text-titleColor shadow-inner text-center px-6">


//                 {children}
//             </div>
//         </div>
//     );
// };

// export default ProjectHero;


import React, {useRef} from "react";

interface ProjectHeroProps {
    video: string;
    header: React.ReactNode; // Header content (title, etc.)
    children: React.ReactNode; // Main content (work rows)
}

const ProjectHero = ({video, header, children}: ProjectHeroProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <div className="relative h-screen w-full overflow-hidden z-0">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={video}
                autoPlay
                muted
                playsInline
                loop
            />
            {/* Overlay container with a semi-transparent background */}
            <div className="relative z-10 flex flex-col h-full w-full bg-black bg-opacity-50 px-6">
                {/* Header Section */}
                <div className=" pl-3 pt-5 sm:pl-10 sm:pt-10">
                    {header}
                </div>
                {/* Main Content Centered */}
                <div className="flex-grow flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProjectHero;
