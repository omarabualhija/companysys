import { createGlobalStyle } from "styled-components";

const GlobelStyle=createGlobalStyle`

*{
    margin: 0;
    bottom: 0;
    box-sizing: border-box;
    &::-webkit-scrollbar{
  width: 8px;

}
&::-webkit-scrollbar-track{
    background-color: ${(props)=>props.theme.backgroundColors.main};

}
&::-webkit-scrollbar-thumb {
    background-color: ${(props)=>props.theme.backgroundColors.alt};
border-radius:5px;
}
}

html{
    font-family: "SF Pro Display";
    background-color: ${props=>props.theme.backgroundColors.main}

}

a{
    
    text-decoration:none;
}

`

export default GlobelStyle; 