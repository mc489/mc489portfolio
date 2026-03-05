import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import c1 from "./assets/projectsimg/cmen1.jpg"
import c1_thumb from "./assets/projectsimg/thumbnails/cmen1-thumb.webp"
import c2 from "./assets/projectsimg/cmen2.jpg"
import c2_thumb from "./assets/projectsimg/thumbnails/cmen2-thumb.webp"
import c3 from "./assets/projectsimg/cmen3.jpg"
import c3_thumb from "./assets/projectsimg/thumbnails/cmen3-thumb.webp"
import c4 from "./assets/projectsimg/cmen4.jpg"
import c4_thumb from "./assets/projectsimg/thumbnails/cmen4-thumb.webp"
import c5 from "./assets/projectsimg/cmen5.jpg"
import c5_thumb from "./assets/projectsimg/thumbnails/cmen5-thumb.webp"
import e1 from "./assets/projectsimg/ecom1.png"
import e1_thumb from "./assets/projectsimg/thumbnails/ecom1-thumb.webp"
import e2 from "./assets/projectsimg/ecom2.jpg"
import e2_thumb from "./assets/projectsimg/thumbnails/ecom2-thumb.webp"
import e3 from "./assets/projectsimg/ecom3.png"
import e3_thumb from "./assets/projectsimg/thumbnails/ecom3-thumb.webp"
import e4 from "./assets/projectsimg/ecom4.png"
import e4_thumb from "./assets/projectsimg/thumbnails/ecom4-thumb.webp"
import e5 from "./assets/projectsimg/ecom5.png"
import e5_thumb from "./assets/projectsimg/thumbnails/ecom5-thumb.webp"
import ek1 from "./assets/projectsimg/ek1.png"
import ek1_thumb from "./assets/projectsimg/thumbnails/ek1-thumb.webp"
import ek2 from "./assets/projectsimg/ek2.png"
import ek2_thumb from "./assets/projectsimg/thumbnails/ek2-thumb.webp"
import ek3 from "./assets/projectsimg/ek3.png"
import ek3_thumb from "./assets/projectsimg/thumbnails/ek3-thumb.webp"
import ek4 from "./assets/projectsimg/ek4.png"
import ek4_thumb from "./assets/projectsimg/thumbnails/ek4-thumb.webp"
import ek5 from "./assets/projectsimg/ek5.png"
import ek5_thumb from "./assets/projectsimg/thumbnails/ek5-thumb.webp"
import expwarmer from "./assets/projectsimg/expwarmer.jpg"
import expwarmer_thumb from "./assets/projectsimg/thumbnails/expwarmer-thumb.webp"
import ja from "./assets/projectsimg/ja.jpg"
import ja_thumb from "./assets/projectsimg/thumbnails/ja-thumb.webp"
import ky from "./assets/projectsimg/ky.jpg"
import ky_thumb from "./assets/projectsimg/thumbnails/ky-thumb.webp"
import toxxazi from "./assets/projectsimg/toxxazi.jpg"
import toxxazi_thumb from "./assets/projectsimg/thumbnails/toxxazi-thumb.webp"
import ecomlogo from "./assets/projectsimg/LOGO 1.1.png"
import ecomlogo_thumb from "./assets/projectsimg/thumbnails/LOGO 1.1-thumb.webp"
import trend from "./assets/projectsimg/trend.jpg"
import trend_thumb from "./assets/projectsimg/thumbnails/trend-thumb.webp"
import chades from "./assets/projectsimg/chades.jpg"
import chades_thumb from "./assets/projectsimg/thumbnails/chades-thumb.webp"
import batwar from "./assets/projectsimg/BATWARKA.jpg"
import batwar_thumb from "./assets/projectsimg/thumbnails/BATWARKA-thumb.webp"
import aircon1 from "./assets/projectsimg/aircon1.jpg"
import aircon1_thumb from "./assets/projectsimg/thumbnails/aircon1-thumb.webp"
import cover from "./assets/projectsimg/cover.jpg"
import cover_thumb from "./assets/projectsimg/thumbnails/cover-thumb.webp"
import neutral from "./assets/projectsimg/neutral 3.png"
import neutral_thumb from "./assets/projectsimg/thumbnails/neutral 3-thumb.webp"
import jirsey1 from "./assets/projectsimg/jirsey1.jpg"
import jirsey1_thumb from "./assets/projectsimg/thumbnails/jirsey1-thumb.webp"
import wotg1 from "./assets/projectsimg/wotg1.jpeg"
import wotg1_thumb from "./assets/projectsimg/thumbnails/wotg1-thumb.webp"
import wotg2 from "./assets/projectsimg/wotg2.png"
import wotg2_thumb from "./assets/projectsimg/thumbnails/wotg2-thumb.webp"
import wotg3 from "./assets/projectsimg/wotg3.png"
import wotg3_thumb from "./assets/projectsimg/thumbnails/wotg3-thumb.webp"
import lid from "./assets/projectsimg/lid.jpg"
import lid_thumb from "./assets/projectsimg/thumbnails/lid-thumb.webp"
import card1 from "./assets/projectsimg/card1.jpg"
import card1_thumb from "./assets/projectsimg/thumbnails/card1-thumb.webp"
import ecosia from "./assets/projectsimg/ECOSIA.jpg"
import ecosia_thumb from "./assets/projectsimg/thumbnails/ECOSIA-thumb.webp"
import rcy1 from "./assets/projectsimg/rcy1.png"
import rcy1_thumb from "./assets/projectsimg/thumbnails/rcy1-thumb.webp"
import rcy2 from "./assets/projectsimg/rcy2.png"
import rcy2_thumb from "./assets/projectsimg/thumbnails/rcy2-thumb.webp"
import rcy3 from "./assets/projectsimg/rcy3.png"
import rcy3_thumb from "./assets/projectsimg/thumbnails/rcy3-thumb.webp"
import rcy4 from "./assets/projectsimg/rcy4.png"
import rcy4_thumb from "./assets/projectsimg/thumbnails/rcy4-thumb.webp"
import { GrProjects } from "react-icons/gr";

function Nigga({ setShowModal , initialImage = null }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 700px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 699px)' });
    // --- Navigation & Filtering State ---
    
    const navItems = ["All", "Websites", "Apps", "Graphics"];
    const [activeItem, setActiveItem] = useState(navItems[0]);
    // --- Modal Drag State ---
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const modalRef = useRef(null);
    const startY = useRef(0);
    const [initialTranslate, setInitialTranslate] = useState(300);
    const [forceFade, setForceFade] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    // --- Delay State for Rendering Images ---
    const [isModalReady, setIsModalReady] = useState(false);
    // --- Album/Lightbox State ---
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    // --- Arrays: Now using objects with { thumb, full } ---
    const galleryImages = [
        { thumb: c1_thumb, full: c1 }, { thumb: c2_thumb, full: c2 }, { thumb: c3_thumb, full: c3 },
         { thumb: c4_thumb, full: c4 }, { thumb: c5_thumb, full: c5 },
        { thumb: e1_thumb, full: e1 }, { thumb: e2_thumb, full: e2 }, 
        { thumb: e3_thumb, full: e3 }, { thumb: e4_thumb, full: e4 }, { thumb: e5_thumb, full: e5 },
        { thumb: ek1_thumb, full: ek1 }, { thumb: ek2_thumb, full: ek2 }, { thumb: ek3_thumb, full: ek3 },
         { thumb: ek4_thumb, full: ek4 }, { thumb: ek5_thumb, full: ek5 },
        { thumb: ja_thumb, full: ja }, { thumb: ky_thumb, full: ky }, 
        { thumb: toxxazi_thumb, full: toxxazi }, { thumb: ecomlogo_thumb, full: ecomlogo }, 
        { thumb: lid_thumb, full: lid }, { thumb: card1_thumb, full: card1 },
         { thumb: expwarmer_thumb, full: expwarmer }, { thumb: jirsey1_thumb, full: jirsey1 }, 
         { thumb: trend_thumb, full: trend }, { thumb: chades_thumb, full: chades },
        { thumb: ecosia_thumb, full: ecosia }, { thumb: wotg1_thumb, full: wotg1 }, 
        { thumb: wotg2_thumb, full: wotg2 }, { thumb: wotg3_thumb, full: wotg3 },    { thumb: rcy1_thumb, full: rcy1 }, 
        { thumb: rcy2_thumb, full: rcy2 }, { thumb: rcy3_thumb, full: rcy3 },
         { thumb: rcy4_thumb, full: rcy4 },{ thumb: aircon1_thumb, full: aircon1 },
        { thumb: cover_thumb, full: cover }, { thumb: neutral_thumb, full: neutral }, { thumb: batwar_thumb, full: batwar }
    ];
    const WebsitesImages = [
        { thumb: c1_thumb, full: c1 }, { thumb: c2_thumb, full: c2 }, 
        { thumb: c3_thumb, full: c3 }, { thumb: c4_thumb, full: c4 }, { thumb: c5_thumb, full: c5 },
        { thumb: e1_thumb, full: e1 }, { thumb: e2_thumb, full: e2 }, { thumb: e3_thumb, full: e3 }, 
        { thumb: e4_thumb, full: e4 }, { thumb: e5_thumb, full: e5 },
        { thumb: ek1_thumb, full: ek1 }, { thumb: ek2_thumb, full: ek2 },
         { thumb: ek3_thumb, full: ek3 }, { thumb: ek4_thumb, full: ek4 }, { thumb: ek5_thumb, full: ek5 }
    ];
    const appImages = [
        { thumb: wotg1_thumb, full: wotg1 }, { thumb: wotg2_thumb, full: wotg2 }, { thumb: wotg3_thumb, full: wotg3 },
         { thumb: rcy1_thumb, full: rcy1 }, { thumb: rcy2_thumb, full: rcy2 }, { thumb: rcy3_thumb, full: rcy3 },
         { thumb: rcy4_thumb, full: rcy4 }
    ];
    const GraphicsImages = [
        { thumb: ja_thumb, full: ja }, { thumb: ky_thumb, full: ky },
        { thumb: toxxazi_thumb, full: toxxazi }, { thumb: ecomlogo_thumb, full: ecomlogo },
         { thumb: lid_thumb, full: lid },{ thumb: card1_thumb, full: card1 },
          { thumb: expwarmer_thumb, full: expwarmer }, { thumb: jirsey1_thumb, full: jirsey1 },
         { thumb: trend_thumb, full: trend }, { thumb: chades_thumb, full: chades },
        { thumb: ecosia_thumb, full: ecosia }, { thumb: aircon1_thumb, full: aircon1 },
         { thumb: cover_thumb, full: cover }, { thumb: neutral_thumb, full: neutral }, 
         { thumb: batwar_thumb, full: batwar }
    ];
    // Determine which images to display
    const displayedImages =
        activeItem === "Websites" ? WebsitesImages :
            activeItem === "Apps" ? appImages :
                activeItem === "Graphics" ? GraphicsImages :
                    galleryImages;
   // Replace your existing useEffect with this:
useEffect(() => {
    requestAnimationFrame(() => setInitialTranslate(0));
    const timer = setTimeout(() => {
        setIsModalReady(true);
    }, 300);
    return () => clearTimeout(timer);
}, []);

// Add this SEPARATE useEffect:
useEffect(() => {
    if (isModalReady && initialImage !== null) {
        setCurrentImageIndex(initialImage);
        setLightboxOpen(true);
    }
}, [isModalReady]);
    // --- Drag Logic ---
    const handleTouchStart = (e) => { setIsDragging(true); startY.current = e.touches[0].clientY; };
    const handleMouseDown = (e) => { setIsDragging(true); startY.current = e.clientY; };
    const handleTouchMove = (e) => { if (!isDragging) return; setDragOffset(e.touches[0].clientY - startY.current); };
    const handleMouseMove = (e) => { if (!isDragging) return; setDragOffset(e.clientY - startY.current); };
    const handleDragEnd = () => {
        setIsDragging(false);
        if (dragOffset > 50) {
            setIsClosing(true);
            setInitialTranslate(300);
            setTimeout(() => { setShowModal(false); }, 250);
            return;
        }
        if (dragOffset < -50) { setIsFullscreen(true); setDragOffset(0); return; }
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
    const openLightbox = (index) => { setCurrentImageIndex(index); setLightboxOpen(true); };
    const closeLightbox = () => setLightboxOpen(false);
    const nextSlide = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev === displayedImages.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1));
    };
    // --- Sub-Component: Navigation Menu ---
    const NavMenu = () => (
        <nav className={`relative ${isDesktopOrLaptop ? 'pl-2 min-w-[150px]' : 'w-full mb-4'}`}>
            {isDesktopOrLaptop && <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-300"></div>}
            <ul className={`${isTabletOrMobile ? 'flex overflow-x-auto gap-2 no-scrollbar pb-2' : ''}`}>
                {navItems.map((item) => (
                    <li key={item} className={`${isDesktopOrLaptop ? 'mb-4' : 'flex-shrink-0'}`}>
                        <button
                            onClick={() => { setActiveItem(item); setCurrentImageIndex(0); }}
                            className={`cursor-pointer text-left py-1 px-4 duration-200 ease-in-out whitespace-nowrap ${activeItem === item
                                ? "text-black font-semibold border-l-4 border-black"
                                : "text-gray-500 hover:text-gray-700 hover:border-l-4 hover:border-gray-400"
                                }`}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
    // --- MEMOIZED GRID: Stops re-rendering while dragging ---
    const memoizedGrid = useMemo(() => (
        <div className={`flex gap-4 mt-5 flex-wrap flex-1 ${isTabletOrMobile ? 'w-full gap-2 items-center justify-center' : ''}`}>
            {displayedImages.map((imgObj, index) => (
                <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className='cursor-pointer overflow-hidden rounded-md shadow-sm hover:opacity-80 transition-opacity w-24 h-24 bg-gray-100'
                >
                    <img
                        src={imgObj.thumb} // <--- USING THE THUMBNAIL HERE!
                        alt={`Project ${index}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ))}
        </div>
    ), [displayedImages, isTabletOrMobile]);
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
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };
    return (
        <>
            {/* --- DESKTOP VIEW --- */}
            {isDesktopOrLaptop && (
                <>
                    <div
                        className="fixed inset-0 bg-gray-800 z-40"
                        style={{
                            opacity: isFullscreen ? 0 : (forceFade ? 0 : 0.6),
                            transform: `translate3d(0, ${initialTranslate + dragOffset}px, 0)`,
                            transition: isDragging ? "none" : "opacity 0.25s ease-out, transform 0.25s ease-out",
                            willChange: "transform, opacity"
                        }}
                        onClick={() => { if (!isFullscreen) setShowModal(false); }}
                    />
                    <div className={`fixed flex w-full justify-center items-center z-50 ${isFullscreen ? 'inset-0' : 'bottom-0'}`}>
                        <div
                            ref={modalRef}
                            className={`overflow-y-auto bg-white flex w-full h-[550px] flex-col relative px-[30px] py-[30px] border border-gray-300 ${isFullscreen ? 'h-screen' : 'rounded-t-[16px] max-h-[80vh]'}`}
                            style={{
                                transform: isFullscreen ? `translate3d(0, ${isDragging ? dragOffset : 0}px, 0)` : `translate3d(0, ${initialTranslate + dragOffset}px, 0)`,
                                transition: isDragging ? "none" : "transform 0.25s ease-out",
                                willChange: "transform"
                            }}
                        >
                            <button onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} className="flex justify-center w-full py-2 -mt-2 cursor-grab">
                                <div className="w-12 h-1 bg-gray-300 rounded-full mb-2" />
                            </button>
                            <div className='flex justify-between items-center mb-6'>
                                <div className='flex items-center gap-3'><GrProjects size={16} /><span className="text-[24px] font-semibold">Projects</span></div>
                                <button onClick={() => setShowModal(false)} className="text-[24px]">✕</button>
                            </div>
                            <div className="flex flex-row">
                                <NavMenu />
                                {/* Render the memoized grid ONLY after modal animation finishes */}
                                <div className="flex-1 overflow-y-auto w-full">
                                    {isModalReady ? (
                                        memoizedGrid
                                    ) : (
                                        <div className="flex-1 flex justify-center items-center mt-10">
                                            <span className="text-gray-400">Loading gallery...</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/* --- MOBILE VIEW --- */}
            {isTabletOrMobile && (
                <>
                    <div
                        className="fixed inset-0 bg-gray-100 z-40"
                        style={{
                            opacity: isFullscreen ? 0 : 0.6,
                            transform: `translateY(${initialTranslate + dragOffset}px)`,
                            transition: "opacity 0.25s ease-out",
                        }}
                        onClick={() => setShowModal(false)}
                    />
                    <div className={`fixed flex w-full justify-center items-center z-50 ${isFullscreen ? 'inset-0' : 'bottom-0'}`}>
                        <div
                            ref={modalRef}
                            className={`bg-white flex w-full h-[550px]  flex-col relative px-[15px] py-[35px] border border-gray-300 ${isFullscreen ? 'h-screen' : 'rounded-t-[16px] max-h-[85vh]'}`}
                            style={{
                                transform: isFullscreen ? `translateY(${isDragging ? dragOffset : 0}px)` : `translateY(${initialTranslate + dragOffset}px)`,
                                touchAction: 'none',
                                transition: isDragging ? "none" : "transform 0.25s ease-out",
                            }}
                        >
                            <button onTouchStart={handleTouchStart} className="flex justify-center w-full py-2 -mt-2"><div className="w-12 h-1 bg-gray-300 rounded-full mb-2" /></button>
                            <div className='flex justify-between items-center mb-4'>
                                <div className='flex items-center gap-2'>
                                    <GrProjects size={12} />
                                    <span className="text-[20px] font-semibold">Projects</span>
                                </div>
                                <button onClick={() => setShowModal(false)} className="text-[22px]">✕</button>
                            </div>
                            <NavMenu />
                            <div className="flex-1 overflow-y-auto w-full">
                                {isModalReady ? (
                                    memoizedGrid
                                ) : (
                                    <div className="flex-1 flex justify-center items-center mt-10">
                                        <span className="text-gray-400">Loading gallery...</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/* --- LIGHTBOX OVERLAY --- */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeLightbox}>
                    <button className="absolute top-5 right-5 text-white text-4xl z-50 p-2" onClick={closeLightbox}>&times;</button>

                    {/* Left Chevron - Size and position based on media query */}
                    <button
                        className={`absolute z-50 p-2 text-white ${isTabletOrMobile ? 'left-1 text-[40px]' : 'left-5 text-[24px]'}`}
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>

                    {/* Image Container - Adds padding on mobile to protect the chevrons */}
                    <div
                        className={`relative max-w-4xl w-full h-full flex items-center justify-center ${isTabletOrMobile ? 'px-12' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={onLbTouchStart}
                        onTouchMove={onLbTouchMove}
                        onTouchEnd={onLbTouchEnd}
                    >
                        <img
                            src={displayedImages[currentImageIndex].full}
                            alt="Full View"
                            className={`max-w-full object-contain rounded shadow-2xl ${isTabletOrMobile ? 'max-h-[85vh]' : 'max-h-full'}`}
                        />
                        <div className="absolute bottom-5 text-white/50 text-sm">{currentImageIndex + 1} / {displayedImages.length}</div>
                    </div>

                    {/* Right Chevron - Size and position based on media query */}
                    <button
                        className={`absolute z-50 p-2 text-white ${isTabletOrMobile ? 'right-1 text-[40px]' : 'right-5 text-[24px]'}`}
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>
                </div>
            )}
        </>
    );
}
export default Nigga; 