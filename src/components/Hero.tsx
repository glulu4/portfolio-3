import React, {useRef} from "react";
import Links from "./Links";

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
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-left justify-center bg-black bg-opacity-50 text-textSec shadow-inner text-center px-6">
                <div className="absolute bottom-6 left-4 flex flex-col items-start px-6 md:px-16 space-y-5 md:space-y-8 sm:mb-5">
                    <h1 className="text-6xl md:text-8xl font-bold text-left">
                        Gabby&nbsp;
                        <br className="block md:hidden ml-2" />
                        Lulu
                        <span className="text-lg text-hoverColor">
                            &copy;
                        </span>
                    </h1>

                    <Links />


                </div>
            </div>
        </div>
    );
};

export default HeroVideo;