import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "../../hooks/useLocation";
import { getCurrentDay } from "../../utils";

const InputLocation = () => {
  const weather__location = JSON.parse(
    localStorage.getItem("weather__location") || ""
  );
  const [location, setLocation] = useState(weather__location);
  const { setWeatherInfo } = useLocation();

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      (async function () {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c835703a365abf27510469f4914a28c6&units=metric`
          );
          setWeatherInfo({
            currentTemp: Math.round(response.data.main.temp),
            currentWeather: response.data.weather[0].main,
            currentDay: getCurrentDay(),
          });
        } catch (error) {
          setWeatherInfo({});
        }
      })();
    }, 300);

    return function () {
      clearTimeout(timer);
    };
  }, [location, setWeatherInfo]);

  const handleSetLocation = () => {
    if (location.length === 0) {
      alert("cannot set empty location");
      return;
    }
    setLocation(location);
    localStorage.setItem("weather__location", JSON.stringify(location));
  };

  return (
    <div className="flex flex-col mt-10">
      <label
        htmlFor="location"
        className="uppercase text-gray-400 text-xs font-medium mb-2"
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
          className="text-lg tracking-wider outline-0"
        />
        <button
          className="text-gray-400 uppercase text-xs font-medium hover:text-slate-800"
          onClick={handleSetLocation}
        >
          set
        </button>
      </div>
    </div>
  );
};

export { InputLocation };
