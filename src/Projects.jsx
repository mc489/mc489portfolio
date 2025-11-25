
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

                <div className="flex flex-col  justify-center items-center mt-5 ">
                    <div className="flex flex-col max-w-[630px] px-[20px] justify-center 
                    items-center rounded-[16px] border-1 border-gray-300 ">


                        <div className="  relative  gap-1 rounded-[16px] 
                         w-full p-[15px] mt-[10px] text-left">
                            <span className="text-lg font-bold">Recent Projects</span>

                        </div>

                        <div className='  px-[20px] py-[10px] text-left
                         border-1 border-gray-300 rounded-[16px]'>
                            <h1 className='text-[16px] mb-[5px]'>
                                E-Compare
                            </h1>
                            <p className='text-[12px]'>
                                Comparing products between by Lazada and Shopee
                            </p>
                        </div>

                        <div>
                            <h1>CMEN</h1>
                            <p>
                                A drag and drop survey creation website
                            </p>
                        </div>

                        <div>
                            <h1>Elad Kicks</h1>
                            <p>
                                A information website for footwear business
                            </p>
                        </div>
                    </div></div>


            }
        </>
    )

}

export default Projects