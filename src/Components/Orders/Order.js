import {NavLink} from "react-router-dom"
import {Main,OrderBtn,SidBar,Search,Contents,BorderBottom,AddOrderBtn} from "./OrderStyle"
import Container from "../Container/Container";
import {FilterDate} from "./FilterDate"
import {SearchFilter} from "./SearchFilter"
import {Displayemplyee} from "./Displayemplyee"
import {LeftBar} from "./LeftBar"
import {DisplayClients} from "./DisplayClients"
import {HeaderEmp}from "./HeaderEmp"


export const Order =({dataEmployee,dataClients,SearchHandlear,getDate,DateRange,setDateRange}) => {

  const OrderTopBtn =()=>(  //OrderBtn 
    <OrderBtn>
    <NavLink to="#">Presence</NavLink>
    <NavLink to="#">Holiday</NavLink>
   </OrderBtn>
  )

  const MainContent=()=>(   //Contents
   <Main> 
   <SidBar> 
   <LeftBar/>                                             {/*Lef Bar  component */}
   <DisplayClients dataClients={dataClients} />           {/*Display Client component */}
   </SidBar>
   <Contents>   
   <Search>
   <SearchFilter  SearchHandlear={SearchHandlear}  />     {/* Search Filter Components */}
   <FilterDate DateRange={DateRange} setDateRange={setDateRange}/>                                          {/* Date Filter Components */}
   </Search>

   <HeaderEmp/>                                            {/*Headear taple components */}

   <AddOrderBtn>
   <button>New Employee</button>
 </AddOrderBtn>
 <Displayemplyee dataEmployee={dataEmployee} />            {/*display components */}
</Contents>
 </Main> 
  

  )



    return (

             <>
          <BorderBottom >
          <Container as="div">
          {OrderTopBtn()}
          </Container>
          </BorderBottom>
          <Container>
          {MainContent()} 
          </Container> 
           </>
    )
       }