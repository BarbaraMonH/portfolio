import React from "react";

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white border-pink-600"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button 
            className={`${buttonStyles} rounded-full border-2 px-3 py-1 text-xs hover:border-white md:px-6 md:py-3 md:text-sm sm:px-4 sm:py-2 sm:text-sm cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag;