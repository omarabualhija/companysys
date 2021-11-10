import React,{useState,useRef} from 'react'
  

export const SearchFilter = ({SearchHandlear}) => {
    const search=useRef();

    const SearchHandler=()=>{
        const d=(search.current.value);
        SearchHandlear(d)
      }

    return (
                 <div>
      <input type="search" ref={search} onChange={SearchHandler} placeholder="Search"/>
      <img src="img/SearchIcon.svg" alt="Search Icon"></img> 
    </div> 
      
    )
}
