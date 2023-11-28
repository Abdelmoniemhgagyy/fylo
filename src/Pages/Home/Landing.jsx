
import Land from "../../assets/images/illustration-intro.png"
import BackgroundImg from "../../assets/images/bg-curvy-desktop.svg"

function Landing() {
  return (
    <div className="bg-[#1c2230]">
          <div className="container center-elements sm:mt-[150px] mt-[170px] text-center mx-auto ">

            <div>
                <img src={Land} alt="" className="mx-auto px-4" />
            </div>

            <div>
              <h1 className="text-xl  md:text-4xl my-4 ">welcome bro
                <br />
                Lorem, ipste quasdicta molestiae
              </h1>
              <p className="w-11/12 md:w-7/12 text-sm mx-auto leading-loose ">Lorem, ipste quasdicta molestiae mollitia? Illo, nobis maiores,
              Lorem, ipste quasdicta molestiae mollitia? Illo, nobis.
              </p>
              <button className=" btn w-[240px] bg-sky-500 p-3 my-5 hover:scale-[1.1] hover:bg-sky-900">Get Started</button>
            </div>
          </div>
          <div className="w-full h-full">
            <img src={BackgroundImg} alt="backgroundImage" className="w-full h-[100px] md:h-[170px]" />
         </div>

    </div>
  )
}

export default Landing