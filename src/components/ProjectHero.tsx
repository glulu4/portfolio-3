import React, {useRef} from "react";

interface ProjectHeroProps {
    video: string;
    header: React.ReactNode; // Header content (title, etc.)
    children: React.ReactNode; // Main content (work rows)
}

const ProjectHero = ({video, header, children}: ProjectHeroProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <div className="relative h-screen w-full z-0">
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
                <div className=" pl-3 pt-5 sm:pl-10 sm:pt-10">
                    {header}
                </div>
                <div className="flex-grow flex items-center justify-center overflow-visible">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProjectHero;
