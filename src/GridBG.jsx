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
          {/* ADDED dark:bg-gray-900 HERE */}
          <div className="relative min-h-screen w-full bg-white dark:bg-black transition-colors duration-300">

            {/* The Fading Grid Layer */}
            <div
              className="absolute inset-0 z-0 h-full w-full"
              style={{
                // Changed to a transparent gray so it looks good on both light and dark mode!
                backgroundImage: `
            linear-gradient(to right, rgba(150, 150, 150, 0.2) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(150, 150, 150, 0.2) 1px, transparent 1px)
          `,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 80%)',
              }}
            ></div>

            {/* Your Portfolio Content */}
            <div className="relative z-10">
              {children}
            </div>

          </div>
        </>
      }

      {isTabletOrMobile &&
        <>
          {/* ADDED dark:bg-gray-900 HERE */}
          <div className="relative min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">

            {/* The Fading Grid Layer */}
            <div
              className="absolute inset-0 z-0 h-full w-full"
              style={{
                // Changed to a transparent gray
                backgroundImage: `
            linear-gradient(to right, rgba(150, 150, 150, 0.2) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(150, 150, 150, 0.2) 1px, transparent 1px)
          `,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 90%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 90%, transparent 80%)',
              }}
            ></div>

            {/* Your Portfolio Content */}
            <div className="relative z-10">
              {children}
            </div>

          </div>
        </>
      }
    </>
  );
};

export default GridBackground;