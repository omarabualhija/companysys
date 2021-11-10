
import './App.css';
import GlobelStyle from './Components/Global/Global ';
import React, { useState, useEffect } from 'react';
import {Header} from "./Components/Header/Header"
import { ThemeProvider } from "styled-components";
import {dark,light} from "./Components/Global/Theme"
import {Nav} from "./Components/Nav/Nav"
import {Routers} from "./Components/Global/Routers"
import axios from "axios"

function App() {
  const [dataEmployee,SetdataEmployee]=useState([]);
  const [dataClients,setDataClients]=useState([]);
  const [Mode,SetMode]=useState("light");
  const[SearchInput,SetSearchInput]=useState("");
  const [DateRange, setDateRange] = useState(new Date()); 


/*  ------------------------------------------------------------------------------------------ */


const  getData= async ()=>{       //get employee info
  try{
  const Data=await axios.get("Data/Data.json");
  SetdataEmployee(Data.data);
  } 
  catch(error){
    console.log(error)
  }

}

const  getClients= async ()=>{   //get clients Name
  try{
  const Clients=await axios.get("Data/Clients.json");
  setDataClients(Clients.data);
 
  } 
  catch(error){
    console.log(error)
  }

}


const SearchHandlear =(props)=>{    //get data from search input
const d=props;
SetSearchInput(d)
}


const returnData=()=>{      //filters function

  if(SearchInput.length!=="0" ){

const data =dataEmployee.filter((e)=>(
e.Name.toLowerCase().includes(SearchInput.toLocaleLowerCase()) ))

return data
  
}

else{
  return dataEmployee
} 

}




useEffect(()=>{
  getData();
  getClients();
},[SetdataEmployee,setDataClients])

  return (
  <>
     
{dataClients.length >0 &&(
   <ThemeProvider theme={Mode==="light"?light:dark}>
    <div className="App container">
       <GlobelStyle/>
  <Header Mode={Mode} SetMode={SetMode}></Header>
  <Nav ></Nav>
 <Routers dataEmployee={returnData()} dataClients={dataClients} SearchHandlear={SearchHandlear} DateRange={DateRange} setDateRange={setDateRange}/>
    </div>
   </ThemeProvider>
 
 )}
 </>
  )
}

export default App;
