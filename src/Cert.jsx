

import { FaLinkedin, FaFacebook, FaGithub, FaBehance, FaYoutube } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { LuLink } from "react-icons/lu";

const Certificate = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  699px)' })


    const certificate = [
        { name: 'UI/UX for Beginners', url: 'https://github.com/mc489' },
        { name: 'ReactJS for Beginners', url: 'https://www.linkedin.com/in/mc-ganir-552264210/' },
        { name: 'Introduction to Front End Development', url: 'https://www.facebook.com/evmcpov' },

    ];

    const renderLinks = (textSize) => (
        certificate.map((link, index) => {
            const Icon = link.icon;
            return (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="mb-[4px] cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="flex flex-col text-left gap-2">
                            <span className={`${textSize}  `}>{link.name}</span>
                            <span className='text-[12px]' >simplilearn</span>
                        </div>
                    </button>
                </a>
            );
        })
    );


    return (
        <>
            {isDesktopOrLaptop &&
                <div className="flex items-center justify-center ">

                    <div className=" bg-white dark:bg-black hover:shadow-sm flex-col w-fit  gap-1 rounded-[16px] p-[15px] mt-[10px] text-left border border-gray-300">

                        <div className=" flex items-center justify-between relative gap-1 rounded-[16px] 
                         w-full  mt-[5px] gap-2  text-left">

                            <div className='flex items-center gap-2 mb-[10px] '>
                                <LuLink size={14} />
                                <span className="text-lg font-semibold">Recent Certification</span>
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
                        {renderLinks("text-[14px] ")}

                    </div>
                </div >
            }

            {
                isTabletOrMobile &&
                <div className="flex w-full justify-center items-center  ">

                    <div className="bg-white dark:bg-black flex flex-col relative max-w-[330px] gap-1 rounded-[16px] w-full p-[15px] mt-[2px] text-left border border-gray-300 ">



                        <div className='flex mb-2 gap-2 items-center'>

                            <LuLink size={12} />
                            <span className="text-[16px] font-semibold">Social Links</span>
                        </div>

                        {renderLinks(10, "text-[10px] ")}
                    </div>
                </div>
            }
        </>
    )
}
export default Certificate;