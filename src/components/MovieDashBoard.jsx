import { useState,useEffect } from "react"
import '../App.css'
import { useNavigate } from "react-router-dom"

 const Movies=()=>{
    const [data,setData]=useState([])
    let Navigate=useNavigate()
    
    useEffect(()=>{
        getData()
        console.log(data)
         },[])

     
    const getData=()=>{
        fetch('https://movie-fake-server.herokuapp.com/data')
  .then((response) => response.json())
  .then((d) => setData(d));
        
    }
//  const getData=async()=>{
//     const response=await fetch("https://movie-fake-server.herokuapp.com/data")
//     const datas=await response.json()
//     console.log("hrer")
//     console.log(datas)
//     setData(datas)
// }
    
    
         
return (
    <>
    <div className="movie-div"></div>
    
    {
        data.map((ele,i)=>{
            return(
              <>  <button onClick={()=>{
                  Navigate(`/${ele.id}`)
              }}><img key={ele.id} src={ele.image_url} alt="" /></button>
              </>
            )
        })
    }

    </>
)
}

export default Movies;