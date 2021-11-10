import styled ,{css}from "styled-components"
import {fontSize} from "../Global/SharedStyle"

export const Orders =styled.div`


`
 export const BorderBottom =styled.div`
position:relative;
& > ::before{     // border Botto
    content: "";
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:1px;
    background-color:${({theme})=>theme.backgroundColors.alt} 
}

 `

    export const OrderBtn=styled.div` //Btn Order
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 5px;
    padding:3px 0;
    min-height: 60px;
    position: relative;
    align-items: center;

    @media (max-width:768px){
        min-height: 45px;  
    }
    & >a{    //Both Btns
        
        text-align:center;
        padding: 12px;
        color:${({theme})=>theme.colors.main};
        border-radius:8px;
        font-size:${fontSize.main};
@media (max-width:768px){
    padding: 6px;
    font-size: 10px;
}

    }

    & >:first-child{   //Btn > Management
        border:1px solid #B2B2B2;
    }
    &>:nth-child(2){    //Btn > Orders Dispatch   
        background-color:${({theme})=>theme.backgroundColors.alt};
    }
    `

export const Main=styled.div `
display: flex;
align-items:start;

`


export const SidBar =styled.div`

display:inline-flex;
flex-direction: column;
border-right:1px solid ${({theme})=>theme.borderColor};
max-width: 156px;

@media (max-width:768px){
    display:none;
}
& >:nth-child(2){
    max-height:55vh;
    overflow-y:scroll;
    overflow-x:hidden;

&>::before {
   display:none;
  }
}
`

export const FilterOrder=styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    gap: 5px;
 
    color:${({theme})=>theme.colors.alt};
position:relative;
& >.Active{
    background-color:${({theme})=>theme.backgroundColors.alt};
    border-radius:8px
    
}

& >::before {
    content:"";
    width:100vw;
    position:absolute;
     height:1px;
    bottom:0;
    right:0;
     background-color:${({theme})=>theme.backgroundColors.alt} ;
}
   
    & >:not(:first-child){
        padding: 6px 25px;
        font-size:${fontSize.main};
        cursor:pointer;
    }

    & >:first-child{
        font-size:${fontSize.alt};
       
    }

`
export const Contents=styled.div`
    padding: 15px 0;
    padding-left: 15px;
    width: 100%;
    position: relative;

` 

export const Search=styled.div` //Search Bar
display:flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
gap: 25px;
position: relative;

@media (max-width:768px){
    flex-direction:column;
    align-items:center;
}
& >:first-child{   // Box Search
    position: relative;
    width:68%;
    border-radius:8px;
    overflow: hidden;
    background-color:${(props)=>props.theme.whiteblack.main};
    border:1px solid ${(props)=>props.theme.backgroundColors.alt};

    @media (max-width:768px){
 width:100%;
}

& > [type="search"]{  //Input Search
min-height: 36px;
width:100%;
border:none;
background-color:transparent;
font-size:${fontSize.main};
color:${({theme})=>theme.colors.alt};
padding:0 8px;
&:focus{
outline:none;
};
}
& >img{      //icon search
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translatey(-50%);  
}
}

& >:nth-child(2){   //Date Picker
    flex: 0 0;
    border:1px solid ${(props)=>props.theme.backgroundColors.alt};
    border-radius: 8px;
 
@media (max-width:768px){
    font-size:12px;
}
& .react-daterange-picker__wrapper{
    border:none !important;
    min-height:36px;
    

    &  span,input{
        color: ${(props)=>props.theme.colors.alt} !important;
    }
    & button{
        background-color: ${(props)=>props.theme.whiteblack.main};
        height:30px;
        border-radius:50%;
        margin-right:5px;
        
    }
}
}


`
export const BoxData=styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(70px,1fr));
    align-items: center;
    font-size: 12px;
    min-height: 40px;
    text-align: center;
    margin-top: 10px;
    gap:5px;
    color: ${(props)=>props.theme.colors.main};
    @media(max-width:768px){
    grid-template-columns: repeat(auto-fit,minmax(50px,1fr));
    font-size:8px;
}
@media(max-width:480px){
    font-size:7px;
    grid-template-columns: repeat(auto-fit,minmax(30px,1fr));
}
@media(max-width:290px){
    font-size:6px;
    grid-template-columns: repeat(auto-fit,minmax(23px,1fr));
}
`

export const HeaderTable=styled(BoxData)`
    border-top: 1px solid ${props=>props.theme.backgroundColors.alt};

`

export const AddOrderBtn=styled.div `
display:flex;
justify-content:center;
font-size:14px;
min-height:39px;
border-top: 1px solid ${props=>props.theme.backgroundColors.alt};
& >button{
    cursor:pointer;
margin-top:10px;
text-align:center;
background:none;
width:100%;padding:15px 0;
border: 1px solid ${props=>props.theme.backgroundColors.alt};
border-radius:8px;
background-color: ${props=>props.theme.AddOrderBtn};
color:${(props)=>props.theme.colors.main};
}

`


export const ItemsOrder=styled(BoxData)`
    border-radius: 8px;
    padding: 10px 0;
     position: relative;
     overflow: hidden;
    z-index:0;
   

    ${({dataEmployee})=>css`
${()=>dataEmployee==='under-probation'&&`border:1px solid #17D7A0 `}
${()=>dataEmployee==='very-good'&&`border:1px solid #989C58 `}
${()=>dataEmployee==='weak'&&`border:1px solid  #FF1400 `}
${()=>dataEmployee==='excellent'&&`border:1px solid #29E881 `}
${()=>dataEmployee==='good'&&`border:1px solid #6166B3 `}


`};

     &::before {
        content: "";
    position: absolute;
    left: 0px;
    bottom: 0;
    height: 100%;
    width: 7px;
    z-index: 1;
    ${({dataEmployee})=>css`
${()=>dataEmployee==='under-probation'&&` background-color: #17D7A0 `}
${()=>dataEmployee==='very-good'&&` background-color: #989C58 `}
${()=>dataEmployee==='weak'&&` background-color:  #FF1400 `}
${()=>dataEmployee==='excellent'&&` background-color: #29E881 `}
${()=>dataEmployee==='good'&&` background-color: #515E63 `}


`};
     };

&>:nth-child(2){
    
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    & > img{
        width: 30px;
    border-radius: 50px;
    @media(max-width:480px){
        width: 15px;
    }
    }
    @media(max-width:480px){

        gap:5px;
    }
};


`