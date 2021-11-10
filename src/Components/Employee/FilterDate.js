
import React,{useState} from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

export const FilterDate = ({DateRange,setDateRange}) => {
     //Date Packer
     

    return (
     
                <div>
    <DateRangePicker onChange={setDateRange} value={DateRange}/>
    </div>
        
    )
}
