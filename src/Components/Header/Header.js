import React,{useState,useEffect} from 'react'
import {HeaderStyle} from "./HeaderStyle"
import Container from '../Container/Container'
import Switch from '@mui/material/Switch';
import {MUISwitch} from "../Global/Switch"
export const Header = ({Mode,SetMode}) => {
  const [NowDate,setDate]= useState(`${new Date().toLocaleString('default', { month: 'short' })} / ${new Date().getFullYear()}`);

useEffect(()=>{
setDate(`${new Date().toLocaleString('default', { month: 'short' })} / ${new Date().getFullYear()} `)
})

 

const DateNow=()=>(
        <div>{NowDate}</div>
)

const Logo=()=>(
  
      <div className="fab fa-html5 fa-lg">LOGO</div>
    
)


const Login =()=>(
<div>
<label>
<MUISwitch onChange={()=>{return(Mode==="light"?SetMode("dark"):SetMode("light"))}}   size="small" />
 </label>
<i className="fas fa-bell"></i>
<div>M</div>
</div>

)

    return (
           <HeaderStyle>
            <Container as="div">
            {DateNow()}
            {Logo()}
            {Login()}
            </Container>
            </HeaderStyle>
     
    )
    }