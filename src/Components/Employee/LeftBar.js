import React,{useState} from 'react'
import {FilterOrder} from "./employeeStyle"

export const LeftBar = () => {
    const [activeClass,SetActiveClass]=useState();

    const ActiveClass=(indx)=>(   //add active index index
        SetActiveClass(indx)
      )


    return (
      
                <FilterOrder>
      <div >Staff Time</div>
      <div className={`${activeClass==="1"?"Active":null}`}  onClick={()=>ActiveClass("1")}  >Today</div>
      <div className={`${activeClass==="2"?"Active":null}`}  onClick={()=>ActiveClass("2")}  >Yesterday</div>
      <div className={`${activeClass==="3"?"Active":null}`}  onClick={()=>ActiveClass("3")}  >This Week</div>
   </FilterOrder>
      
    )
}
