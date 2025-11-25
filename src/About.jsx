import React,{ useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function About() {
    // State to manage whether the full text is shown on mobile/tablet
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);

    // Toggle function for the mobile button
    const toggleMobileExpansion = () => {
        setIsMobileExpanded(!isMobileExpanded);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    });
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 1023px)'
    });
    // Other media queries (isBigScreen, isPortrait, isRetina) remain the same

    // Define the full text content (as you had it across multiple paragraphs)
    const p1 = "Motivated Bachelor of Science in Information Technology (BSIT) student with a strong passion for user-centric design and visual storytelling. I am proficient in designing and developing seamless user interfaces (UI/UX) and visually compelling graphics using tools like Figma and the Adobe Creative Suite including branding, typography, digital illustration.";
    const p2 = "I combine this design expertise with practical front-end development skills in HTML, CSS, JavaScript, React, and Tailwind, bridging the gap between design and functionality to build high-quality web experiences.";
    const p3 = "My skill set also includes impactful video editing and motion graphics, all aimed at creating engaging digital content Eager to apply my technical knowledge and creativity to create intuitive, visually appealing, and responsive digital experiences in real-world projects.";
    
    // Create a short version for the mobile initial view
    const shortText = `${p1.substring(0, 300)}...`; // Truncate the first paragraph

    return (
        <>
            {/* Desktop View (No See More/Less needed) */}
            {isDesktopOrLaptop &&
                <div className="flex justify-center items-center w-full ">
                    <div className="relative max-w-[620px] rounded-[16px] w-full p-[15px] mt-[10px] text-left border border-gray-300">
                        <h1 className="text-xl font-semibold mb-2">About</h1>
                        <p className=" text-black">{p1}</p>
                        <br/>
                        <p>{p2}</p>
                        <br />
                        <p>{p3}</p>
                    </div>
                </div>
            }

            {/* Tablet or Mobile View (With See More/Less) */}
            {isTabletOrMobile &&
                <div className="flex justify-center items-center">
                    <div className="relative max-w-[330px] rounded-[16px] w-full p-[15px] mt-[10px] text-left border border-gray-300">
                        <h1 className="text-[16px] font-semibold mb-2">About</h1>
                        
                        {/* Conditionally render paragraphs or the short version */}
                        {isMobileExpanded ? (
                            // Full Text View
                            <>
                                <p className="text-[12px] text-black">{p1}</p>
                                <br/>
                                <p className="text-[12px]">{p2}</p>
                                <br />
                                <p className="text-[12px]">{p3}</p>
                            </>
                        ) : (
                            // Short Text View
                            <p className="text-[12px] text-black">
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