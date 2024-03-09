import { useEffect, useState } from "react";

import { GetCityGeo } from "@packages/shared/api";
import { CitySearching } from "@packages/shared/components";

import classes from "./Root.module.scss";
import { Calendar } from "@/components/Calendar";

export interface GetPrayerTime {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
  };
  date: {
    readable: string;
    timestamp: string;
    gregorian: {
      date: string;
      format: "DD-MM-YYYY";
      day: string;
      weekday: {
        en: string;
      };
      month: {
        number: 5;
        en: string;
      };
      year: string;
      designation: {
        abbreviated: string;
        expanded: string;
      };
    };
    hijri: {
      date: string;
      format: "DD-MM-YYYY";
      day: string;
      weekday: {
        en: string;
        ar: string;
      };
      month: {
        number: 9;
        en: string;
        ar: string;
      };
      year: string;
      designation: {
        abbreviated: string;
        expanded: string;
      };
      holidays: string[];
    };
  };
  meta: {
    latitude: number;
    longitude: number;
    timezone: string;
    method: {
      id: number;
      name: string;
      params: {
        Fajr: number;
        Isha: number;
      };
    };
    latitudeAdjustmentMethod: string;
    midnightMode: string;
    school: string;
    offset: {
      Imsak: number;
      Fajr: number;
      Sunrise: number;
      Dhuhr: number;
      Asr: number;
      Maghrib: number;
      Sunset: number;
      Isha: number;
      Midnight: number;
    };
  };
}

export default function Root() {
  const [cityGeo, setCityGeo] = useState<GetCityGeo>();
  const [times, setTimes] = useState<GetPrayerTime[]>();

  useEffect(() => {
    if (cityGeo) {
      fetch(
        `http://api.aladhan.com/v1/calendar/${2024}/${3}?latitude=${cityGeo.lat}&longitude=${cityGeo.lon}&method=14&school=1`,
      )
        .then((res) => res.json())
        .then(({ data }) => setTimes(data));
    }
  }, [cityGeo]);

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <span>Prayer</span>
        <br />
        <span>Time</span>
      </div>
      <div className={classes.app}>
        <CitySearching setCityGeo={setCityGeo} />
        {cityGeo?.name}
        {times && times.length && <Calendar times={times} />}
      </div>
    </div>
  );
}
