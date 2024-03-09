import { GetPrayerTime } from "@/pages/Root/ui/Root";

import { CalendarDay } from "./CalendarDay";

import classes from "./Calendar.module.scss";

export interface CalendarProps {
  times: GetPrayerTime[];
}

export function Calendar({ times }: CalendarProps) {
  return (
    <div className={classes.calendar}>
      {times.map((item) => (
        <CalendarDay key={item.date.gregorian.date} item={item} />
      ))}
    </div>
  );
}
