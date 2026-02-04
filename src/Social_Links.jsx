
import { FaLinkedin } from 'react-icons/fa'; // 'fa' stands for Font Awesome
import { FaFacebook } from 'react-icons/fa'; // 'fa' stands for Font Awesome
import { FaGithub } from 'react-icons/fa'; // 'fa' for Font Awesome
import { FaBehance } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa'; // 'fa' for Font Awesome
import { useMediaQuery } from 'react-responsive';
import { LuLink } from "react-icons/lu";
import { icon } from '@fortawesome/fontawesome-svg-core';
import { color } from 'framer-motion';

function SocialLinks() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  699px)' })


    const socialLinks = [{ name: 'mc489', icon: FaGithub, color: 'black', url: 'https://github.com/mc489'},
    { name: 'MC Ganir', icon: FaLinkedin, color: 'black', url: 'https://www.linkedin.com/in/mc-ganir-552264210/'},
    { name: 'MC Ganir', icon: FaFacebook, color: 'black', url: 'https://www.facebook.com/evmcpov' },
    { name: 'mc ganir', icon: FaBehance, color: 'black', url: 'https://www.behance.net/mcganir'},
    { name: 'mcjemuelganir', icon: FaYoutube, color: 'black', url:'https://www.youtube.com/@mcjemuelganir' },
    ];
    
    const renderLinks = (iconSize, textSize) => (
        socialLinks.map((link, index) => {
            const Icon = link.icon; 
            return (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="mb-[4px] cursor-pointer w-full rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                        <div className="flex flex-row items-center gap-2">
                            <Icon size={iconSize} style={{ color: link.color }} />
                            <span className={`${textSize} text-black`}>{link.name}</span>
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

                    <div className=" hover:shadow-sm flex-col w-full relative max-w-[250px]  gap-1 rounded-[16px] p-[15px] mt-[10px] text-left border border-gray-300">

                        <div className='flex items-center gap-2 mb-[10px] '>
                            <LuLink size={14} color="black" />
                            <span className="text-lg font-semibold">Social Links</span>
                        </div>
                            {renderLinks(14, "text-[14px] ")}
                       
                    </div>
                </div>
            }

            {isTabletOrMobile &&
                <div className="flex w-full justify-center items-center  ">

                    <div className=" flex flex-col relative max-w-[330px] gap-1 rounded-[16px] w-full p-[15px] mt-[2px] text-left border border-gray-300 ">



                        <div className='flex mb-2 gap-2 items-center'>

                            <LuLink size={12} color="black" />
                            <span className="text-[16px] font-semibold">Social Links</span>
                        </div>

                         {renderLinks(10, "text-[10px] ")}
                    </div>
                </div>
            }
        </>
    )
}
export default SocialLinks