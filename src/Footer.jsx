import { useMediaQuery } from 'react-responsive';


function Footer() { const isDesktopOrLaptop = useMediaQuery({
            query: '(min-width: 1024px)'
        })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width:  1023px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
    <>
        {isDesktopOrLaptop &&
        <footer className="mt-[50px] mb-[10px]  cursor-default text-center">
              <hr className="w-[40%] mx-auto border-gray-300 mb-[20px]" ></hr>
            <p >&copy; {new Date().getFullYear()} MC Ganir. All rights reserved</p>
        </footer>
        
        }

         {isTabletOrMobile &&
        <footer className="mt-[50px] mb-[10px]  cursor-default text-center">
              <hr className="w-[80%] mx-auto border-gray-300 mb-[20px]" ></hr>
            <p className='text-[12px]'>&copy; {new Date().getFullYear()} MC Ganir. All rights reserved</p>
        </footer>
        
        }
        </>
    )
    
}

export default Footer