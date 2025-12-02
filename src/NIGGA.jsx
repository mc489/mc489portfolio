import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function Nigga({ setShowModal }) {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 700px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 699px)' });
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
                   <div className={`fixed flex w-full justify-center items-center ${
  isFullscreen ? 'inset-0' : 'bottom-0'
}`}>
                        <div
                            ref={modalRef}
                          className={` bg-white flex w-full flex-col relative gap-1 px-[30px] py-[30px] text-left border border-gray-300 ${
  isFullscreen ? 'rounded-none' : 'rounded-t-[16px]'
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
                                className="flex justify-center items-center w-full cursor-grab active:cursor-grabbing py-2 -mt-2"
                            >
                                <div className="w-12 h-1 bg-gray-300 rounded-full mb-2" />
                            </button>

                            {/* Header - KEEP ONLY ONE */}
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-[24px]'> 🗂️</span>
                                    <span className="text-[24px] font-semibold">All Projects</span>
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
                            </div>                 <div className='mt-[5px] mb-[5px]'>

                                <span className='font-semibold text-[16px]' >Websites</span>

                            </div>

                       <div className='flex gap-10'>  
   <div className=' max-w-[400px] px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px] cursor-pointer
                       px-2 py-2 hover:-translate-y-0.5  duration-200'>
                      
                            <h1 className='text-[16px] font-bold   mb-[5px]'>
                                E-Compare
                            </h1>
                            
                         
                            <p className='text-[12px]'>
                                Comparing products between by Lazada and Shopee
                            </p>
                             <p className='text-[12px]'>
                               nike.com
                            </p>
                        </div>

                        <div className=' max-w-[400px] px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px] cursor-pointer
                       px-2 py-2 hover:-translate-y-0.5  duration-200'>
                            <h1 className='font-bold ' >CMEN</h1>
                            <p className='text-[12px]'>
                                A drag and drop survey creation website
                            </p>
                        </div>

                     <div className=' max-w-[400px] px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px] cursor-pointer
                       px-2 py-2 hover:-translate-y-0.5  duration-200'>
                            <h1 className='font-bold text-[16px]'>ELAD KICKS</h1>
                            <p className='text-[12px]'>
                                An information website for footwear business
                            </p>
                        </div>
                
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
                   <div className={`fixed flex w-full justify-center items-center ${
  isFullscreen ? 'inset-0' : 'bottom-0'
}`}>
                        <div
                            ref={modalRef}
                          className={` bg-white flex w-full flex-col relative gap-1 px-[30px] py-[30px] text-left border border-gray-300 ${
  isFullscreen ? 'rounded-none' : 'rounded-t-[16px]'
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
                                className="mt-[15px] flex justify-center items-center w-full cursor-grab active:cursor-grabbing py-2 -mt-2"
                            >
                                <div className="w-12 h-1 bg-gray-300 rounded-full mb-2" />
                            </button>

                            {/* Header - KEEP ONLY ONE */}
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-[16px]'>🧠</span>
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

                                <span className='font-semibold text-[14px]' >UI/UX</span>

                            </div>


                            <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Figma </span>

                                </div>



                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">



                                    <span className='text-[12px]'> Adobe Xd</span>

                                </div>
                            </div>

                            <div className='mb-[5px] '>

                                <span className='font-semibold text-[14px] '>Graphic Design / Illustration</span>
                            </div>


                            <div className='mb-[10px]  flex  gap-2 cursor-pointer w-full rounded-[12px]  '>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Photoshop </span>

                                </div>



                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">



                                    <span className='text-[12px]'> Illustrator</span>

                                </div>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Canva</span>

                                </div>

                            </div>

                            <div className='mb-[5px]'>

                                <span className='font-semibold text-[14px]'>Video Editing</span>
                            </div>

                            <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">



                                    <span className='text-[12px]'> Premiere Pro </span>

                                </div>



                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> After Effects</span>

                                </div>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Capcut</span>


                                </div>
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">
                                    <span className='text-[12px]'> Da Vinci Resolve</span>
                                </div>
                            </div>



                            <div className='mb-[5px]'>

                                <span className='font-semibold text-[14px]'>FrontEnd</span>
                            </div>


                            <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap '>
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">



                                    <span className='text-[12px]'> HTML5</span>

                                </div>



                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> CSS</span>

                                </div>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> JavaScript</span>

                                </div>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> React</span>

                                </div>
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Tailwind</span>

                                </div>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Vite</span>

                                </div>
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Next.js</span>

                                </div>

                            </div>
                            <div className='mb-[5px] '>

                                <span className='font-semibold text-[14px]'>Developer Tools</span>
                            </div>


                            <div className='flex gap-2  cursor-pointer w-full rounded-[12px] flex-wrap '>
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">



                                    <span className='text-[12px]'> Git</span>

                                </div>



                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Github</span>

                                </div>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> VS Code</span>

                                </div>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Jira</span>

                                </div>
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Teams</span>

                                </div>

                            </div>

                        </div>


                    </div>
                </>
            }
        </>


    )


}
export default Nigga