import { useState } from "react";

import { GetPrayerTime } from "@/pages/Root/ui/Root";

import classes from "./CalendarDay.module.scss";

export interface CalendarDayProps {
  item: GetPrayerTime;
}

export function CalendarDay({ item }: CalendarDayProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={classes.calendarDay}
      onClick={() => setShow((prevState) => !prevState)}
    >
      <span className={classes.gregorianDay}>{item.date.gregorian.day}</span>
      {show && (
        <ul className={classes.timesList}>
          {Object.entries(item.timings).map(([key, value]) => (
            <li key={key} className={classes.timesListItem}>
              <span className={classes.timeName}>{key}:</span>&nbsp;
              <span className={classes.time}>{value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
