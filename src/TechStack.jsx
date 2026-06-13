
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook } from 'react-icons/fa'; // 'fa' stands for Font Awesome
import Knowledge from "./Knowledge";
import { GrFormNext, GrTechnology } from "react-icons/gr";
function TechStack() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  699px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const [showModal, setShowModal] = useState(false);
    const uiuix = ['Figma', 'Adobe XD', 'Sketch']
    const FrontEnd = ['React JS', 'Next.Js', 'Vite']
    const creative = ['Photoshop', 'Illustrator', 'Premiere Pro']

    return (


        <>

            {isDesktopOrLaptop &&


                <div className="flex justify-center items-center  ">

                    <div className="bg-white dark:bg-black hover:shadow-sm w-full flex-col relative
                     max-w-[270px]  rounded-[16px] 
                    px-[15px] pt-[10px] pb-[4px] mt-[5px] 
                    text-left border border-gray-300 ">

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <GrTechnology size={14} />
                                <h2 className="text-lg font-semibold ">Tech Stack</h2>

                            </div>
                            <button onClick={() => setShowModal(true)} className="flex items-center gap-1 cursor-pointer">
                                <h2 className='text-[12px] cursor-pointer'>View All</h2>
                                <GrFormNext size={16} />

                            </button>
                        </div>
                        <div className='mt-[5px] mb-[5px]'>

                            <h3 className='font-semibold text-[12px] ' >UI/UX</h3>
                        </div>

                        <div className='mb-[18px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>


                            {uiuix.map((design) => (
                                <h4 key={design} className='text-[10px] items-center px-[10px] duration-200 py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">'>{design}
                                </h4>
                            )
                            )}

                        </div>

                        <div className='mb-[5px]'>

                            <h3 className='font-semibold text-[12px] '>Frontend</h3>
                        </div>


                        <div className='mb-[18px]  flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>


                            {FrontEnd.map((front) => (
                                <h4 key={front} className='text-[10px] items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5  duration-200
                                duration-200">'>{front}</h4>
                            ))}



                        </div>

                        <div className='mb-[5px]'>

                            <h3 className='font-semibold text-[12px] '>Graphics & Video Editing</h3>
                        </div>
                        <div className='mb-[10px]  flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>


                            {creative.map((graphics) => (
                                <h4 key={graphics} className='text-[10px]  items-center px-[10px] py-[2px] flex flex-nowrap flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 duration-200 
                                duration-200">'>{graphics}</h4>
                            ))}



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

                    <div className=" bg-white dark:bg-black flex w-full flex-col relative max-w-[330px] gap-1 rounded-[16px] 
                    p-[15px] mt-[10px] text-left border border-gray-300 ">

                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <GrTechnology size={12} />
                                <h2 className="text-[16px] font-semibold ">Tech Stack</h2>

                            </div>
                            <button onClick={() => setShowModal(true)} className=' flex items-center gap-1 cursor-pointer'>
                                <h2 className='text-[10px] cursor-pointer'>View All</h2>
                                <GrFormNext size={14} />
                            </button>
                        </div>
                        <div className='mt-[5px] mb-[5px]'>

                            <h3 className='font-semibold text-[14px]' >UI/UX</h3>

                        </div>

                        <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>


                            {uiuix.map((design) => (
                                <h4 key={design} className='text-[12px] items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200'>{design}
                                </h4>
                            )
                            )}
                        </div>

                        <div className='mb-[5px]'>
                            <h3 className='font-semibold text-[12px] '>Frontend</h3>
                        </div>

                        <div className='mb-[10px]  flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>

                            {FrontEnd.map((front) => (
                                <h4 key={front} className='text-[12px] items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">'>{front}</h4>
                            ))}
                        </div>

                        <div className='mb-[5px]'>

                            <h3 className='font-semibold text-[12px] '>Graphics & Video Editing</h3>
                        </div>
                        <div className='mb-[10px]  flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>


                            {creative.map((graphics) => (<h4 key={graphics} className='text-[12px] items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">'>{graphics}</h4>
                            ))}



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