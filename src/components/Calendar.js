import React, { useContext, useEffect } from "react";
import { CalendarContext } from "../context/CalendarContext";
import Day from "./Day";

function Calendar() {

  const { date, days, setDate } = useContext(CalendarContext);

  useEffect(() => {
    setDate(new Date());
    // eslint-disable-next-line
  }, []);

  if (days.length < 1) return null;

  const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div>
        <div className="calendar borderless day-names">
          {names.map(name=><h5 key={name}>{name}</h5>)}
        </div>
        <div className="calendar">
          {days.map(day=><Day key={day.date} day={day} date={date} setDate={setDate} />)}     
        </div>
    </div>
  );
}

export default Calendar;