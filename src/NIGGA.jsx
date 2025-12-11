import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import c1 from "./assets/projectsimg/cmen1.jpg"
import c2 from "./assets/projectsimg/cmen2.jpg"
import c3 from "./assets/projectsimg/cmen3.jpg"
import c4 from "./assets/projectsimg/cmen4.jpg"
import c5 from "./assets/projectsimg/cmen5.jpg"
import e1 from "./assets/projectsimg/ecom1.png"
import e2 from "./assets/projectsimg/ecom2.jpg"
import e3 from "./assets/projectsimg/ecom3.png"
import e4 from "./assets/projectsimg/ecom4.png"
import e5 from "./assets/projectsimg/ecom5.png"
import ek1 from "./assets/projectsimg/ek1.png"
import ek2 from "./assets/projectsimg/ek2.png"
import ek3 from "./assets/projectsimg/ek3.png"
import ek4 from "./assets/projectsimg/ek4.png"
import ek5 from "./assets/projectsimg/ek5.png"
import expwarmer from "./assets/projectsimg/expwarmer.jpg"
import ja from "./assets/projectsimg/ja.jpg"
import ky from "./assets/projectsimg/ky.jpg"
import toxxazi from "./assets/projectsimg/toxxazi.jpg"
import ecomlogo from "./assets/projectsimg/LOGO 1.1.png"
import trend from "./assets/projectsimg/trend.jpg"
import chades from "./assets/projectsimg/chades.jpg"
import batwar from "./assets/projectsimg/BATWARKA.jpg"
import aircon1 from "./assets/projectsimg/aircon1.jpg"
import cover from "./assets/projectsimg/cover.jpg"
import neutral from "./assets/projectsimg/neutral 3.png"
import jirsey1 from "./assets/projectsimg/jirsey1.jpg"
import wotg1 from "./assets/projectsimg/wotg1.jpeg"
import wotg2 from "./assets/projectsimg/wotg2.png"
import wotg3 from "./assets/projectsimg/wotg3.png"
import lid from "./assets/projectsimg/lid.jpg"
import card1 from "./assets/projectsimg/card1.jpg"
import ecosia from "./assets/projectsimg/ECOSIA.jpg"

function Nigga({ setShowModal }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 700px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 699px)' });

    // --- Modal Drag State ---
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const modalRef = useRef(null);
    const startY = useRef(0);
    const [initialTranslate, setInitialTranslate] = useState(300);
    const [forceFade, setForceFade] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // --- Album/Lightbox State ---
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Group images for easier handling
    const galleryImages = [
        c1, c2, c3, c4, c5,
        e1, e2, e3, e4, e5,
        ek1, ek2, ek3, ek4, ek5, ja, ky, toxxazi, ecomlogo,lid, card1,
        expwarmer, jirsey1, trend, chades, ecosia,
         wotg1,wotg2,wotg3,
         aircon1, cover, neutral,
       batwar
    ];

    useEffect(() => {
        requestAnimationFrame(() => setInitialTranslate(0));
    }, []);

    // --- Drag Logic ---
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
        setDragOffset(diff);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentY = e.clientY;
        const diff = currentY - startY.current;
        setDragOffset(diff);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (isFullscreen && dragOffset > 50) {
            setIsClosing(true);
            setIsFullscreen(false);
            setInitialTranslate(300);
            setTimeout(() => { setShowModal(false); }, 50);
            return;
        }
        if (dragOffset > 50) {
            setIsClosing(true);
            setInitialTranslate(300);
            setTimeout(() => { setShowModal(false); }, 250);
            return;
        }
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
        return () => { document.body.style.overflow = "auto"; };
    }, []);

    const preventScroll = (e) => e.preventDefault();

    // --- Lightbox Functions ---
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextSlide = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    // Swipe Logic for Lightbox
    const minSwipeDistance = 50;
    const onLbTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onLbTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const onLbTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    // --- Render Component for the Gallery Grid ---
    const GalleryGrid = () => (
        <div className={`flex gap-4 mt-5 flex-wrap ${ isTabletOrMobile ? 'w-full gap-2 items-center justify-center' : '' }`}>
            {galleryImages.map((img, index) => (
                <div 
                    key={index}
                    onClick={() => openLightbox(index)}
               className='cursor-pointer overflow-hidden rounded-md shadow-sm hover:opacity-80 transition-opacity w-24 h-24 bg-gray-100'>
            
                    <img 
                        src={img} 
                        alt={`Project ${index}`} 
                        className="w-full  h-full object-cover "
                    />
                </div>
            ))}
        </div>
    );

    // --- Main Modal Style Calculation ---
    const modalOverlayStyle = {
        opacity: isFullscreen ? 0 : (forceFade ? 0 : 0.5 - dragOffset / 10),
        transform: `translateY(${initialTranslate + dragOffset}px)`,
        transition: isDragging ? "none" : (forceFade ? "opacity 0.1s ease-out" : "opacity 0.25s ease-out"),
        pointerEvents: 'auto'
    };

    const modalContentStyle = {
        transform: isFullscreen
            ? `translateY(${isDragging ? dragOffset : 0}px)`
            : `translateY(${initialTranslate + dragOffset}px)`,
        height: isFullscreen && !isDragging ? '100vh' : 'auto',
        transition: isDragging ? "none" : "transform 0.25s ease-out, height 0.3s ease-out ",
    };

 
useEffect(() => {
    // 1. Only run this logic if the lightbox is actually open
    if (!lightboxOpen) return;

    // 2. Define the event handler
    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
        } else if (e.key === "Escape") {
            // Optional: Close on Escape key (Good UX)
            closeLightbox();
        }
    };

    // 3. Add the event listener to the window
    window.addEventListener("keydown", handleKeyDown);

    // 4. Cleanup function: Remove the listener when the component unmounts
    // or when lightboxOpen becomes false. This prevents memory leaks.
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}, [lightboxOpen, prevSlide, nextSlide, closeLightbox]);

    return (


        <>

            {isDesktopOrLaptop &&
                <>

                    <div
                        className="fixed inset-0 bg-gray-600 "
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
              <div className={`fixed flex w-full justify-center items-center ${isFullscreen ? 'inset-0' : 'bottom-0'}`}>
    <div
        ref={modalRef}
        className={`overflow-scroll overflow-x-auto bg-white flex w-full flex-col relative gap-1 px-[30px] py-[30px]
             text-left border border-gray-300 ${
            isFullscreen ? 'rounded-none' : 'rounded-t-[16px] max-h-[80vh]' // <-- ADD max-h-[80vh] class
        }`}
        style={{
            transform: isFullscreen
                ? `translateY(${isDragging ? dragOffset : 0}px)`
                : `translateY(${initialTranslate + dragOffset}px)`,
            
            // Set height to 100vh when fullscreen, but allow it to be constrained by max-h when not
            height: isFullscreen && !isDragging ? '100vh' : 'auto', 

            transition: isDragging
                ? "none"
                : "transform 0.25s ease-out, height 0.3s ease-out ",
        }}
    >
                            <div>
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

                                  


                              {/* --- THIS IS THE NEW ALBUM GRID --- */}
                        <GalleryGrid className= '!items-center !justify-center' />
                    </div>

    
                </div>
            </div>

            {/* --- 3. THE LIGHTBOX OVERLAY (Album View) --- */}
            {lightboxOpen && (
                <div 
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button 
                        className=" cursor-pointer absolute top-5 right-5 text-white text-4xl hover:text-gray-300 z-50 p-2"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>

                    {/* Prev Button */}
                    <button 
                        className=" cursor-pointer absolute left-2 md:left-5 text-white text-5xl hover:scale-110 p-2 z-50 select-none"
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>

                    {/* Image Container with Swipe */}
                    <div 
                        className="relative max-w-4xl w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Stop click closing modal
                        onTouchStart={onLbTouchStart}
                        onTouchMove={onLbTouchMove}
                        onTouchEnd={onLbTouchEnd}
                    >
                        <img 
                            src={galleryImages[currentImageIndex]} 
                            alt="Full View" 
                            className="max-h-[85vh] max-w-full object-contain rounded shadow-2xl select-none"
                        />
                        <div className="absolute bottom-5 text-white/50 text-sm">
                            {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button 
                        className=" cursor-pointer absolute right-2 md:right-5 text-white text-5xl hover:scale-110 p-2 z-50 select-none"
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>
                </div>
            )}
        
   



                           

                          


                    </div>
                </>
            }

            {isTabletOrMobile &&
                <>

   <div
                        className="fixed inset-0 bg-gray-600 "
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
              <div className={`fixed flex w-full justify-center items-center z-[50] ${isFullscreen ? 'inset-0' : 'bottom-0'}`}>
            <div
                ref={modalRef}
                className={`bg-white flex w-full flex-col relative gap-1 px-[15px] py-[35px] text-left border border-gray-300 shadow-xl
                    ${isFullscreen ? 'rounded-none' : 'rounded-t-[16px] max-h-[85vh]'}
                `}
                style={{
                    // LOGIC FIX: Keep height 100vh if fullscreen, regardless of dragging state
                    height: isFullscreen ? '100vh' : 'auto',
                    
                    transform: isFullscreen
                        ? `translateY(${isDragging ? dragOffset : 0}px)`
                        : `translateY(${initialTranslate + dragOffset}px)`,

                    // CSS FIX: This stops the browser from trying to scroll the page while you drag
                    touchAction: 'none',

                    transition: isDragging
                        ? "none"
                        : "transform 0.25s ease-out, height 0.3s ease-out",
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
                                    <div className='flex items-center gap-2'>
                                        <span className='text-[20px]'> 🗂️</span>
                                        <span className="text-[20px] font-semibold">All Projects</span>
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



                                        <span className='cursor-pointer text-[22px]'>✕</span>
                                    </button>
                                </div>        




                               

<div 
        className="flex-1 overflow-y-auto overflow-x-hidden w-full"
        // Optional: stop propagation ensures scrolling inside here doesn't trigger drag on parent if logic overlaps
        onPointerDown={(e) => e.stopPropagation()} 
    >
                              {/* --- THIS IS THE NEW ALBUM GRID --- */}
                        <GalleryGrid c />
                    </div>

    </div>
              
            

            {/* --- 3. THE LIGHTBOX OVERLAY (Album View) --- */}
            {lightboxOpen && (
                <div 
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button 
                        className="cursor-pointer absolute top-5 right-5 text-white text-4xl hover:text-gray-300 z-50 p-2"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>

                    {/* Prev Button */}
                    <button 
                        className="cursor-pointer absolute left-2 md:left-5 text-white text-[24px] hover:scale-110 p-2 z-50 select-none"
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>

                    {/* Image Container with Swipe */}
                    <div 
                        className="relative max-w-4xl w-full px-5  h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Stop click closing modal
                        onTouchStart={onLbTouchStart}
                        onTouchMove={onLbTouchMove}
                        onTouchEnd={onLbTouchEnd}
                    >
                        <img 
                            src={galleryImages[currentImageIndex]} 
                            alt="Full View" 
                            className="max-h-full max-w-full object-contain rounded shadow-2xl select-none"
                        />
                        <div className="absolute bottom-5 text-white/50 text-sm">
                            {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button 
                        className="cursor-pointer absolute right-2 md:right-5 text-white text-[24px] hover:scale-110 p-2 z-50 select-none"
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>
                </div>
            )}
                       
  </div>
          
                  

                </>
            }
        </>


    )


}
export default Nigga