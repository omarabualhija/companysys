import React from 'react'
import {ItemsOrder} from "./employeeStyle"
export const Displayemplyee = ({dataEmployee}) => {

    const itemsOrder=()=>(dataEmployee.map((e)=>
    {return(
           <ItemsOrder key={e.Id} dataEmployee={e.rating}>
        <div>{e.Id}</div>
        <div>
        <img src={e.img} alt="img"/>
        <span>{e.Name}</span>
        </div>
        <div>{e.StartWork}</div>
        <div>{e.Department}</div>
        <div>{e.Salary}</div>
        <div>{e.numberOffice}</div>
        <div>{e.rating}</div>
        </ItemsOrder>)}))

    return (
        itemsOrder()
       
    )
}
