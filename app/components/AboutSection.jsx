"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills", 
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Unity</li>
                <li>Python</li>
                <li>C</li>
                <li>C#</li>
                <li>Matlab</li>
                <li>SQL</li>
                <li>Vicon</li>
                <li>Kinovea</li>
                <li>Autodesk Inventor</li>
                <li>Blender</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor's Degree in Biomedical Engineering</li>
                <li>Creation of Macros in Excel</li>
                <li>Mobile App Development Workshop for People with Disabilities</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Developer in Synlab</li>
                <li>Project Intern in Ontario Tech University</li>
                <li>Product Development Engineer for Kimberly Clark México</li>
                <li>Social Service in Ibero CDMX</li>
                <li>IT Assistant for Universidad Nacional Autónoma de México</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:py-16 xl:px-16">
                <Image src = "/images/About.png"
                    alt='About me image'  
                    width={500} 
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold  text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg "> I'm a Biomedical Engineer with a passion for Software Development to create
                        innovative solutions. I have experience developing projects with focus on
                        technology.
                    </p>
                    <div className="felx flex-row justify-start mt-8">
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                        > 
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                        > 
                            {" "}
                            Eduacation{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}
                        > 
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;