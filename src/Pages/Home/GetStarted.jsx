
function GetStarted() {
  return (
    <div className='container mx-auto relative mt-[140px] '>

      <div className="relative md:absolute left-[50%] translate-x-[-50%] top-[-100px] bg-[#1c2230] text-center p-[30px] rounded-[15px] w-[90%] lg:w-auto  ">
        <h2 className="text-3xl text-normal mb-4">Get early access today</h2>
          <p className="mb-5 leading-[1.8] text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ex nobis sit amet consectetur adipisicing elit eligendi eos laudantium quidem cupiditate, eaque illo reprehenderit possimus.
          </p>
          <div className="flex lg:space-x-4  justify-center flex-wrap  ">
            <input type="text" placeholder="email@example.com" className="border-none outline-none rounded-full text-black p-2 pl-4 w-[90%] lg:w-[60%] " />
            <button className="capitalize mx-[auto] mt-[20px] lg:mt-0  normal btn  bg-sky-500 p-2 hover:scale-[1.1] hover:bg-sky-900 ">Get started for free</button>
          </div>
      </div>




    </div>
  )
}

export default GetStarted