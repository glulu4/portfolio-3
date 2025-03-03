// import React, {useState, useEffect, useRef} from "react";



// interface HeroVideoProps {
//     text?: string
//     secText?: string;
//     videos: string[]
// }
// const HeroVideo = ({text, secText, videos}: HeroVideoProps) => {

//     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//     const videoRef = useRef<HTMLVideoElement | null>(null);

//     useEffect(() => {
//         const handleVideoEnd = () => {
//             setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
//         };
//         const videoElement = videoRef.current;
//         if (videoElement) {
//             videoElement.addEventListener("ended", handleVideoEnd);
//         }
//         return () => {
//             if (videoElement) {
//                 videoElement.removeEventListener("ended", handleVideoEnd);
//             }
//         };
//     }, [videos.length]);

//     return (
//         <div className="relative h-screen w-full overflow-hidden z-0">
//             {/* Video Player */}
//             <video
//                 key={videos[currentVideoIndex]}
//                 ref={videoRef}
//                 className="absolute top-0 left-0 h-full w-full object-cover"
//                 src={videos[currentVideoIndex]}
//                 autoPlay
//                 muted
//                 playsInline
//             ></video>
//             {/* Overlay Content */}
//             <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-left justify-center bg-black bg-opacity-50 text-white text-center px-6">

//                 <div className="absolute bottom-4 left-4 flex flex-col items-center px-6 md:px-16">
//                     <h1 className=" text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
//                         {text ? text : 'Expert Roofing Solutions'}
//                     </h1>
//                     <p className="font-secondary text-xl  mb-6">
//                         {secText ? secText : 'Reliable, Affordable, and Built to Last'}
//                     </p>
//                 </div>



//             </div>
//         </div>
//     );
// };

// export default HeroVideo;


import React, {useRef} from "react";

interface HeroVideoProps {
    text?: string;
    secText?: string;
    video: string; // Changed from videos array to single video
}

const HeroVideo = ({text, secText, video}: HeroVideoProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // No useEffect needed for simple looping
    return (
        <div className="relative h-screen w-full overflow-hidden z-0">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={video}
                autoPlay
                muted
                playsInline
                loop // Added loop attribute
            ></video>
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-left justify-center bg-black bg-opacity-50 text-titleColor shadow-inner text-center px-6">
                <div className="absolute bottom-6 left-4 flex flex-col items-start px-6 md:px-16 ">
                    <h1 className="text-8xl font-bold">
                        {text ? text : 'Expert Roofing Solutions'}
                        <span className="text-lg text-hoverColor">
                            &copy;
                        </span>
                    </h1>

                    <div className="pl-2 flex flex-row items-center gap-6 text-linkColors text-lg">

                        <a href="/projects" className="hover:text-hoverColor">
                            Projects
                        </a>
                        <a href="/about" className="hover:text-hoverColor">
                            About
                        </a>
                        <a href="/contact" className="hover:text-hoverColor">
                            Contact 
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroVideo;