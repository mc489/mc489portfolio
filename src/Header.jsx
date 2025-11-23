import profile from "./assets/mcicon.jpg"
import profileHover from "./assets/mcicon2.png"
import profileClicked from "./assets/mcicon3.png"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapPin, Locate } from 'lucide-react';
import React, { useState } from "react";
 import { FaRegComment } from 'react-icons/fa';
 import { ChevronRight } from 'lucide-react';
import { MdDownload } from 'react-icons/md';
    import { FaEnvelope } from 'react-icons/fa';
function Header() {

    // State to track if the image has been clicked
    const [clicked, setClicked] = useState(false);
    // State to track if the cursor is currently over the element
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Condition: If it was clicked AND the cursor leaves, reset the clicked state
        if (clicked) {
            setClicked(false);
        }
    };

    return (


        <header>
            <div className=" max-[500px]:bg-blue-500 max-[500px]:p-[30px] max-[500px]:gap-1 pt-[24px] items-center justify-center flex flex-row gap-4 p4">

                <div
                    className="relative w-[150px] max-[500px]:w-[100px] aspect-square rounded-[16px] overflow-hidden group flex-shrink-0"

                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Default Image: Visible when not clicked AND not hovered */}
                    <img
                        src={profile}
                        alt="profile"
                        className={`absolute inset-0 w-full h-full object-cover rounded-[16px] transition-opacity duration-300
                    ${clicked || isHovered ? "opacity-0" : "opacity-100"}
                `}
                    />

                    {/* Hover Image: Visible when hovered (and not clicked) */}
                    <img
                        src={profileHover}
                        alt="profile hover"
                        className={`absolute inset-0 w-full h-full object-cover rounded-[16px] transition-opacity duration-300
                    ${isHovered && !clicked ? "opacity-100" : "opacity-0"}
                `}
                    />

                    {/* Clicked Image: Visible only when 'clicked' is true */}
                    <img
                        src={profileClicked}
                        alt="profile clicked"
                        onClick={handleClick}
                        className={`absolute inset-0 w-full h-full object-cover rounded-[16px] transition-opacity duration-300 cursor-pointer
                    ${clicked ? "opacity-100" : "opacity-0"}
                `}
                    />
                </div>


                <div className=" mx-[10px] my-[15px] flex flex-col gap-[`px]">

                    <div className="flex flex-row relative items-center justify-between">
                       
                       <div className="flex items-center">
                        <h1 className="text-[24px] max-[500px]:text-[18px]">MC Ganir</h1>
                        <FontAwesomeIcon icon={faCheckCircle} color="blue"
                            className="ml-[5px] max-[500px]:w-[12px] " />
                            </div>
                           <button >
                            <div className="flex items-center group gap-1">
                                <span className="text-[14px] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 duration-200">Download My Resume</span>
                              <MdDownload style={{ marginRight: '8px' }}  /> 
                              </div>
                              </button>
                    </div>


                    <div className="mt-[2px] flex flex-row items-center">
                        <MapPin color="black" size={14} style={{ marginRight: '4px' }} className="max-[500px]:w-[10px]" /> {/* */}
                        <h3 className="text-[16px] max-[500px]:text-[12px]">Metro Manila, Philippines</h3>
                    </div>
                    <h2 className=" mt-[10px] text-[20px] max-[500px]:text-[14px]">Information Technology/ Multimedia </h2>

                    <div className="mt-[15px] flex flex-row gap-[10px]">

                       <button className="max-[500px]:text-[10px] max-[500px]:px-[8px] 
                        button bg-black px-[16px] py-[8px] 
                        text-white text-[14px] !border-none hover:-translate-y-0.5 whitespace-nowrap">
                            
                            <div className="flex gap-[7px] items-center">
                              <FaRegComment size={18}  color="white" className="max-[500px]:w-[12px]"/>
                         Message Now
                         <ChevronRight size={18} color="white" className="max-[500px]:w-[12px]" />
                        </div>
                        </button>

                        <button className="button max-[500px]:text-[10px] max-[500px]:px-[8px]  px-[16px] hover:-translate-y-0.5  whitespace-nowrap">
                            <div className="flex items-center gap-[10px]">  
                         <FaEnvelope size="16px" color="black" /> 
                            Send Email
                             </div>
                           </button>
                    
                        <button className="max-[500px]:text-[10px] max-[500px]:px-[8px] button  px-[16px] hover:-translate-y-0.5"> Portfolio</button>
                    </div>
                </div>
            </div>
        </header>

    );
}
export default Header;