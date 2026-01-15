import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { GrTechnology } from "react-icons/gr";
import { degrees } from 'framer-motion';
function Knowledge({ setShowModal }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const modalRef = useRef(null);
    const startY = useRef(0);
    const [initialTranslate, setInitialTranslate] = useState(300);

    useEffect(() => {
        requestAnimationFrame(() => setInitialTranslate(0));
    }, []);

    const [isClosing, setIsClosing] = useState(false);
    const [forceFade, setForceFade] = useState(false);

    const handleTouchStart = (e) => {
        setIsDragging(true);
        startY.current = e.touches[0].clientY;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        startY.current = e.clientY;
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY.current;
        // Remove the "if (diff > 0)" condition to allow negative values
        setDragOffset(diff);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentY = e.clientY;
        const diff = currentY - startY.current;
        // Remove the "if (diff > 0)" condition to allow negative values
        setDragOffset(diff);
    };
    const handleDragEnd = () => {
        setIsDragging(false);

        // If in fullscreen and dragged down, close modal directly
        if (isFullscreen && dragOffset > 50) {
            setIsClosing(true);
            setIsFullscreen(false);
            setInitialTranslate(300);
            setTimeout(() => {
                setShowModal(false);
            }, 50);
            return;
        }

        // Normal close from default position
        if (dragOffset > 50) {
            setIsClosing(true);
            setInitialTranslate(300);
            setTimeout(() => {
                setShowModal(false);
            }, 250);
            return;
        }

        // Drag up to fullscreen
        if (dragOffset < -50) {
            setIsFullscreen(true);
            setDragOffset(0);
            return;
        }

        setDragOffset(0);
    };
    useEffect(() => {
        if (isDragging) {
            document.addEventListener("touchmove", preventScroll, { passive: false });
            document.addEventListener("touchmove", handleTouchMove, { passive: false });
            document.addEventListener("touchend", handleDragEnd);
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleDragEnd);
        }
        return () => {
            document.removeEventListener("touchmove", preventScroll);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleDragEnd);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleDragEnd);
        };
    }, [isDragging, dragOffset]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const preventScroll = (e) => e.preventDefault();

    const closeModal = () => {
        setForceFade(true);
        setInitialTranslate(300);
        setTimeout(() => setShowModal(false), 250);
    };
    const uiuix = ['Figma', 'Adobe XD', 'Sketch']
    const FrontEnd = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React JS', 'Tailwind CSS', 'React Native',
        'Nativewind', 'Styled Components', 'Next.Js', 'Vite']
    const devTools =  ['Git', 'Github', 'VS Code', 'Discord', 'Teams', 'JIRA',]
    const creative = ['Photoshop', 'Illustrator', 'Canva', 'Lightroom', 'Premiere Pro', 'After Effects', 'Da Vinci Resolve', 'Capcut',]

    
    return (


        <>

            {isDesktopOrLaptop &&
                <>

                    <div
                        className="fixed inset-0 bg-gray-600"
                        style={{
                            opacity: isFullscreen ? 0 : (forceFade ? 0 : 0.5 - dragOffset / 10),
                            transform: `translateY(${initialTranslate + dragOffset}px)`,
                            opacity: isDragging ? 0 : 0.600,
                            transition: isDragging
                                ? "none"
                                : forceFade
                                    ? "opacity 0.1s ease-out, transform 0.10s ease-out"
                                    : "opacity 0.25s ease-out, transform 0.25s ease-out",
                            pointerEvents: 'auto'
                        }}
                        onClick={() => {
                            if (isFullscreen) return; // Don't close when fullscreen
                            setForceFade(true);
                            setInitialTranslate(300);
                            setTimeout(() => setShowModal(false), 250);
                        }}
                    />
                    <div className={`fixed flex w-full justify-center items-center ${isFullscreen ? 'inset-0' : 'bottom-0'
                        }`}>
                        <div
                            ref={modalRef}
                            className={` bg-white flex w-full flex-col relative gap-1 
                                px-[30px] py-[30px] text-left border border-gray-300 
                                ${isFullscreen ? 'rounded-none' : 'rounded-t-[16px]'
                                }`}
                            style={{
                                transform: isFullscreen
                                    ? `translateY(${isDragging ? dragOffset : 0}px)`
                                    : `translateY(${initialTranslate + dragOffset}px)`,

                                height: isFullscreen && !isDragging ? '100vh' : 'auto',

                                transition: isDragging
                                    ? "none"
                                    : "transform 0.25s ease-out, height 0.3s ease-out ",


                            }}
                        >
                            {/* Drag handle - replaces ChevronDown button */}
                            <button
                                onTouchStart={handleTouchStart}
                                onMouseDown={handleMouseDown}
                                className="flex justify-center items-center w-full cursor-grab active:cursor-grabbing
                                 py-2 -mt-2"
                            >
                                <div className="w-12 h-1 bg-gray-300 rounded-full mb-2" />
                            </button>

                            {/* Header - KEEP ONLY ONE */}
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <GrTechnology size={16} color="black" />
                                    <span className="text-[24px] font-semibold">Tech Stack</span>
                                </div>
                                <button
                                    onClick={() => {

                                        setIsClosing(true);
                                        setForceFade(true);        // <- fast opacity fade
                                        setInitialTranslate(300);  // <- normal slide
                                        setTimeout(() => setShowModal(false), 50);
                                    }}
                                    className="cursor-pointer"
                                >



                                    <span className='cursor-pointer text-[24px]'>✕</span>
                                </button>
                            </div>             
                            
                                <div className='mt-[5px] mb-[5px]'>

                                <span className='font-semibold text-[16px]' >UI/UX</span>

                            </div>


                            <div className='mb-[20px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>



                                {uiuix.map((design) => (
                                    <span key={design} className='items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">'>{design}</span>
                                ))}

                            </div>

                            <div className='mb-[5px] '>

                                <span className='font-semibold text-[16px] '>Frontend</span>
                            </div>


                            <div className='mb-[20px] flex  gap-2 cursor-pointer w-full rounded-[12px]  '>


{FrontEnd.map((front) => (<span key={front} className='items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200'>

                                    {front}
                                </span>
                                   
))}
                                </div>

                                <div className='mb-[5px] '>

                                <span className='font-semibold text-[16px] '>Developer Tools</span>
                                </div>
                            <div className='mb-[20px] flex  gap-2 cursor-pointer w-full rounded-[12px]  '>


{devTools.map((devt) => (<span key={devt} className='items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200'>

                                    {devt}
                                </span>
                                   
))}
                                </div>
                                <div className='mb-[5px] '>

                                <span className='font-semibold text-[16px] '>Graphics & Video Editing</span>
                                </div>
                                 <div className='mb-[20px] flex  gap-2 cursor-pointer w-full rounded-[12px]  '>


{creative.map((graphics) => (<span key={graphics} className='items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200'>

                                    {graphics}
                                </span>
                                   
))}
                                </div>

</div>

                               </div>
                </>
            }

            {isTabletOrMobile &&
                <>

                    <div
                        className="fixed inset-0 bg-gray-600"
                        style={{
                            opacity: isFullscreen ? 0 : (forceFade ? 0 : 0.5 - dragOffset / 10),
                            transform: `translateY(${initialTranslate + dragOffset}px)`,
                            opacity: isDragging ? 0 : 0.600,
                            transition: isDragging
                                ? "none"
                                : forceFade
                                    ? "opacity 0.1s ease-out, transform 0.10s ease-out"
                                    : "opacity 0.25s ease-out, transform 0.25s ease-out",
                            pointerEvents: 'auto'
                        }}
                        onClick={() => {
                            if (isFullscreen) return; // Don't close when fullscreen
                            setForceFade(true);
                            setInitialTranslate(300);
                            setTimeout(() => setShowModal(false), 250);
                        }}
                    />
                    <div className={`fixed flex w-full justify-center items-center ${isFullscreen ? 'inset-0' : 'bottom-0'
                        }`}>
                        <div
                            ref={modalRef}
                            className={` bg-white flex w-full flex-col relative gap-1
                             px-[30px] py-[35px] text-left border border-gray-300 ${isFullscreen ? 'rounded-none' : 'rounded-t-[16px]'
                                }`}
                            style={{
                                transform: isFullscreen
                                    ? `translateY(${isDragging ? dragOffset : 0}px)`
                                    : `translateY(${initialTranslate + dragOffset}px)`,

                                height: isFullscreen && !isDragging ? '100vh' : 'auto',

                                transition: isDragging
                                    ? "none"
                                    : "transform 0.25s ease-out, height 0.3s ease-out ",


                            }}
                        >
                            {/* Drag handle - replaces ChevronDown button */}
                            <button
                                onTouchStart={handleTouchStart}
                                onMouseDown={handleMouseDown}
                                className=" flex justify-center items-center w-full cursor-grab active:cursor-grabbing py-2 -mt-2"
                            >
                                <div className="w-12 h-1 bg-gray-300 rounded-full mb-2" />
                            </button>

                            {/* Header - KEEP ONLY ONE */}
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <GrTechnology size={12} color="black" />
                                    <span className="text-[20px] font-semibold">Tech Stack</span>
                                </div>
                                <button
                                    onClick={() => {

                                        setIsClosing(true);
                                        setForceFade(true);        // <- fast opacity fade
                                        setInitialTranslate(300);  // <- normal slide
                                        setTimeout(() => setShowModal(false), 50);
                                    }}
                                    className="cursor-pointer"
                                >



                                    <span className='cursor-pointer text-[20px]'>✕</span>
                                </button>
                            </div>
       <div className='mt-[5px] mb-[5px]'>

                                <span className='font-semibold text-[16px]' >UI/UX</span>

                            </div>


                            <div className='mb-[20px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>



                                {uiuix.map((design) => (
                                    <span key={design} className='items-center px-[10px] py-[2px] 
                             text-[14px]       flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200'>
                                    
                                    {design}</span>
                                ))}

                            </div>

                            <div className='mb-[5px] '>

                                <span className='font-semibold text-[16px] '>Frontend</span>
                            </div>


                            <div className='flex flex-wrap mb-[20px] flex  gap-2 cursor-pointer w-full rounded-[12px]  '>


{FrontEnd.map((front) => (<span key={front} className='flex text-[14px]  items-center px-[10px] py-[2px] flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200 '>
                                    

                                    {front}
                                </span>
                                   
))}
                                </div>

                                <div className='mb-[5px] '>

                                <span className='font-semibold text-[16px] '>Developer Tools</span>
                                </div>
                            <div className=' flex flex-wrap mb-[20px] flex  gap-2 cursor-pointer w-full rounded-[12px]  '>


{devTools.map((devt) => (<span key={devt} className=' text-[14px]  items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 whitespace-wrap
                                duration-200'>

                                    {devt}
                                </span>
                                   
))}
                                </div>
                                <div className='mb-[5px] '>

                                <span className='font-semibold text-[16px] '>Graphics & Video Editing</span>
                                </div>
                            
                            
                                 <div className='flex flex-wrap mb-[20px] flex  gap-2 cursor-pointer w-full rounded-[12px]  '>


{creative.map((graphics) => (<span key={graphics} className='text-[14px]  items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200'>

                                    {graphics}
                                </span>
                                   
))}
                                </div>
                         </div>     

                    </div>
                </>
            }
        </>


    )


}
export default Knowledge