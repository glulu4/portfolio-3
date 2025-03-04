"use client";
import React, {useState} from "react";
import ProjectHero from "@/components/ProjectHero";
import WorkRow from "@/components/WorkRow";
import {ProjectData, projects} from "../../../public/projects";
import clsx from "clsx";
import Links from "@/components/Links";

const Page = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleProjectClick = (project: ProjectData) => {
        setIsTransitioning(true); // Start fade-out

        setTimeout(() => {
            setSelectedProject(project); // Switch to project details
            setIsTransitioning(false); // Fade-in project
        }, 500); // Match transition duration
    };

    const handleBackClick = () => {
        setIsTransitioning(true); // Start fade-out
        setTimeout(() => {
            setSelectedProject(null); // Show project list again
            setIsTransitioning(false); // Fade-in list
        }, 500);
    };

    function renderProjectDetails(project: ProjectData) {
        
        if (!project) 
            return;
        return (
            <div className="transition-opacity duration-500 opacity-100">
                <button onClick={handleBackClick} className="text-hoverColor text-sm sm:text-xl hover:text-hoverColor mb-4 ">
                    ← Back
                </button>
                <h1 className="text-6xl sm:text-7xl font-bold text-whitesmoke">{project.title}</h1>


                <div className="mt-10 w-5/6">
                    <p className="text-lg sm:text-xl font-medium sm:leading-10 text-whitesmoke">{project.description}</p>
                </div>


                {project.link && (
                    <div className="mt-5">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-lg sm:text-xl font-medium text-hoverColor hover:text-hoverColor "
                        >
                            View Project
                        </a>
                    </div>
 
                )}
            </div>
        )
    }

    return (
        <div>
            
            <ProjectHero video="/videos/tennis.mp4" header={
                !selectedProject ? (
                    <div
                        className={`flex flex-col items-start space-y-4 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                        <h1 className="text-6xl sm:text-8xl font-bold text-textSec">
                            Work
                        </h1>
                    <Links/>
                    </div>
                ) : (   
                    <></>
                )

            }>
                <div
                    className={
                        clsx(`flex flex-col space-y-8 w-full max-w-5xl mx-auto h-[70vh] py-4 relative transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`,
                            "overflow-scroll overflow-x-visible"
                        )}
                >
                    {!selectedProject ? (
                        // Project List View
                        projects.map((item, index) => (
                            <div key={index} onClick={() => handleProjectClick(item)}>
                                <WorkRow
                                    title={item.title}
                                    skills={item.skills}
                                    category={item.category}
                                />
                            </div>
                        ))
                    ) : (
                        // Project Details View
                renderProjectDetails(selectedProject)
                    )}
                </div>
            </ProjectHero>
        </div>
    );
};

export default Page;
