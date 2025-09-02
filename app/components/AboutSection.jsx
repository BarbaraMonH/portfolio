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
                <li>C#</li>
                <li>JavaScript</li>
                <li>C</li>
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
                <li>Workshop: Determinant Criteria in the Innovation Process – 43rd National Congress of Biomedical Engineering (2020)</li>
                <li>Creation of Macros in Excel - Ibero-American University Mexico City</li>
                <li>Mobile App Development Workshop for People with Disabilities - Cultural Center of Spain in México</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Developer at Synlab</li>
                <li>Software and Hardware Developer at Center for Rehabilitation Engineering and Technology (Ibero CDMX)</li>
                <li>Project Intern in Ontario Tech University</li>
                <li>Product Development Engineer for Kimberly Clark México</li>
                <li>Social Service at Center for Rehabilitation Engineering and Technology (Ibero CDMX)</li>
                <li>App Developer in colaboration with the psychology department at Ibero CDMX</li>
                <li>IT Assistant at Universidad Nacional Autónoma de México (UNAM)</li>
                <li>Wearable Projects Developer in colaboration with fashion design students at Ibero CDMX</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("education");
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
                    <p className="text-base lg:text-lg "> Biomedical engineer specializing in instrumentation and mixed reality, with experience developing interdisciplinary projects that integrate hardware, software, and 3D technologies. Skilled in research-oriented
                        problem solving, teamwork, and leadership, with a strong focus on applying innovative engineering solutions to healthcare and human-centred challenges.
                    </p>
                    <div className="felx flex-row justify-start mt-8">
                        <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                        > 
                            {" "}
                            Eduacation{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                        > 
                            {" "}
                            Skills{" "}
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