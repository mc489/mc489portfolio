import React from "react";

export default function ExperienceTimeline() {
  const timeline = [
    {

      role: "BS Information Technology",
      company: "Pamantasan ng Lungsod ng Valenzuela",
      year: new Date().getFullYear(),
      filled: true,
    },
    {
      role: "Digital Arts ",
      company: "STI College Caloocan",
      year: 2021,
      filled: false,
    },
  ];

  return (
    <div className="flex  justify-center mt-[16px] "> 
    <div className="  bg-white rounded-2xl border-1 border-gray-300 w-[424px] p-4 text-black">

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">💼</span>
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>

    {/* Timeline */}
      <div className="relative ml-2">
        
        {/* ONE SINGLE VERTICAL LINE (Placed outside the map loop) */}
        {/* It spans from top-0 to bottom-0 of its relative parent */}
        <div className="absolute  left-[4px] top-5 bottom-0 w-px bg-gray-300 z-0"></div>

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
                  <p className="text-black text-sm ">{item.company}</p>
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
  );
}
