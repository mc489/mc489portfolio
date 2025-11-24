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
import { useMediaQuery } from 'react-responsive'
import { FaBriefcase } from 'react-icons/fa'; // Example: using a briefcase icon from Font Awesome

function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  1023px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
    


            {isDesktopOrLaptop &&
                <div className=" pt-[24px] items-center justify-center flex flex-row gap-4   ">

                    <div
                        className="relative w-[150px]  aspect-square rounded-[16px] overflow-hidden group flex-shrink-0"

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
                                    <MdDownload style={{ marginRight: '8px' }} />
                                </div>
                            </button>
                        </div>


                        <div className="mt-[2px] flex flex-row items-center">
                            <MapPin color="black" size={14} style={{ marginRight: '4px' }} /> {/* */}
                            <h3 className="text-[16px] max-[500px]:text-[12px]">Metro Manila, Philippines</h3>
                        </div>
                        <h2 className=" mt-[10px] text-[20px] ">Information Technology/ Multimedia </h2>

                        <div className="mt-[15px] flex flex-row gap-[10px]">

                            <button className="
                        button bg-black px-[16px] py-[8px] 
                        text-white text-[14px] !border-none hover:-translate-y-0.5 whitespace-nowrap">

                                <div className="flex gap-[8px] items-center">
                                    <FaRegComment size={18} color="white" />
                                    Message Now
                                    <ChevronRight size={18} color="white" />
                                </div>
                            </button>

                            <button className=" button px-[16px] hover:-translate-y-0.5  whitespace-nowrap">
                                <div className="flex items-center gap-[8px]">
                                    <FaEnvelope size="16px" color="black" />
                                    Send Email
                                </div>
                            </button>

                            <button className=" button  px-[16px] hover:-translate-y-0.5"> 
                                <div className="flex items-center gap-[8px]">
                                
                                   <FaBriefcase  size="16px" />
                                Portfolio
                                </div>
                                </button>
                        </div>
                    </div>
                </div>
            }

            {isTabletOrMobile &&

                <div className=" pt-[24px] pb-[6px] items-center justify-center flex flex-row gap-2 overflow-hidden ">
                    
                    <div
                        className="relative items-center justify- w-[100px] flex flex-row aspect-square rounded-[16px] overflow-hidden group flex-shrink-0"

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



                    <div className=" my-[15px] flex flex-col  ">

                        <div className="flex flex-row relative items-center justify-between ">

                            <div className="flex items-center ">
                                <h1 className="text-[16px]">MC Ganir</h1>
                                <FontAwesomeIcon icon={faCheckCircle} color="blue"
                                    className="ml-[5px] w-[12px] " />
                            </div>
                            <button >
                       
                        <div className="flex items-center group gap-1 ">
                            <span className="text-[10px] opacity-0 group-hover:opacity-100 
                            translate-x-2 group-hover:translate-x-0 duration-200">Download My Resume</span>
                            <MdDownload size= {12}  />
                        </div>
                    </button>

                        </div>


                        <div className=" m-0 flex flex-row items-center">
                            <MapPin color="black" size={8} style={{ marginRight: '2px' }} /> {/* */}
                            <h3 className="text-[10px] ">Metro Manila, Philippines</h3>
                        </div>
                        <h2 className=" mt-[8px] text-[8px] justify-center ">Information Technology/ Multimedia </h2>

                        <div className="mt-[8px] flex flex-row gap-[6px]">

                            <button className="
                        button bg-black px-[8px] py-[4px] 
                        text-white text-[10px] !border-none hover:-translate-y-0.5 whitespace-nowrap">

                                <div className="flex gap-[5px] items-center">
                                    <FaRegComment size={10} color="white" />
                                    Message
                                    <ChevronRight size={10} color="white" />
                                </div>
                            </button>

                            <button className=" text-[10px] button px-[8px] hover:-translate-y-0.5  whitespace-nowrap">
                                <div className="flex items-center gap-[5px]">
                                    <FaEnvelope size={10} color="black" />
                                    Email 
                                </div>
                            </button>

                            <button className=" button text-[10px] px-[8px] hover:-translate-y-0.5">
                                
                                <div className="flex items-center gap-[5px]">
                                
                                   <FaBriefcase  size={10} />
                                Portfolio
                                </div>
                                
                               </button>
                        </div>
                    </div>
                </div>


            }
        </header>

    );
}

export default Header;