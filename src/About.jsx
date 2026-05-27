import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoMdInformationCircleOutline } from "react-icons/io";

function About() {
    // State to manage whether the full text is shown on mobile/tablet
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);

    // Toggle function for the mobile button
    const toggleMobileExpansion = () => {
        setIsMobileExpanded(!isMobileExpanded);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    });
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 699px)'
    });
    // Other media queries (isBigScreen, isPortrait, isRetina) remain the same

    // Define the full text content (as you had it across multiple paragraphs)
    const p1 = "I'm a UI/UX designer and frontend developer driven to design for the community, currently completing my BSIT degree. I specialize in crafting seamless user interfaces (UI/UX) and engaging digital experiences using Figma, placing a strong emphasis on intuitive navigation, accessible components, clean visual hierarchies, and interactive prototyping.";
    const p2 = "I combine this UI/UX design expertise with practical front-end development skills in HTML, CSS, JavaScript, React, and Tailwind, bridging the gap between design and functionality for diverse digital platforms.";
    const p3 = "This expertise extends to building robust mobile and desktop applications, ensuring cohesive cross-platform solutions. I am eager to apply my technical knowledge and creativity to deliver intuitive, responsive, and visually compelling digital experiences for real-world projects.";
    const shortText = `${p1.substring(0, 274 )}...`; // Truncate the first paragraph
    return (
        <>
            {/* Desktop View (No See More/Less needed) */}
            {isDesktopOrLaptop &&
                <div className="flex justify-center items-center ">
                    <div className="hover:shadow-sm relative max-w-[330px] rounded-[16px] w-full p-[15px] mt-[10px] 
                    text-left border bg-white dark:bg-black border-gray-300 ">


                        <div className='flex items-center gap-2 '>
                            <IoMdInformationCircleOutline size={16} />
                            <h1 className="text-lg font-semibold ">About</h1>
                        </div>


                        <p className=" text-[14px]">{p1}</p>
                        <br />
                        <p className='text-[14px]'>{p2}</p>
                        <br />
                        <p className='text-[14px]'>{p3}</p>
                    </div>
                </div>
            }

            {/* Tablet or Mobile View (With See More/Less) */}
            {isTabletOrMobile &&
                <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-black relative max-w-[330px] rounded-[16px] w-full 
                    p-[15px] mt-[10px] text-left border border-gray-300">

                        <div className='flex items-center gap-2 mb-2 '>
                            <IoMdInformationCircleOutline size={12} />
                            <h1 className="text-[16px] font-semibold ">About</h1>

                        </div>
                        {/* Conditionally render paragraphs or the short version */}
                        {isMobileExpanded ? (
                            // Full Text View
                            <>
                                <p className="text-[12px] ">{p1}</p>
                                <br />
                                <p className="text-[12px]">{p2}</p>
                                <br />
                                <p className="text-[12px]">{p3}</p>
                            </>
                        ) : (
                            // Short Text View
                            <p className="text-[12px] ">
                                {shortText}
                            </p>
                        )}

                        {/* The Toggle Button for mobile */}
                        <button
                            onClick={toggleMobileExpansion}
                            className="text-[12px] text-blue-500 font-semibold mt-2 hover:text-blue-700 focus:outline-none"
                        >
                            {isMobileExpanded ? 'See less' : 'See more'}
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default About;