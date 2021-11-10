import styled from 'styled-components'
import {borderBottom,fontSize} from '../Global/SharedStyle'

export const  HeaderStyle=styled.div`
${borderBottom};
font-size:${fontSize.main};

&>:first-child {  //box 
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    align-items: center;
    

&>:nth-child(1) { //date
color:${(props)=>props.theme.colors.main};

 @media (max-width:768px){
font-size:${fontSize.alt};
}}

& > :nth-child(2){  //logo
    color:${(props)=>props.theme.colors.main};
    @media (max-width:768px){
font-size:15px;
}}


& > :nth-child(3){ //Login Side
        display: flex;
        align-items: center;
    gap: 25px;
    @media (max-width:768px){
gap:10px;
}
 &>:nth-child(2){  //notification icon
    width: 40px;
    height: 40px;
    background-color: ${props=>props.theme.backgroundColors.alt};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:768px){
width:25px;
height:25px;
}
    }

    &>:nth-child(3){  // Login img
     width: 40px;
    height: 40px;
    background-color: #D6E4FF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    @media (max-width:768px){
width:25px;
height:25px;
}
    & img{
        width:100%;
    }
}
    }
}
    

`
