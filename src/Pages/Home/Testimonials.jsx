import Img1 from "../../assets/images/profile-1.jpg"
import Img2 from "../../assets/images/profile-2.jpg"
import Img3 from "../../assets/images/profile-3.jpg"
import quotesImg from "../../assets/images/bg-quotes.png"
function Testimonials() {
    const data =[
        {
        id:1,
        Img:Img1,
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dignissimos libero voluptate atque molestias earum?",
        name:"Staish Patel" ,
        jop:"Founder & CEO",
        },
        {
        id:2,
        Img:Img2,
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dignissimos libero voluptate atque molestias earum?",
        name:"Bruser Mckher",
        jop:"Founder & CEO",
        },
        {
        id:3,
        Img:Img3,
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dignissimos libero voluptate atque molestias earum?",
        name:"Abdelmoniem hgagy",
        jop:"FrontEnd Developer "
        },
       
    ]
  return (
    <div className="md:p-[150px] pt-[150px]  ">

          <div className="container  grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-[20px] relative mx-auto ">

            <img src={quotesImg} alt="" className="absolute left-[10px]  top-[-20px] z-[-1] md:top-[-20px] w-[35px] " />

                  {
                    data.map((item)=>{
               return (<div key={item.id} className="rounded-[5px] bg-[#1c2230] p-3 w-[90%] mx-auto md:p-5   ">
                    <p className="mb-3 ">{item.desc}</p>
                  <div className="flex items-center">
                    <img src={item.Img} alt="person img" className="w-[35px] rounded-full mr-3"/>

                    <div>
                    <h5>{item.name}</h5>
                      <p className="text-[12px] text-[#999]">{item.jop}</p>
                    </div>
                     
                   </div>
                </div>
                    )}
                    )
                  }
             
            

          </div>
       

    </div>
  )
}

export default Testimonials