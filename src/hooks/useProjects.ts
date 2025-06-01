import {useState} from "react";
import {Category, ProjectData, projects} from "../../public/projects";

export const useProjects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

    // This function will be called by PillButton when categories are toggled
    const handleCategoriesChange = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    const filteredProjects = selectedCategories.length > 0
        ? projects.filter(project => selectedCategories.includes(project.category))
        : projects;

    return {
        // State
        selectedProject,
        isTransitioning,
        selectedCategories,

        // Actions
        handleProjectClick,
        handleBackClick,
        handleCategoriesChange,

        // Computed values
        filteredProjects,
    };
};