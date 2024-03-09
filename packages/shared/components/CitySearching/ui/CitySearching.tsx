import { useEffect, useState, Dispatch, SetStateAction, useMemo } from "react";

import { GetCityGeo, getCityGeo } from "@packages/shared/api";

import classes from "./CitySearching.module.scss";

export interface CitySearchingProps {
  setCityGeo: Dispatch<SetStateAction<GetCityGeo>>;
}

export const CitySearching = ({ setCityGeo }: CitySearchingProps) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState<GetCityGeo[]>([]);

  const show = useMemo(() => Boolean(city && data.length), [data, city]);

  const inputCls = useMemo(() => {
    return [classes.input, show && classes.inputRadius]
      .filter(Boolean)
      .join(" ");
  }, [show]);

  useEffect(() => {
    if (city) {
      getCityGeo(city).then((newData) => setData(newData));
    }
  }, [city]);

  return (
    <div className={classes.citySearching}>
      <input
        type="text"
        placeholder="City name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={inputCls}
      />
      {show && (
        <ul className={classes.citiesList}>
          {data.map((item) => (
            <li
              className={classes.citiesListItem}
              key={item.name + item.lon + item.lat}
            >
              <button
                onClick={() => {
                  setCityGeo(item);
                  setCity("");
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
