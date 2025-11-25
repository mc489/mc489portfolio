import React from "react";
import { useMediaQuery } from 'react-responsive'
export default function ExperienceTimeline() {


  
    const isDesktopOrLaptop = useMediaQuery({
            query: '(min-width: 1024px)'
        })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width:  1023px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const timeline = [
    {

      role: "BS Information Technology",
      school: "Pamantasan ng Lungsod ng Valenzuela",
      year: 2023,
      filled: true,
    },
 {
      role: "Graphic Designer ",
      school: "Valprints Advertising ",
      year: 2023,
      filled: false,
      duration:"2023"
    },
     {
      role: " Graphic Designer ",
      school: "Val-Aire Aiconditioning Trading ",
      year: 2023,
      filled: false,
      duration:"2023"
    },
    {
      role: "Digital Arts ",
      school: "STI College Caloocan",
      year: 2021,
      filled: false,

    },
  ];

  return (
<>

 {isDesktopOrLaptop &&
    <div className="flex justify-center items-center w-full ">
                    <div className="relative max-w-[620px] rounded-[16px] w-full p-[15px] mt-[10px] text-left border border-gray-300">

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">💼</span>
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>

    {/* Timeline */}
      <div className="relative ml-2">
        
        {/* ONE SINGLE VERTICAL LINE (Placed outside the map loop) */}
        {/* It spans from top-0 to bottom-0 of its relative parent */}
        <div className="absolute left-[4px] top-5 bottom-0 w-px bg-gray-300 z-0"></div>
        
        <div className="space-y-8 mt-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8">


              {/* Dot */}
              <span
                className={` items-center 
                  absolute -left-[2px] top-[8px]
                  w-[12px] h-[12px] rounded-full border-2 
                  transition-all duration-200 z-10
                  ${item.filled ? "bg-black" : "border-gray-300 bg-white hover:bg-black"}
                `}
              />

            

              {/* Content Row */}
              <div className="flex justify-between items-end mb-[15px] ">
                <div>
                  
                  <h3 className="text-black text-base font-semibold">{item.role}</h3>
                  <p className="text-black text-sm ">{item.school}</p>



                </div>

                {/* Year Badge */}
                <span className=" items-end text-black text-xs border-1 border-gray-300 px-3 py-1 rounded-full">
                  {item.year}
                </span>
              </div>

            </div>
          ))}

     
 </div>
      </div>
 </div>
    </div>
    }

    {isTabletOrMobile  &&
    <div className="flex justify-center items-center w-full ">
                    <div className="relative max-w-[330px] rounded-[16px] w-full p-[15px] mt-[10px] text-left border border-gray-300">

      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[16px]">💼</span>
        <h2 className="text-[16px] font-semibold">Experience</h2>
      </div>

    {/* Timeline */}
      <div className="relative ml-2">
        
        {/* ONE SINGLE VERTICAL LINE (Placed outside the map loop) */}
        {/* It spans from top-0 to bottom-0 of its relative parent */}
        <div className="absolute left-[4px] top-5 bottom-0 w-px bg-gray-300 z-0"></div>
        
        <div className="space-y-8 mt-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8">


              {/* Dot */}
              <span
                className={` items-center 
                  absolute -left-[2px] top-[4px]
                  w-[12px] h-[12px] rounded-full border-2 
                  transition-all duration-200 z-10
                  ${item.filled ? "bg-black" : "border-gray-300 bg-white hover:bg-black"}
                `}
              />

            

              {/* Content Row */}
              <div className="flex justify-between items-end mb-[15px] ">
                <div>
                  
                  <h3 className="text-black text-[12px] font-semibold">{item.role}</h3>
                  <p className="text-black text-[10px] ">{item.school}</p>



                </div>

                {/* Year Badge */}
                <span className=" items-end text-black text-[8px] border-1 border-gray-300 px-3 py-1 rounded-full">
                  {item.year}
                </span>
              </div>

            </div>
          ))}

     
 </div>
      </div>
 </div>
    </div>
    }
   
   
     </>
  );
}
