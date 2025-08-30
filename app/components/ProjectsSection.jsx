"use client";   
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
    {
        id: 1,
        title: "Fusibles",
        description: "Project 1 description",
        image: "/images/Projects/1.png",
        tag: ["All", "Machine Learning"],
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Development and Evaluation of an Integrated Tangible, Augmented, and Virtual Reality System for Professional Medical Training",
        description: "Project 2 description",
        image: "/images/Projects/2.png",
        tag: ["All", "Mixed and Virtual Reality"],
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Virtual reality-based system for training in the use of transhumeral prostheses",
        description: "Project 3 description",
        image: "/images/Projects/3.png",
        tag: ["All", "App Development"],
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Development of soft robots for embodied education of proprioception in early childhood",
        description: "Project 3 description",
        image: "/images/Projects/1.png",
        tag: ["All", "App Development"],
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Breast abnormality classifier based on mammograms",
        description: "Project 4 description",
        image: "/images/Projects/1.png",
        tag: ["All", "Machine Learning"],
        previewUrl: "/"
    },
    {
        id: 6,
        title: "App SoyBienestar",
        description: "Project 6 description",
        image: "/images/Projects/6.png",
        tag: ["All", "Machine Learning"],
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = ProjectData.filter((project) =>
        project.tag.includes(tag)   
    );

    return (
        <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Machine Learning" 
                isSelected={tag === "Machine Learning"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mixed and Virtual Reality" 
                isSelected={tag === "Mixed and Virtual Reality"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="App Development" 
                isSelected={tag === "App Development"} 
            />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
            <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags = {project}
                previewUrl={project.previewUrl}
            />
        ))}</div>
        </>
    )
}

export default ProjectsSection