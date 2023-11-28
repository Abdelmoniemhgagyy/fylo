import { useEffect, useRef } from "react"
import Logo from "../assets/images/logo.svg"


function Header() {
         const headerRef = useRef()
  useEffect(()=>
 window.addEventListener("scroll",()=>{
  if(scrollY>130){
    headerRef.current.style.backgroundColor="rgb(78 62 162)"
    headerRef.current.style.padding="20px"
  }
  else{
    headerRef.current.style.backgroundColor="#1c2230"
    headerRef.current.style.padding=""
  }
 }
 ),[])
  return ( 

    
    <header ref={headerRef} className="bg-[#1c2230] p-[40px] md:p-[50px]  fixed top-0 left-0  w-full  z-50 transtion-all duration-300  ">

      <div className="flex justify-between items-center mx-auto container flex-col sm:flex-row  ">
      
      <a href="#">
          <img src={Logo} alt="logo" className="w-20 sm:w-[160px] mb-4 sm:mb-0" />
      </a>
      

         <nav>
          <ul className=" flex items-center space-x-3 sm:space-x-5 text-white">
            <li><a href="/features" className="hover:text-blue-400 transition duration-200 ">Features</a></li>
            <li><a href="/team" className="hover:text-blue-400 transition duration-200 ">Team</a></li>
            <li><a href="/singin" className="hover:text-blue-400 transition duration-200 ">Sing in</a></li>
          </ul>
         </nav>

    </div>


    </header>
 
  )
}

export default Header