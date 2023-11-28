import FeaturesBox from "./FeaturesBox"

function Features() {
  return (
    <div className="container mx-auto mt-6 w-[900px] max-w-full p-[30px]">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] ">
            <FeaturesBox/>
       </div>
       <div>

       </div>
    
    </div>
  )
}

export default Features