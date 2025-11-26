

import { useMediaQuery } from 'react-responsive';

import { FaFacebook } from 'react-icons/fa'; // 'fa' stands for Font Awesome


function TStackAll({ setShowModal }) {
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

 <div className="  flex w-full justify-center items-center   ">

                    <div className=" bg-white flex w-full flex-col relative max-w-[630px] gap-1 rounded-[16px] 
                    p-[15px] mt-[10px] text-left border border-gray-300 ">

<div className='flex justify-between item-center'>
                <div className='flex items-center gap-2'>
                    <span className='text-[14px]'>🧠</span>
                        <span className="text-[16px] font-semibold ">Tech Stack</span>
            
</div>
<button onClick={() => setShowModal(false)} className= 'cursor-pointer'>
<span className='text-[10px] cursor-pointer text-[16px]'>✕</span>
</button>
</div>
                        <div className='mt-[5px] mb-[5px]'>

                            <span className='font-semibold text-[14px]' >UI/UX</span>
                            
                        </div>
                    

                    <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                  
                                    <span className='text-[12px]'> Figma </span>

                                </div>
              

              
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    
                                    <span className='text-[12px]'> Adobe Xd</span>

                                </div>
                   </div>

 <div className='mb-[5px] '>

                            <span className='font-semibold text-[14px] '>Graphic Design / Illustration</span>
                        </div>
                    

                    <div className='mb-[10px]  flex  gap-2 cursor-pointer w-full rounded-[12px]  '>

                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Photoshop </span>

                                </div>
              

              
                              <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> Illustrator</span>

                                </div>

                            <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Canva</span>

                                </div>
                                
                   </div>

 <div className='mb-[5px]'>

                            <span className='font-semibold text-[14px]'>Video Editing</span>
                        </div>
                    
             <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> Premiere Pro </span>

                                </div>
              

              
                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                
                                    <span className='text-[12px]'> After Effects</span>

                                </div>

                       <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                     <span className='text-[12px]'> Capcut</span>
                                  

                                </div>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">
                                    <span className='text-[12px]'> Da Vinci Resolve</span>
</div>
                                </div>
                                
                 

 <div className='mb-[5px]'>

                            <span className='font-semibold text-[14px]'>FrontEnd</span>
                        </div>
                    

                      <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap '>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> HTML5</span>

                                </div>
              

              
                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                
                                    <span className='text-[12px]'> CSS</span>

                                </div>

                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> JavaScript</span>

                                </div>

                                    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> React</span>

                                </div>
                                   <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Tailwind</span>

                                </div>

                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Vite</span>

                                </div>
                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Next.js</span>

                                </div>
                                
                   </div>
                     <div className='mb-[5px] '>

                            <span className='font-semibold text-[14px]'>Developer Tools</span>
                        </div>
                    

                    <div className='flex gap-2  cursor-pointer w-full rounded-[12px] flex-wrap '>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> Git</span>

                                </div>
              

              
                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                
                                    <span className='text-[12px]'> Github</span>

                                </div>

                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> VS Code</span>

                                </div>

                                    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Jira</span>

                                </div>
                                   <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Teams</span>

                                </div>
                                
                   </div>
                 
                    </div>
                    </div>
            }

               {isTabletOrMobile &&


                <div className="  flex w-full justify-center items-center   ">

                    <div className=" bg-white flex w-full flex-col relative max-w-[330px] gap-1 rounded-[16px] 
                    p-[15px] mt-[10px] text-left border border-gray-300 ">

<div className='flex justify-between item-center'>
                <div className='flex items-center gap-2'>
                    <span className='text-[14px]'>🧠</span>
                        <span className="text-[16px] font-semibold ">Tech Stack</span>
            
</div>
<button onClick={() => setShowModal(false)} className= 'cursor-pointer'>
<span className='text-[10px] cursor-pointer text-[16px]'>✕</span>
</button>
</div>
                        <div className='mt-[5px] mb-[5px]'>

                            <span className='font-semibold text-[14px]' >UI/UX</span>
                            
                        </div>
                    

                    <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px]  '>

                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                  
                                    <span className='text-[12px]'> Figma </span>

                                </div>
              

              
                                <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    
                                    <span className='text-[12px]'> Adobe Xd</span>

                                </div>
                   </div>

 <div className='mb-[5px] '>

                            <span className='font-semibold text-[14px] '>Graphic Design / Illustration</span>
                        </div>
                    

                    <div className='mb-[10px]  flex  gap-2 cursor-pointer w-full rounded-[12px]  '>

                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Photoshop </span>

                                </div>
              

              
                              <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> Illustrator</span>

                                </div>

                            <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Canva</span>

                                </div>
                                
                   </div>

 <div className='mb-[5px]'>

                            <span className='font-semibold text-[14px]'>Video Editing</span>
                        </div>
                    
             <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap  '>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> Premiere Pro </span>

                                </div>
              

              
                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                
                                    <span className='text-[12px]'> After Effects</span>

                                </div>

                       <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                     <span className='text-[12px]'> Capcut</span>
                                  

                                </div>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">
                                    <span className='text-[12px]'> Da Vinci Resolve</span>
</div>
                                </div>
                                
                 

 <div className='mb-[5px]'>

                            <span className='font-semibold text-[14px]'>FrontEnd</span>
                        </div>
                    

                      <div className='mb-[10px] flex gap-2 cursor-pointer w-full rounded-[12px] flex-wrap '>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> HTML5</span>

                                </div>
              

              
                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                
                                    <span className='text-[12px]'> CSS</span>

                                </div>

                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> JavaScript</span>

                                </div>

                                    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> React</span>

                                </div>
                                   <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Tailwind</span>

                                </div>

                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Vite</span>

                                </div>
                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Next.js</span>

                                </div>
                                
                   </div>
                     <div className='mb-[5px] '>

                            <span className='font-semibold text-[14px]'>Developer Tools</span>
                        </div>
                    

                    <div className='flex gap-2  cursor-pointer w-full rounded-[12px] flex-wrap '>
    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                   
                                    <span className='text-[12px]'> Git</span>

                                </div>
              

              
                               <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">

                                
                                    <span className='text-[12px]'> Github</span>

                                </div>

                                 <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> VS Code</span>

                                </div>

                                    <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Jira</span>

                                </div>
                                   <div className="items-center px-[10px] py-[2px] flex flex-row items-center gap-2
                                rounded-[6px] border-1 border-gray-300  hover:-translate-y-0.5 
                                duration-200">


                                    <span className='text-[12px]'> Teams</span>

                                </div>
                                
                   </div>
                 
                    </div>

                  
                </div>
            }
        </>


    )


}
export default TStackAll