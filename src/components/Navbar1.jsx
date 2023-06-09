import React,{useState,useEffect, useDebugValue} from 'react'
import {BsLightbulb,BsFillMoonStarsFill} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import { useDispatch } from 'react-redux';

const Navbar1 = () => { 
  const [color,setColor]=useState(false)
  const dispatch=useDispatch()
  useEffect(()=>{
    const root=document.getElementById("root");
    if(color){
      root.style.backgroundColor ="black";
      root.style.color="grey"
    }else{
      root.style.backgroundColor ="white";
      root.style.color="black"
    }

  },[color])
  return (
    
    <div className='flex items-center justify-between px-3 h-28'>
        <div className='text-2xl font-bold tracking-wider'>LOGO</div>
        <div className='flex items-center space-x-4'>
            <input className="border p-3 outline-none rounded-lg" type="text" placeholder='search'/>
            <div onClick={()=>setColor(!color)}>
              {
                color ? <BsFillMoonStarsFill size={25} className="cursor-pointer"/> : <BsLightbulb size={25} className="cursor-pointer"/>
              }
             
            </div>
            
             <div onClick ={()=>dispatch({type:"DRAWER",payload:true})} className='relative'>
                <SlBasket size={25} className="cursor-pointer"/>
                <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm '>3</span>

            </div>
        </div>
    </div>
  )
}

export default Navbar1
