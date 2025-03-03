"use client"
import HeroVideo from "@/components/Hero";

const Page = () => {
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
