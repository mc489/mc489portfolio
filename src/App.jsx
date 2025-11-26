
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
        query: '(min-width: 1024px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  1023px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (

    <>
   
   {isDesktopOrLaptop &&
   <> 
  <Header />

      <About />
      <Timeline />
    <TechStack/>
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
