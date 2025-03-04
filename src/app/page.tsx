"use client"
import HeroVideo from "@/components/Hero";
import Links from "@/components/Links";
import {useEffect} from "react";

const Page = () => {

  useEffect(() => {
    // Check if the window object is available (client-side)
    if (typeof window !== "undefined") {
      // Detect mobile device (simple screen width check, adjust threshold as needed)
      const isMobile = window.innerWidth <= 768; // Common mobile breakpoint

      if (isMobile) {
        // Scroll to the bottom after a short delay to ensure rendering
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth", // Optional: Adds smooth scrolling
          });
        }, 100); // Delay to ensure DOM is fully rendered
      }
    }
  }, []); // Empty dependency array ensures it runs once on mount
  return (
    <div className=" ">
      <div>
    

        <HeroVideo
          video={"/videos/sidewalk.mp4"}
          text="Gabby Lulu"
          secText="Software Engineer"
        />
      </div>

    </div>
  );
};

export default Page;
