import { ChevronRight } from 'lucide-react';
import About from "./About"
import Header from "./Header"
import Footer from "./Footer"
import Timeline from "./Timeline"
import SocialLinks from "./Social_Links"
import RecentProjects from "./Projects"
import TechStack from "./TechStack"
import { useMediaQuery } from 'react-responsive'

function App() {
 const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  699px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (

    <>
   
   {isDesktopOrLaptop &&
   <> 
  <Header />
<div className='flex  items-center justify-center gap-2'>
      <About />
      <div className='flex flex-col'>
      <Timeline />
      
    <TechStack/>
    </div>
    </div>
      <div className="flex items-center justify-center gap-2">
        <RecentProjects/>
      <SocialLinks/>
    
</div>

    <Footer/>
     </>
   }

   
   {isTabletOrMobile &&
   <> 
  <Header />

      <About />
      <Timeline />
     <TechStack/>
      <div className="flex flex-col items-center justify-center gap-2">
        <RecentProjects/>
      <SocialLinks/>
</div>

    <Footer/>
     </>
   }
  
    </>

  )
}

export default App
