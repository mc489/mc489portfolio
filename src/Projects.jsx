
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from "framer-motion";
import Nigga from "./NIGGA";
import { GrProjects } from "react-icons/gr";
import ispecmn from "./assets/projectsimg/ispecmnbg.png"
import membersqr from "./assets/projectsimg/membersqr.png"
import ecomparebg from "./assets/projectsimg/ecomparebg.png"
function Projects() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  699px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
const [targetImage, setTargetImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {isDesktopOrLaptop &&

                <div className=" flex flex-col items-center justify-center mt-3">

                    <div className="bg-white hover:shadow-sm py-[12px] w-full max-w-[650px]  flex flex-col  px-[15px] justify-center 
                    items-center rounded-[16px] border-1 border-gray-300 gap-2">


                        <div className=" flex items-center justify-between relative gap-1 rounded-[16px] 
                         w-full  mt-[5px] gap-2  text-left">

                            <div className='flex items-center gap-2 '>
                                <GrProjects size={12} color="black" />
                                <span className="text-lg font-semibold">Recent Projects</span>
                            </div>
              <button 
    onClick={() => { 
    
        setShowModal(true); 
    }} 
    className='cursor-pointer'
>
    <span className='text-[10px] cursor-pointer'>View All</span>
</button>
                        </div>
                        <a href="https://ispecmn.site/ " target="_blank" rel="noopenner noreferrer">
                            <button  className='relative overflow-hidden w-[320px] border border-gray-300 rounded-[16px] cursor-pointer hover:-translate-y-0.5 duration-200 text-left'>
                                <img
                                    src={ispecmn}
                                    alt="Ispecmn background"

                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                />
                                <div className="relative z-10 px-[20px] py-[10px] text-white">
                                    <div className=" flex items-center justify-between mb-[5px]">
                                        <h1 className='font-bold'>Ispecmn</h1>
                                        <span className="text-[10px] font-semibold italic text-white/80">ispecmn.site</span>
                                    </div>
                                    <p className='text-[10px]'>
                                        Drag and drop forms creation website with AI.
                                    </p>
                                </div>
                            </button>
                        </a>

                      <button 
   onClick={() => { setTargetImage({ index: 3, category: "Apps" }); setShowModal(true); }}
    className='relative overflow-hidden w-[320px] text-left border-1 border-gray-300 rounded-[16px] cursor-pointer hover:-translate-y-0.5 duration-200'
>
                            <img
                                src={membersqr}
                                alt="rcy background"

                                className="absolute inset-0 w-full h-full object-cover z-0"
                            />
                            <div className="relative z-10 px-[20px] py-[10px] text-white">
                                <div className="flex items-center justify-between mb-[5px]">
                                    <h1 className='font-bold ' >PLV-RCYC App</h1>
                                    <span className="text-[10px] font-semibold italic text-white/80">Deployment</span>
                                </div>
                                <p className='text-[10px]'>
                                    Management System: Events, Attendance, and Membership.
                                </p>
                            </div>
                        </button>


                        <a href="https://ecompare.site/ " target="_blank" rel="noopenner noreferrer">
                            <button  className='relative overflow-hidden w-[320px]   text-left
                         border-1 border-gray-300 rounded-[16px] cursor-pointer 
                       hover:-translate-y-0.5  duration-200'>
                                <img
                                    src={ecomparebg}
                                    alt="Ispecmn background"

                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                />
                                <div className="relative z-10 px-[20px] py-[10px] text-white">

                                    <div className="flex items-center justify-between mb-[5px]">
                                        <h1 className='text-[16px] font-bold   '>
                                            E-Compare
                                        </h1>
                                        <span className="text-[10px] font-semibold italic text-white/80">ecompare.site</span>
                                    </div>
                                    <p className='text-[10px]'>
                                        Comparing products between Lazada and Shopee
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>


                   <AnimatePresence>
    {showModal && (
        <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <Nigga setShowModal={setShowModal} initialImage={targetImage}/> 
        </motion.div>
    )}
</AnimatePresence>
                </div>


            }

            {isTabletOrMobile &&

                <div className=" flex w-full flex-col items-center justify-center mt-2">

                    <div className="bg-white flex flex-col relative max-w-[330px] gap-1 
                              rounded-[16px] w-full p-[15px] mt-[2px] text-left border border-gray-300 mb-[5px]">


                        <div className=" flex items-center justify-between relative gap-1 rounded-[16px] 
                         w-full  mt-[5px] mb-[10px] gap-2 text-left">


                            <div className='flex items-center gap-2 '>
                                <GrProjects size={10} color="black" />
                                <span className="text-[16px] font-semibold">Recent Projects</span>
                            </div>
                            <button onClick={() => setShowModal(true)} className='cursor-pointer'>
                                <span className='text-[10px] cursor-pointer'>View All</span>
                            </button>
                        </div>
                        <a href="https://ispecmn.site/ " target="_blank" rel="noopenner noreferrer">

                            <button onClick={() => setShowModal(true)}
                            
                            className='relative overflow-hidden w-full  py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
                        
                             <img
                                    src={ispecmn}
                                    alt="Ispecmn background"

                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                />
                                   <div className="relative z-10 px-[15px] py-[2px] text-white">

                                    <div className="flex items-center justify-between mb-[5px]">
                                        <h1 className='font-semibold text-[14px] mb-[5px]' >Ispecmn</h1>
                                        <span className="text-[8px] font-semibold italic text-white/80">ispecmn.site</span>
                                    </div>
                                    <p className='text-[10px]'>
                                        Drag and drop forms creation website with AI.
                                    </p>
                                </div>
                              
                            </button>
                        </a>

                        <button  onClick={() => { setTargetImage({ index: 3, category: "Apps" }); setShowModal(true); }}  className='relative overflow-hidden py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>

                      
                            <img
                                    src={membersqr}
                                    alt="RCYC background"

                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                />
                                   <div className="relative z-10 px-[15px] py-[2px] text-white">
                                <div className="flex items-center justify-between mb-[5px]">
                                    <h1 className='font-semibold text-[14px] mb-[5px]' >PLV-RCYC App</h1>
                                    <span className="text-[8px] font-semibold italic text-white/80">Deployment</span>
                                </div>
                                <p className='text-[10px] whitespace-nowrap'>
                                    Management System: Events, Attendance, and Membership.
                                </p>
                            </div>
                        </button>



                        <a href='https://ecompare.site/' target='_blank' rel='noopener noreferrer'>
                            <button className='relative overflow-hidden w-full  py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
                         

                             <img
                                    src={ecomparebg}
                                    alt="RCYC background"

                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                />

                                <div className="relative z-10 px-[15px] py-[2px] text-white">
                                    <div className="flex items-center justify-between mb-[5px]">
                                        <h1 className='text-[14px] font-semibold'>
                                            E-Compare
                                        </h1>
                                        <span className="text-[8px] font-semibold italic text-white/80">
                                            ecompare.site</span>

                                    </div>
                                    <p className='text-[10px]'>
                                        Comparing products between by Lazada and Shopee
                                    </p>
                              </div>
                            </button>
                        </a>

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
                                <Nigga setShowModal={setShowModal} initialImage={targetImage} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


            }
        </>
    )

}

export default Projects