import {ContainerStyled} from "./ContainerStyle.js";

import React from 'react'

 const Container = (props) => {
    return (
   <ContainerStyled {...props}>{props.children}</ContainerStyled>
    )
}
export default Container;