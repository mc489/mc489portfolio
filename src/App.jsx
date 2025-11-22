
import About from "./About"
import Header from "./Header"
import Footer from "./Footer"
import ColorsTimeline from "./Timeline"
import SocialLinks from "./Social_Links"
function App() {

  return (
    <>

     <div className=""> 
      <Header />
      <div className="flex flex-row gap-5 justify-center items-center mb-2">
      <About />
   
      <ColorsTimeline></ColorsTimeline>
     </div>
     <div className="flex flex-row item-center justify-center "> 
<SocialLinks></SocialLinks>
</div>
<Footer></Footer>
 </div>
    </>   
  )
}

export default App
