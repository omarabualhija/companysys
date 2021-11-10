import React from 'react'
import {FilterOrder} from "./employeeStyle"
export const DisplayClients = ({dataClients}) => {
   
    const Clients=()=>(
        dataClients.map((e) =>(
       <div key={e.id}>{e.Name}</div>
         ))
      )
   
    return (
        <FilterOrder> 
        <div>Clients</div>
        {Clients()}
        </FilterOrder> 
    )
}
