
import { useMediaQuery } from 'react-responsive';

function Projects() {
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

                <div className=" flex flex-col  items-center justify-center mt-5">

                    <div className="py-[12px] flex flex-col w-full max-w-[9850px] px-[15px] justify-center 
                    items-center rounded-[16px] border-1 border-gray-300 gap-2">


                        <div className=" flex items-center justify-between relative gap-1 rounded-[16px] 
                         w-full  mt-[5px] gap-2  text-left">
                            <span className="text-lg font-bold">Recent Projects</span>
                            <span className='text-[12px] cursor-pointer'>View All</span>
                        </div>

                        <div className=' w-full  px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
                            <h1 className='text-[16px] font-bold   mb-[5px]'>
                                E-Compare
                            </h1>
                            <p className='text-[12px]'>
                                Comparing products between by Lazada and Shopee
                            </p>
                        </div>

                        <div className=' w-full px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
                            <h1 className='font-bold ' >CMEN</h1>
                            <p className='text-[12px]'>
                                A drag and drop survey creation website
                            </p>
                        </div>

                        <div className=' w-full px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
                            <h1 className='font-bold text-[16px]'>ELAD KICKS</h1>
                            <p className='text-[12px]'>
                                A information website for footwear business
                            </p>
                        </div>
                    </div></div>


            }

            {isTabletOrMobile &&

                <div className=" flex w-full flex-col items-center justify-center mt-2">

                    <div className=" flex flex-col relative max-w-[330px] gap-1 
                              rounded-[16px] w-full p-[15px] mt-[2px] text-left border border-gray-300 mb-[5px]">


                        <div className=" flex items-center justify-between relative gap-1 rounded-[16px] 
                         w-full  mt-[5px] mb-[10px] gap-2 text-left">
                            <span className="text-[16px] font-semibold">Recent Projects</span>
                            <span className='text-[10px] cursor-pointer'>View All</span>
                        </div>

                        <a href='https://ecompare-asdas.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <button className='w-full cursor-pointer'>
                                <div className='px-[15px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
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

                                    <h1 className='font-semibold text-[14px] mb-[5px] ' >CMEN</h1>
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
                                        A information website for footwear business
                                    </p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>


            }
        </>
    )

}

export default Projects