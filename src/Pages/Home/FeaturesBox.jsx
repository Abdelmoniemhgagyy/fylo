import Img1 from "../../assets/images/icon-access-anywhere.svg"
import Img2 from "../../assets/images/icon-security.svg"
import Img3 from "../../assets/images/icon-collaboration.svg"
import Img4 from "../../assets/images/icon-any-file.svg"
function FeaturesBox() {
  const list = [
    {id:1,
     Img:Img1,
     title:"Access your files , anywhere",
     desc:"The ability to use a smartphone,tablet, or computer to access your means your files follow you everywhere"},
    {id:2,
     Img:Img2,
     title:"Security you can trust ",
     desc:"The ability to use a smartphone,tablet, or computer to access your means your files follow you everywhere"},
    {id:3,
     Img:Img3 ,
     title:"Real-time collaboration",
     desc:"The ability to use a smartphone,tablet, or computer to access your means your files follow you everywhere"},
    {id:4,
     Img:Img4,
     title:"Store any type of file",
     desc:"The ability to use a smartphone,tablet, or computer to access your means your files follow you everywhere"},
  ]

  return (
    < >
             
           {list.map((item)=>{
            return (
              <div className="center-elements " key={item.id}>
                <img src={item.Img} alt="image" className="my-[10px]" />
                <div className="text-center leading-[1.6]">
                  <h1 className="text-xl font-bold my-[5px]">{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
             </div>
            )
              
          })}
    </>
  )
}

export default FeaturesBox