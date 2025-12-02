
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from "framer-motion";
import Nigga from "./NIGGA";


function Projects() {
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

                <div className=" flex flex-col items-center justify-center mt-3">

                    <div className="py-[12px] w-full max-w-[660px]  flex flex-col  px-[15px] justify-center 
                    items-center rounded-[16px] border-1 border-gray-300 gap-2">


                        <div className=" flex items-center justify-between relative gap-1 rounded-[16px] 
                         w-full  mt-[5px] gap-2  text-left">

                             <div className='flex items-center gap-2 '>  
                            <span className="text-[16px]"> 🗂️</span>
                            <span className="text-lg font-semibold">Recent Projects</span>
                            </div> 
                              <button onClick={() => setShowModal(true)} className='cursor-pointer'>
                            <span className='text-[12px] cursor-pointer'>View All</span>
                            </button>
                        </div>

                        <div className=' w-full px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px] cursor-pointer w-full
                       px-2 py-2 hover:-translate-y-0.5  duration-200'>
                            <h1 className='text-[16px] font-bold   mb-[5px]'>
                                E-Compare
                            </h1>
                            <p className='text-[12px]'>
                                Comparing products between by Lazada and Shopee
                            </p>
                        </div>

                        <div className=' w-full px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px] cursor-pointer w-full
                       px-2 py-2 hover:-translate-y-0.5  duration-200'>
                            <h1 className='font-bold ' >CMEN</h1>
                            <p className='text-[12px]'>
                                A drag and drop survey creation website
                            </p>
                        </div>

                        <div className=' w-full px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px] cursor-pointer w-full
                       px-2 py-2 hover:-translate-y-0.5  duration-200'>
                            <h1 className='font-bold text-[16px]'>ELAD KICKS</h1>
                            <p className='text-[12px]'>
                                An information website for footwear business
                            </p>
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
                   <Nigga setShowModal={setShowModal}/>
                                </motion.div>
                              )}
                            </AnimatePresence>  
                    </div>


            }

            {isTabletOrMobile &&

                <div className=" flex w-full flex-col items-center justify-center mt-2">

                    <div className=" flex flex-col relative max-w-[330px] gap-1 
                              rounded-[16px] w-full p-[15px] mt-[2px] text-left border border-gray-300 mb-[5px]">


                        <div className=" flex items-center justify-between relative gap-1 rounded-[16px] 
                         w-full  mt-[5px] mb-[10px] gap-2 text-left">


                             <div className='flex items-center gap-2 '>  
                             <span className='text-[14px]'>🗂️</span>
                            <span className="text-[16px] font-semibold">Recent Projects</span>
                            </div> 
                          <button onClick={() => setShowModal(true)} className='cursor-pointer'>
                            <span className='text-[10px] cursor-pointer'>View All</span>
                            </button>
                        </div>

                        <a href='https://ecompare-asdas.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <button className='w-full cursor-pointer '>
                                <div className='px-[15px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px] '>
                                    <h1 className='text-[14px] font-semibold  mb-[5px]'>
                                        E-Compare
                                    </h1>
                                    <p className='text-[10px]'>
                                        Comparing products between by Lazada and Shopee
                                    </p>
                                </div>
                            </button>
                        </a>


                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <button className='w-full cursor-pointer'>
                                <div className='px-[15px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>

                                    <h1 className='font-semibold text-[14px] mb-[5px]' >CMEN</h1>
                                    <p className='text-[10px]'>
                                        A drag and drop survey creation website
                                    </p>
                                </div>
                            </button>
                        </a>


                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <button className='w-full cursor-pointer'>
                                <div className='px-[15px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
                                    <h1 className='font-semibold text-[14px] mb-[5px]'>ELAD KICKS</h1>
                                    <p className='text-[10px]'>
                                        An information website for footwear business
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
                    <div className="px-10">
                  <div className=" bg-white flex w-full flex-col relative max-w-[620px] gap-1 rounded-[16px] 
                    p-[20px] mt-[10px] text-left border border-gray-300 ">
                     
                     <div className="flex justify-between items-center">
                        <div className="flex flex-row gap-2 items-center">

                            <span>🛠️</span>
                             <h1 className="font-semibold text-[16px]">Not Available</h1>
                            
                        </div>
                   

                         <button onClick={() => setShowModal(false)} className= 'cursor-pointer '>
                             <span className='text-[10px] cursor-pointer text-[16px]'>✕</span>
                        </button>
                           </div>
                             <span className="text-[10px]">Look, I'm gonna be straight with you, this part's a no-go right now. 
                            It's in the hands of 
                                  <a href=" https://github.com/mc489" target="_blank" rel="noopener noreferrer">
                                <span className="font-semibold"> @mc489. </span> 
                                </a>
                       But you know what? Next time you swing by, it just might be working. 
                       <span className="font-semibold"> Thanks.</span></span>
                              
                               </div>
                               </div>
                                </motion.div>
                              )}
                            </AnimatePresence>  
                </div>


            }
        </>
    )

}

export default Projects