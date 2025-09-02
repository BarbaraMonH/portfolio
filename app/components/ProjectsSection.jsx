"use client";   
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
    {
        id: 1,
        title: "Fusibles",
        description: "Mixed Reality project focused on the integration of tangible and virtual objects.",
        image: "/images/Projects/1.png",
        tag: ["All", "Mixed and Virtual Reality"],
        previewUrl: "/",
        centerImage: true,
        inProgress: true
    },
    {
        id: 2,
        title: "Development and Evaluation of an Integrated Tangible, Augmented, and Virtual Reality System for Professional Medical Training",
        description: "Mixed reality system for medical training, integrating an embedded hardware platform into 3D-printed heart models and incorporating hand tracking through Quest cameras.",
        image: "/images/Projects/2.png",
        tag: ["All", "Mixed and Virtual Reality"],
        previewUrl: "/files/Research_poster.pdf",
        centerImage: false,
        inProgress: false
    },
    {
        id: 3,
        title: "Virtual reality-based system for training in the use of transhumeral prostheses",
        description: "System for training in the use of a transhumeral mechanical prosthesis through a virtual reality environment, enabling users to learn the necessary movements for the activation of their prosthesis prior to receiving it, with the aim of facilitating its functional integration and reducing the abandonment rate.",
        image: "/images/Projects/3.png",
        tag: ["All", "Mixed and Virtual Reality"],
        previewUrl: "/files/Cartel_protesis.pdf",
        centerImage: false,
        inProgress: false
    },
    {
        id: 4,
        title: "Development of soft robots for embodied education of proprioception in early childhood",
        description: "Development of soft robotic technologies to support proprioception in infants.",
        image: "/images/Projects/4.png",
        tag: ["All", "Machine Learning"],
        previewUrl: "/",
        centerImage: true,
        inProgress: true
    },
    {
        id: 5,
        title: "Breast abnormality classifier based on mammograms",
        description: "An algorithm was designed to distinguish between benign and malignant abnormalities in 100 mammograms, achieving an accuracy of 0.72 through machine learning with neural networks.",
        image: "/images/Projects/5.png",
        tag: ["All", "Machine Learning"],
        previewUrl: "/files/Cartel_mam.pdf",
        centerImage: false,
        inProgress: false
    },
    {
        id: 6,
        title: "App SoyBienestar",
        description: "Technological support tool to address the various emotional states and the challenges that were exacerbated during the pandemic, affecting individuals' mental health and well-being.",
        image: "/images/Projects/6.png",
        tag: ["All", "App Development"],
        previewUrl: "https://play.google.com/store/apps/details?id=com.ibero.soybienestar&hl=es",
        centerImage: true,
        inProgress: false
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
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12">
                Projects
            </h2>
            <p className="text-center text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Throughout my undergraduate studies and continuing afterwards, I have been involved in research teams working on the following projects.
            </p>
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
                centerImage={project.centerImage}
                inProgress={project.inProgress}
            />
        ))}</div>
        </section>
    )
}

export default ProjectsSection;