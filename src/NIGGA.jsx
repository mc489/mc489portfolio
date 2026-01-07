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
import { GrProjects } from "react-icons/gr";

function Nigga({ setShowModal }) {
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

    // --- Album/Lightbox State ---
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // --- Image Category Arrays ---
    const galleryImages = [
        c1, c2, c3, c4, c5, e1, e2, e3, e4, e5, ek1, ek2, ek3, ek4, ek5, 
        ja, ky, toxxazi, ecomlogo, lid, card1, expwarmer, jirsey1, 
        trend, chades, ecosia, wotg1, wotg2, wotg3, aircon1, cover, neutral, batwar
    ];

    const WebsitesImages = [c1, c2, c3, c4, c5, e1, e2, e3, e4, e5, ek1, ek2, ek3, ek4, ek5];
    const appImages = [wotg1, wotg2, wotg3];
    const GraphicsImages = [
        ja, ky, toxxazi, ecomlogo, lid, card1, expwarmer, jirsey1, 
        trend, chades, ecosia, aircon1, cover, neutral, batwar
    ];

    // Determine which images to display
    const displayedImages = 
        activeItem === "Websites" ? WebsitesImages :
        activeItem === "Apps" ? appImages :
        activeItem === "Graphics" ? GraphicsImages :
        galleryImages;

    useEffect(() => {
        requestAnimationFrame(() => setInitialTranslate(0));
    }, []);

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

    const onLbTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
    const onLbTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
    const onLbTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) nextSlide();
        if (distance < -50) prevSlide();
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
                            className={`text-left py-1 px-4 duration-200 ease-in-out whitespace-nowrap ${
                                activeItem === item
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

    const GalleryGrid = () => (
        <div className={`flex gap-4 mt-5 flex-wrap flex-1 ${isTabletOrMobile ? 'w-full gap-2 items-center justify-center' : ''}`}>
            {displayedImages.map((img, index) => (
                <div 
                    key={index}
                    onClick={() => openLightbox(index)}
                    className='cursor-pointer overflow-hidden rounded-md shadow-sm hover:opacity-80 transition-opacity w-24 h-24 bg-gray-100'
                >
                    <img src={img} alt={`Project ${index}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") prevSlide();
            else if (e.key === "ArrowRight") nextSlide();
            else if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, currentImageIndex, displayedImages]);

    return (
        <>
            {/* --- DESKTOP VIEW --- */}
            {isDesktopOrLaptop && (
                <>
                    <div
                        className="fixed inset-0 bg-gray-600 z-40"
                        style={{
                            opacity: isFullscreen ? 0 : (forceFade ? 0 : 0.6),
                            transform: `translateY(${initialTranslate + dragOffset}px)`,
                            transition: isDragging ? "none" : "opacity 0.25s ease-out, transform 0.25s ease-out",
                        }}
                        onClick={() => { if (!isFullscreen) setShowModal(false); }}
                    />
                    <div className={`fixed flex w-full justify-center items-center z-50 ${isFullscreen ? 'inset-0' : 'bottom-0'}`}>
                        <div
                            ref={modalRef}
                            className={`overflow-y-auto bg-white flex w-full flex-col relative px-[30px] py-[30px] border border-gray-300 ${isFullscreen ? 'h-screen' : 'rounded-t-[16px] max-h-[80vh]'}`}
                            style={{
                                transform: isFullscreen ? `translateY(${isDragging ? dragOffset : 0}px)` : `translateY(${initialTranslate + dragOffset}px)`,
                                transition: isDragging ? "none" : "transform 0.25s ease-out",
                            }}
                        >
                            <button onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} className="flex justify-center w-full py-2 -mt-2 cursor-grab">
                                <div className="w-12 h-1 bg-gray-300 rounded-full mb-2" />
                            </button>
                            <div className='flex justify-between items-center mb-6'>
                                <div className='flex items-center gap-3'><GrProjects size={16}/><span className="text-[24px] font-semibold">Projects</span></div>
                                <button onClick={() => setShowModal(false)} className="text-[24px]">✕</button>
                            </div>
                            <div className="flex flex-row">
                                <NavMenu />
                                <GalleryGrid />
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* --- MOBILE VIEW --- */}
            {isTabletOrMobile && (
                <>
                    <div
                        className="fixed inset-0 bg-gray-600 z-40"
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
                            className={`bg-white flex w-full flex-col relative px-[15px] py-[35px] border border-gray-300 ${isFullscreen ? 'h-screen' : 'rounded-t-[16px] max-h-[85vh]'}`}
                            style={{
                                transform: isFullscreen ? `translateY(${isDragging ? dragOffset : 0}px)` : `translateY(${initialTranslate + dragOffset}px)`,
                                touchAction: 'none',
                                transition: isDragging ? "none" : "transform 0.25s ease-out",
                            }}
                        >
                            <button onTouchStart={handleTouchStart} className="flex justify-center w-full py-2 -mt-2"><div className="w-12 h-1 bg-gray-300 rounded-full mb-2" /></button>
                            <div className='flex justify-between items-center mb-4'>
                                <div className='flex items-center gap-2'><GrProjects size={12}/><span className="text-[20px] font-semibold">Projects</span></div>
                                <button onClick={() => setShowModal(false)} className="text-[22px]">✕</button>
                            </div>
                            <NavMenu />
                            <div className="flex-1 overflow-y-auto w-full"><GalleryGrid /></div>
                        </div>
                    </div>
                </>
            )}

            {/* --- LIGHTBOX OVERLAY --- */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeLightbox}>
                    <button className="absolute top-5 right-5 text-white text-4xl z-50 p-2" onClick={closeLightbox}>&times;</button>
                    <button className="absolute left-2 md:left-5 text-white text-[24px] z-50 p-2" onClick={prevSlide}>&#8249;</button>
                    <div className="relative max-w-4xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()} onTouchStart={onLbTouchStart} onTouchMove={onLbTouchMove} onTouchEnd={onLbTouchEnd}>
                        <img src={displayedImages[currentImageIndex]} alt="Full View" className="max-h-full max-w-full object-contain rounded shadow-2xl" />
                        <div className="absolute bottom-5 text-white/50 text-sm">{currentImageIndex + 1} / {displayedImages.length}</div>
                    </div>
                    <button className="absolute right-2 md:right-5 text-white text-[24px] z-50 p-2" onClick={nextSlide}>&#8250;</button>
                </div>
            )}
        </>
    );
}

export default Nigga;