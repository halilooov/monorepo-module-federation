export interface GetCityGeo {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export async function getCityGeo(city: string): Promise<GetCityGeo[]> {
  const API_KEY = "e539c1d2e73579283e76b87f83f8fe51";

  return (
    await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${API_KEY}`,
    )
  ).json();
}
