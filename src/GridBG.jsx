import React from 'react';
import { useMediaQuery } from 'react-responsive';
const GridBackground = ({ children }) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width:  699px)' })
  return (

    <>
      {isDesktopOrLaptop &&
        <>
          <div className="relative min-h-screen w-full bg-white">

            {/* The Fading Grid Layer */}
            <div
              className="absolute inset-0 z-0 h-full w-full "
              style={{
                // Creates the grid lines
                backgroundImage: `
            linear-gradient(to right, #F2F2F2 1px, transparent 1px), 
            linear-gradient(to bottom, #F2F2F2 1px, transparent 1px)
          `,
                backgroundSize: '40px 40px', //  make squares bigger/smaller

                // fade effect fading out from the center
                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 80%)',
              }}
            ></div>

            {/* Your Portfolio Content */}
            <div className="relative z-10 flex flex-col items-center p-8">
              {children}
            </div>

          </div>

        </>
      }
      {isTabletOrMobile &&
        <>
          <div className="relative min-h-screen w-full bg-white">

            {/* The Fading Grid Layer */}
            <div
              className="absolute inset-0 z-0 h-full w-full "
              style={{
                // Creates the grid lines
                backgroundImage: `
            linear-gradient(to right, #F2F2F2 1px, transparent 1px), 
            linear-gradient(to bottom, #F2F2F2 1px, transparent 1px)
          `,
                backgroundSize: '40px 40px', //  make squares bigger/smaller

                // fade effect fading out from the center
                maskImage: 'radial-gradient(ellipse at center, black 80%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 80%, transparent 80%)',
              }}
            ></div>

            {/* Your Portfolio Content */}
            <div className="relative z-10 flex flex-col items-center p-8">
              {children}
            </div>

          </div>

        </>
      }
    </>
  );
};

export default GridBackground;