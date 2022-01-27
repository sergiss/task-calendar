import React, { useContext } from 'react';
import { CalendarContext, sameDay } from '../context/CalendarContext';
import { contrast } from '../utils/utils';
import Task from './Task';

function Day({day, date}) {

    const {setTask, setDate} = useContext(CalendarContext);

    const getStyle = (color)=> {
        return { background: color, color: contrast(color)};
    }
    const selected = sameDay(day.date, date);
    const style = (day.date.getMonth() !== date.getMonth() ? ' disabled':'') 
                + (sameDay(day.date, new Date()) ? ' current-day':'') 
                + (selected ? ' selected-day':'')
    return (
        <div className={`day ${style}`} onClick={()=>setDate(day.date)}>  
            <div className="task-day">       
                <div className="tasks">
                    {day.tasks.map(task=>(
                        <Task key={task.id} task={task} style={getStyle(task.color)}/>
                    ))}
                                    
                </div>
                <h3> {day.date.getDate()} </h3>
            </div>   
            {selected ? <div className="button button-blue add-button" onClick={()=>setTask({})}>+</div> : null}
        </div>
    )
}

export default Day;