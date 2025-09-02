import React from "react";
import {EyeIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline"
import Link from "next/link";

const ProjectCard = ({
    imgUrl, 
    title, 
    description, 
    previewUrl, 
    centerImage,
    inProgress}) => {
    return (
        <div>
            <div 
                className="h-52 md:h-72 rounded-t-xl relative group" 
                style={{backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: centerImage ? "center" : "top"}}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500">
                    {inProgress ? (
                        <div className="bg-[#181818] text-white rounded-lg p-4 flex flex-col items-center gap-2">
                            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-400" />
                            <p className="text-sm font-semibold">Project in progress</p>
                        </div>
                    ) : (
                        <Link 
                        href={previewUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white "
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white">
                        </EyeIcon>
                    </Link>)}
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="front-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard