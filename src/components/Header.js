import React, { useContext } from 'react'
import { CalendarContext } from '../context/CalendarContext'

function Header() {

    const {date, setDate} = useContext(CalendarContext);
    const monthNames = [
        "January", "February", "March", 
        "April"  , "May"     , "June",
        "July"   , "August"  , "September", 
        "October", "November", "December"
    ];

    const addMonth = (value)=> {        
        const tmp = new Date(date.setMonth(date.getMonth() + value));
        setDate(tmp);
    }

    return (
        <header>
            <div className="month">
                <h1>{monthNames[date.getMonth()]} {date.getFullYear()}</h1>
            </div>
            <div className="nav">
                <button className="button button-white" onClick={()=>addMonth(-1)}><svg width="52px" height="52px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g data-name="Group 132" id="Group_132"><path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"/></g></svg></button>
                <button className="button button-white" onClick={()=>setDate(new Date())}>Today</button>
                <button className="button button-white" onClick={()=>addMonth( 1)}><svg width="52px" height="52px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g data-name="Group 132" id="Group_132"><path d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z"/></g></svg></button>
            </div>            
        </header>
    )
}

export default Header
