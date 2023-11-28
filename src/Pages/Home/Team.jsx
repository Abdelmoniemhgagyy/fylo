import teamImg from "../../assets/images/tea.svg"
import Arrow from "../../assets/images/icon-arrow.svg"
function Team() {
  return (
    <div className="mt-[80px]">


        <div className="container mx-auto  flex items-center flex-row justify-center flex-wrap">
         
         <div className=" mx-auto xl:mr-[50px]   center-elements  mb-[20px] xl:mb-0">
            <img src={teamImg} alt="" className="w-[90%] sm:w-[480px] ml-[20px] mx-auto " />
         </div>

         <div className="w-full xl:w-1/2 text-center xl:text-left  ">
            <h1 className="mb-5 text-2xl lg:text-4xl">Stay Productive <br/>Where you are </h1>
            <p className="w-11/12 lg:w-6/12 xl:w-8/12 mb-3 text-sm mx-auto xl:mx-0  leading-[1.6]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus magnam iste architecto maiores illum, dolores tempora repellat soluta 
            </p>
            
            <p className="w-11/12 lg:w-6/12 xl:w-8/12 text-sm mx-auto xl:mx-0 mb-2  leading-[1.6]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus magnam iste architecto maiores illum, dolores tempora repellat soluta 
            </p>
            <a className="border-b-2 border-primaryColor text-primaryColor hover:text-[#65fffe]
              w-fit flex items-center mx-auto xl:mx-0 pb-[5px] ">
               <span> See Who Flay Work </span>
                <img src={Arrow} alt="arrow" className="ml-2 w-[20px] h-[20px] animate-[moveRight_.6s_ease-in-out_infinite] " />
            
            
            </a>
         </div>


        </div>




    </div>
  )
}

export default Team