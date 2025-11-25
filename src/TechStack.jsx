

import { useMediaQuery } from 'react-responsive';

import { FaFacebook } from 'react-icons/fa'; // 'fa' stands for Font Awesome

function TechStack() {
  const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  1023px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (


        <>

            {isDesktopOrLaptop &&


                <div className="flex w-full justify-center items-center  ">

                    <div className=" flex w-full flex-col relative max-w-[620px] gap-1 rounded-[16px] 
                    p-[15px] mt-[10px] text-left border border-gray-300 ">


                        <span className="text-lg font-semibold ">Tech Stack</span>


                        <div className='mt-[5px] mb-[10px]'>

                            <span className='font-semibold ' >UI/UX</span>
                        </div>
                    

                    <div className='mb-[15px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>

                                <div className="items-center px-[15px] py-[2px] flex flex-row items-center gap-2
                                rounded-[16px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> Figma </span>

                                </div>
              

              
                                <div className="items-center px-[15px]  flex flex-row items-center
                                  rounded-[16px] gap-2 border-1 border-gray-300  hover:-translate-y-0.5 
                                  duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> Adobe Xd</span>

                                </div>
                   </div>

 <div className='mb-[10px]'>

                            <span className='font-semibold '>Graphic Design / Illustration</span>
                        </div>
                    

                    <div className='mb-[15px]  flex gap-2 cursor-pointer w-full rounded-[12px]  '>

                                   <div className="items-center  gap-2 px-[15px] py-[2px] flex flex-row items-center gap-
                                rounded-[16px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> Photoshop </span>

                                </div>
              

              
                                <div className="items-center px-[15px] flex flex-row items-center
                                  rounded-[16px] gap-2 border-1 border-gray-300 hover:-translate-y-0.5 
                                  duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> Illustrator</span>

                                </div>

                                 <div className="items-center px-[15px] flex flex-row items-center
                                  rounded-[16px] gap-2 border-1 border-gray-300  hover:-translate-y-0.5 
                                  duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> Canva</span>

                                </div>
                                
                   </div>

 <div className='mb-[10px]'>

                            <span className='font-semibold'>Video Editing</span>
                        </div>
                    

                    <div className='flex gap-2  cursor-pointer w-full rounded-[12px]  '>
     <div className="items-center px-[15px] py-[2px] flex flex-row items-center gap-2
                                rounded-[16px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> Premiere Pro </span>

                                </div>
              

              
                                <div className="items-center px-[15px] flex flex-row items-center
                                  rounded-[16px] gap-2 border-1 border-gray-300  hover:-translate-y-0.5 
                                  duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> After Effects</span>

                                </div>

                                 <div className="items-center px-[15px] flex flex-row items-center
                                  rounded-[16px] gap-2 border-1 border-gray-300  hover:-translate-y-0.5 
                                  duration-200">

                                    <FaFacebook size={14} color="black" />
                                    <span className='text-[14px]'> Capcut</span>

                                </div>
                                
                   </div>

                    </div>
                </div>
            }
        </>


    )


}
export default TechStack