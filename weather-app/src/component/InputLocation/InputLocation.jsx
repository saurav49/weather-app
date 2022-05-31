import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "../../hooks/useLocation";
import { getCurrentDay } from "../../utils";

const InputLocation = () => {
  const [location, setLocation] = useState("silchar");
  const { setWeatherInfo } = useLocation();

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      (async function () {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c835703a365abf27510469f4914a28c6&units=metric`
        );
        setWeatherInfo({
          currentTemp: Math.round(response.data.main.temp),
          currentWeather: response.data.weather[0].main,
          currentDay: getCurrentDay(),
          currentWeatherDesc: response.data.weather[0].description,
        });
      })();
    }, 300);

    return function () {
      clearTimeout(timer);
    };
  }, [location, setWeatherInfo]);

  return (
    <div className="flex flex-col mt-10">
      <label
        htmlFor="location"
        className="uppercase text-gray-400 text-xs font-medium"
      >
        Location
      </label>
      <div className="border-b-2  mt-1">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter a city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="text-lg tracking-wider"
        />
        <button className="text-gray-400 uppercase text-xs font-medium">
          set
        </button>
      </div>
    </div>
  );
};

export { InputLocation };
