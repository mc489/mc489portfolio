
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook } from 'react-icons/fa'; // 'fa' stands for Font Awesome
import Knowledge from "./Knowledge";

function TechStack() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  1023px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const [showModal, setShowModal] = useState(false);
    return (


        <>

            {isDesktopOrLaptop &&


                <div className="flex justify-center items-center  ">

                    <div className="  w-full flex-col relative
                     max-w-[270px]  rounded-[16px] 
                    px-[15px] pt-[10px] pb-[4px] mt-[5px] 
                    text-left border border-gray-300 ">

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <span className='text-[16px]'>🧠</span>
                                <span className="text-lg font-semibold ">Tech Stack</span>

                            </div>
                            <button onClick={() => setShowModal(true)} className="cursor-pointer">
                                <span className='text-[12px] cursor-pointer'>View All</span>
                            </button>
                        </div>
                        <div className='mt-[5px] mb-[5px]'>

                            <span className='font-semibold text-[12px] ' >UI/UX</span>

                        </div>


                        <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>

                            <div className="items-center px-[15px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                <span className='text-[10px]'> Figma </span>

                            </div>



                            <div className="items-center px-[15px]  flex flex-row items-center
                                rounded-[6px] gap-2 border-1 border-gray-300  hover:-translate-y-0.5 
                                  duration-200">


                                <span className='text-[10px]'> Adobe Xd</span>

                            </div>
                             <div className="items-center px-[15px]  flex flex-row items-center
                                rounded-[6px] gap-2 border-1 border-gray-300  hover:-translate-y-0.5 
                                  duration-200">


                                <span className='text-[10px]'> Sketch</span>

                            </div>
                            

                            
                        </div>

                        <div className='mb-[5px]'>

                            <span className='font-semibold text-[12px] '>Graphic Design / Illustration</span>
                        </div>


                        <div className='mb-[10px]  flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>

                            <div className="items-center gap-2 px-[15px] py-[2px] flex flex-row items-center gap-
                               rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                <span className='text-[10px]'> Photoshop </span>

                            </div>



                            <div className="items-center px-[15px] flex flex-row items-center
                                rounded-[6px] gap-2 border-1 border-gray-300 hover:-translate-y-0.5 
                                  duration-200">


                                <span className='text-[10px]'> Illustrator</span>

                            </div>

                         
 <div className='mb-[5px]'>

                            <span className='font-semibold text-[12px] '>Graphic Design / Illustration</span>
                        </div>


                        <div className='mb-[10px]  flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>

                            <div className="items-center gap-2 px-[15px] py-[2px] flex flex-row items-center gap-
                               rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                <span className='text-[10px]'> Photoshop </span>

                            </div>



                            <div className="items-center px-[15px] flex flex-row items-center
                                rounded-[6px] gap-2 border-1 border-gray-300 hover:-translate-y-0.5 
                                  duration-200">


                                <span className='text-[10px]'> Illustrator</span>

                            </div> </div>
    
                        
                        </div>

                    </div>
                    <AnimatePresence>
                        {showModal && (
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs"
                            >


                                <Knowledge setShowModal={setShowModal} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            }

            {isTabletOrMobile &&


                <div className="flex w-full justify-center items-center  ">

                    <div className=" flex w-full flex-col relative max-w-[330px] gap-1 rounded-[16px] 
                    p-[15px] mt-[10px] text-left border border-gray-300 ">

                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='text-[14px]'>🧠</span>
                                <span className="text-[16px] font-semibold ">Tech Stack</span>

                            </div>
                            <button onClick={() => setShowModal(true)} className='cursor-pointer'>
                                <span className='text-[10px] cursor-pointer'>View All</span>
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

                        <div className='mb-[5px]'>

                            <span className='font-semibold text-[14px] '>Graphic Design / Illustration</span>
                        </div>


                        <div className='mb-[10px]  flex gap-2 cursor-pointer w-full rounded-[12px]  '>

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


                        <div className='flex gap-2  cursor-pointer w-full rounded-[12px]  '>
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

                        </div>

                    </div>

                    <AnimatePresence>
                        {showModal && (
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="fixed inset-0 z-50 flex items-center justify-center "
                            >


                                <Knowledge setShowModal={setShowModal} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            }
        </>


    )


}
export default TechStack