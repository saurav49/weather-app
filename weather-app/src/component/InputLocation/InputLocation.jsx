import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "../../hooks/useLocation";
import { getCurrentDay } from "../../utils";
import { API__KEY, WEATHER__API } from "../../urls";

const InputLocation = () => {
  const weather__location =
    JSON.parse(localStorage.getItem("weather__location")) || "";
  const [location, setLocation] = useState(weather__location);
  const [error, setError] = useState("");
  const { setWeatherInfo, setLoading } = useLocation();

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      (async function () {
        try {
          setLoading(true);
          const response = await axios.get(
            `${WEATHER__API}?q=${location}&appid=${API__KEY}&units=metric`
          );
          setWeatherInfo({
            currentTemp: Math.round(response.data.main.temp),
            currentWeather: response.data.weather[0].main,
            currentDay: getCurrentDay(),
          });
          setLoading(false);
        } catch (error) {
          setLoading(false);
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
      setError("cannot set empty location");
      return;
    }
    setLocation(location);
    localStorage.setItem("weather__location", JSON.stringify(location));
    setError("");
  };

  return (
    <div className="flex flex-col mt-10">
      <label
        htmlFor="location"
        className="uppercase text-gray-400 text-xs font-medium mb-2"
      >
        Location
      </label>
      <div className="border-b-2 mt-1 flex">
        <div className="flex flex-col items-start ">
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter a city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-lg tracking-wider outline-0"
          />
          {error && <p className="italic text-sm text-red-600 mt-1">{error}</p>}
        </div>
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
