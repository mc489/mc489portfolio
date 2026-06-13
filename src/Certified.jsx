import { useMediaQuery } from 'react-responsive';
import { LuBadgeCheck } from "react-icons/lu";
import uiux from "./assets/uiuxcert.jpg";
import frontend from "./assets/frontendcert.jpg";
import uiux2 from "./assets/uiuxcert2.png";
import webdev from "./assets/webdevcert.png";

const Certified = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    });
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 699px)'
    });

    // 1. Define the data array for the visual cards
    const certificationsData = [
        {
            id: 1,
            title: "UI/UX Design",
            url: "https://simpli-web.app.link/e/IuFKoAM5Q2b",
            image: uiux,
            alt: "UI/UX Certification"
        },
        {
            id: 2,
            title: "Frontend Dev",
            url: "https://simpli-web.app.link/e/tQbmuihXw3b",
            image: frontend,
            alt: "Frontend Certification"
        },
           {
            id: 3,
            title: "UX Design",
            url: "https://www.testdome.com/certificates/594fcfff6f65426b874b3b7392fa800c",
            image: uiux2,
            alt: "UX Certification"
        },
        {
            id: 4,
            title: "Web Dev",
            url: "https://www.testdome.com/certificates/b916ac880e3e488daa8603090e01bd6e",
            image: webdev,
            alt: "UX Certification"
        }
    ];




    return (
        <>
            {isDesktopOrLaptop &&
                <div className="flex items-center justify-center ">
                    <div className="bg-white dark:bg-black hover:shadow-sm flex-col w-fit gap-1 rounded-[16px] p-[15px] mt-[10px] text-left border border-gray-300">

                        <div className="flex items-center justify-between relative rounded-[16px] w-full mt-[5px] gap-2 text-left">
                            <div className='flex items-center gap-2 mb-[10px]'>
                                <LuBadgeCheck size={14} />
                                <h2 className="text-lg font-semibold">Recent Certification</h2>
                            </div>
                        </div>

                        <div className="w-[578px] max-w-full h-auto items-center grid grid-cols-4 gap-4">

                            {/* 2. Map through the certificationsData array */}
                            {certificationsData.map((cert) => (
                                <div key={cert.id} className="flex  flex-col gap-2">
                                    <h3 className="text-sm font-medium text-black dark:text-white ml-1">
                                        {cert.title}
                                    </h3>
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <button className="w-full  cursor-pointer hover:-translate-y-0.5 duration-200">
                                            <img
                                                src={cert.image}
                                                alt={cert.alt}
                                                className="w-full  h-[100px] rounded-[12px]"
                                            />
                                        </button>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            }
            {
                isTabletOrMobile &&
                <div className="flex w-full justify-center items-center gap-2 ">

                    <div className="bg-white dark:bg-black flex flex-col relative 
                    max-w-[330px] gap-1 rounded-[16px] w-full p-[15px]  mt-[10px]  text-left border border-gray-300 ">


                        <div className='flex mb-2 gap-2 items-center'>

                            <LuBadgeCheck size={12} />
                            <h2 className="text-[16px] font-semibold">Recent Certification</h2>
                        </div>


                        <div className="w-[578px] max-w-full h-auto gap-4">

                            {/* 2. Map through the certificationsData array */}
                            {certificationsData.map((cert) => (
                                <div key={cert.id} className="flex flex-col gap-2">
                                    <h3 className="text-sm font-medium text-black dark:text-white ml-1">
                                        {cert.title}
                                    </h3>
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <button className="w-full cursor-pointer hover:-translate-y-0.5 duration-200">
                                            <img
                                                src={cert.image}
                                                alt={cert.alt}
                                                className="w-full rounded-[12px]"
                                            />
                                        </button>
                                    </a>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            }
        </>
    )
}
export default Certified;