import profile from "./assets/mcicon.jpg"
import profileHover from "./assets/mcicon2.png"
import profileClicked from "./assets/mcicon3.png"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapPin, Locate } from 'lucide-react';
import React, { useState } from "react";
 import { FaRegComment } from 'react-icons/fa';
 import { ChevronRight } from 'lucide-react';
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
            <div className=" pt-[24px] items-center justify-center flex flex-row gap-4 p4">

                <div
                    className="relative w-[150px] h-[150px] rounded-[16px] overflow-hidden group"
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


                <div className="mx-[10px] my-[15px] flex flex-col gap-[`px]">

                    <div className="flex flex-row relative items-center">
                        <h1 className="text-[24px]">MC Ganir</h1>
                        <FontAwesomeIcon icon={faCheckCircle} color="blue"
                            className="ml-[5px]" />
                    </div>


                    <div className="mt-[px] flex flex-row items-center">
                        <MapPin color="black" size={14} style={{ marginRight: '4px' }} /> {/* */}
                        <h3 className="text-[16px]">Metro Manila, Philippines</h3>
                    </div>
                    <h2 className=" mt-[10px] text-[20px] ">Information Technology/ Multimedia </h2>

                    <div className="mt-[15px] flex flex-row gap-[10px]">

                        <button className="button bg-black px-[16px] py-[8px] 
                        text-white text-[14px] !border-none hover:-translate-y-0.5">
                            <div className="flex gap-[7px] items-center">
                              <FaRegComment size={18}  color="white" />
                         Message Now
                         <ChevronRight size={18} color="white" />
                        </div>
                        </button>
                        <button className="button px-[16px] hover:-translate-y-0.5">
                            <div className="flex items-center gap-[10px]">  
                         <FaEnvelope size="16px" color="black" /> 
                            Send Email
                             </div>
                           </button>
                        <button className="button px-[16px] hover:-translate-y-0.5"> My Resume</button>
                        <button className="button  px-[16px] hover:-translate-y-0.5"> Portfolio</button>
                    </div>
                </div>
            </div>
        </header>

    );
}
export default Header;