import Landing from "./Landing"
import Features from "./Features"
import Team from "./Team"
import Testimonials from "./Testimonials"
import GetStarted from "./GetStarted"
function Home() {
  return (
    <div className="text-white">

       <Landing/>
       <Features/>
       <Team/>
       <Testimonials/>
       <GetStarted/>

    </div>
  )
}

export default Home