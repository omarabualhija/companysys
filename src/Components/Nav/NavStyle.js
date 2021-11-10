import styled from "styled-components"
import {borderBottom,fontSize} from "../Global/SharedStyle"

export const NavBar =styled.div `
${borderBottom};

font-size:${fontSize.main};
@media(max-width:768px){
    font-size:${fontSize.alt};
}
@media(max-width:480px){
    font-size:8px;

}
& >:first-child{ //box Nav
    
    display:flex;
    justify-content:space-between;
    align-items:center;
 

&>:first-child{   //Container links  ((div)) 
    display: flex;
    align-items:center;
    gap: 8px;
    width: 63%;
    justify-content: space-between;
    @media(max-width:768px){
    flex: 0.85;
   }
    & > a{            // links  ((NavLink)) 
        display:flex;
        align-items: center;
        justify-content: center;
        min-height:60px;
        color:${({theme})=>theme.colors.alt};
        height:100%;
        
    }

    & > .active{         
         
        color:#15BBF9;
    border-bottom: 2px solid #15BBF9 ;
    }
}

& >:nth-child(2){ //setting  btn
border:none;
outline:none;
background:none;
font-size:${fontSize.main};
color:${({theme})=>theme.colors.alt};
font-size:${fontSize.main};
@media(max-width:768px){
    font-size:${fontSize.alt};
}
@media(max-width:480px){
    font-size:8px;
}
}

}
`