
import { FaLinkedin } from 'react-icons/fa'; // 'fa' stands for Font Awesome
import { FaFacebook } from 'react-icons/fa'; // 'fa' stands for Font Awesome
import { FaGithub } from 'react-icons/fa'; // 'fa' for Font Awesome
import { FaBehance } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa'; // 'fa' for Font Awesome
import { useMediaQuery } from 'react-responsive';

function SocialLinks() {
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
        <div className="flex  justify-center items-center  ">

            <div className=" flex flex-col relative max-w-[320px] gap-1 rounded-[16px] w-full p-[15px] mt-[10px] text-left border border-gray-300">
                <span className="text-lg">Social Links</span>



                <a href="https://web.facebook.com/evmcpov" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">

                            <FaFacebook size={18} color="black" />
                            <span> MC Ganir</span>

                        </div>
                    </button>
                </a>


                <a href=" https://www.linkedin.com/in/mc-ganir-552264210/" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5  duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">

                            <FaLinkedin size={18} color="black" />
                            <span>

                                MC Ganir
                            </span>
                        </div>
                    </button>
                </a>


                <a href=" https://github.com/mc489" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">
                            <FaGithub size={18} color="#181717" />
                            <span>

                                @mc489     </span>
                        </div>
                    </button>
                </a>


                <a href=" https://www.behance.net/mcganir" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">
                            <FaBehance size={18} color="black" />
                            <span>
                                mc ganir
                            </span>
                        </div>
                    </button>
                </a>


                <a href=" https://www.youtube.com/@mcjemuelganir" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">
                            <FaYoutube size={18} color="black" />
                            <span>
                                mcjemuelganir
                            </span>
                        </div>


                    </button>
                </a>

            </div>
        </div>
        }

          {isTabletOrMobile &&
        <div className="flex  justify-center items-center  ">

            <div className=" flex flex-col relative max-w-[320px] gap-1 rounded-[16px] w-full p-[15px] mt-[10px] text-left border border-gray-300 ">

                <div className='flex mb-2'>
                <span className="text-lg text-[16px] font-bold">Social Links</span>

</div>

                <a href="https://web.facebook.com/evmcpov" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">

                            <FaFacebook size={10} color="black" />
                            <span className='text-[10px]'> MC Ganir</span>

                        </div>
                    </button>
                </a>


                <a href=" https://www.linkedin.com/in/mc-ganir-552264210/" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5  duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">

                            <FaLinkedin size={10} color="black" />
                            <span className='text-[10px]'>

                                MC Ganir
                            </span>
                        </div>
                    </button>
                </a>


                <a href=" https://github.com/mc489" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">
                            <FaGithub size={10} color="#181717" />
                            <span className='text-[10px]'>

                                @mc489     </span>
                        </div>
                    </button>
                </a>


                <a href=" https://www.behance.net/mcganir" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">
                            <FaBehance size={10} color="black" />
                            <span className='text-[10px]'>
                                mc ganir
                            </span>
                        </div>
                    </button>
                </a>


                <a href=" https://www.youtube.com/@mcjemuelganir" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="items-center flex flex-row items-center gap-2 ">
                            <FaYoutube size={10} color="black" />
                            <span className='text-[10px]'>
                                mcjemuelganir
                            </span>
                        </div>


                    </button>
                </a>

            </div>
        </div>
        }
        </>
    )
}
export default SocialLinks