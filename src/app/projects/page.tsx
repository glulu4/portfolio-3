"use client";
import React, {useEffect, useState} from "react";
import ProjectHero from "@/components/ProjectHero";
import WorkRow from "@/components/WorkRow";
import {Category, ProjectData} from "../../../public/projects";
import clsx from "clsx";
import Links from "@/components/Links";
import {Loader2} from "lucide-react";
import {useProjects} from "../../hooks/useProjects";
import {PillButton} from "@/components/PillButton";


const Page = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const [width, setWidth] = useState(0);



    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth * 0.8);
        };

        handleResize(); // Set initial width
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }
    , []);

    const {
        selectedProject,
        isTransitioning,
        selectedCategories,
        handleProjectClick,
        handleBackClick,
        handleCategoriesChange,
        filteredProjects,
    } = useProjects();

    function renderProjectDetails(project: ProjectData) {
        if (!project)
            return;

        return (
            <div className="transition-opacity duration-500 opacity-100">
                <button onClick={handleBackClick} className="text-hoverColor text-sm sm:text-xl hover:text-hoverColor mb-4 ">
                    ← Back
                </button>
                <h1 className="text-4xl w-full sm:text-7xl font-bold text-whitesmoke">{project.title}</h1>

                <div className="mt-10 sm:w-5/6">
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

    const filterOptions: Category[] = Object.values(Category).map((category) => category);



    return (
        <div className="relative">
            <ProjectHero
                onVideoReady={() => setVideoLoaded(true)}
                video="/videos/tennis.mp4"
                header={
                    !selectedProject ? (
                        <div
                            className={`flex flex-col w-full items-start space-y-4 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                            <h1 className="text-6xl sm:text-8xl font-bold text-textSec">
                                Work
                            </h1>
                            <Links />
                        </div>
                    ) : (
                        <></>
                    )
                }>
                {!videoLoaded ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-16 w-16 animate-spin text-white" />
                    </div>
                ) :
                    (
                        <div
                            style={{width: width}}
                        >
                            {!selectedProject && <PillButton
                                className={`relative transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                                filterOptions={filterOptions}
                                onCategoriesChange={handleCategoriesChange}
                            />}
                            <div
                            
                                className={
                                    clsx(`flex flex-col space-y-8 sm:max-w-7xl mx-auto h-[70vh] py-4 relative transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`,
                                        "overflow-scroll overflow-x-visible"
                                    )}
                            >
                                {!selectedProject ? (
                                    // Project List View
                                    filteredProjects.map((item, index) => (
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
                        </div>
                    )}
            </ProjectHero>
        </div>
    );
};

export default Page;