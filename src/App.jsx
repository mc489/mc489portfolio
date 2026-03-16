import { useState, useEffect } from 'react';
import { ChevronRight, Grid, Moon, Sun } from 'lucide-react';
import About from "./About"
import Header from "./Header"
import Footer from "./Footer"
import Timeline from "./Timeline"
import SocialLinks from "./Social_Links"
import RecentProjects from "./Projects"
import TechStack from "./TechStack"
import { useMediaQuery } from 'react-responsive'
import GridBackground from './GridBG';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  // Update the DOM and save to localStorage whenever the theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Create a toggle function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width:  699px)' })

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4  flex items-center w-14 h-8 p-1 bg-gray-300 dark:bg-gray-700 rounded transition-colors duration-300 focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        {/* The sliding "thumb" */}
        <div
          className={`flex items-center justify-center w-6 h-6 bg-white dark:bg-gray-900 rounded shadow-sm transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            }`}
        >
          {theme === 'light' ? (
            <Sun size={16} className="text-gray-600" />
          ) : (
            <Moon size={16} className="text-gray-300" />
          )}
        </div>
      </button>

      {/* Wrap content in a container to add spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {isDesktopOrLaptop &&
          <>
            <Header />
            <GridBackground>
              <div className='flex items-center justify-center gap-2'>
                <About />
                <div className='flex flex-col'>
                  <Timeline />
                  <TechStack />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <RecentProjects />
                <SocialLinks />
              </div>
            </GridBackground>
            <Footer />
          </>
        }

        {isTabletOrMobile &&
          <>
            <Header />
            <GridBackground>
              <About />
              <Timeline />
              <TechStack />
              <div className="flex flex-col items-center justify-center gap-2">
                <RecentProjects />
                <SocialLinks />
              </div>
            </GridBackground>
            <Footer />
          </>
        }
      </div> </div>
  )
}

export default App;