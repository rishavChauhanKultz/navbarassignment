import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const SingleMovie=()=>{
    
    const {id}=useParams()
    // console.log(id)

    const [data,setData]=useState([])
    
    
    useEffect(()=>{
        getData()
        console.log(data)
         },[])

     
    const getData=()=>{
        fetch(`https://movie-fake-server.herokuapp.com/data/${id}`)
  .then((response) => response.json())
  .then((d) => setData(d));
        
    }
    return (
        <>
    <img src={data.image_url} alt="" />
    
        </>
    )
}

export default SingleMovie;