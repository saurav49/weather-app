import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "../../hooks/useLocation";

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
        setWeatherInfo(response);
      })();
    }, 300);

    return function () {
      clearTimeout(timer);
    };
  }, [location, setWeatherInfo]);

  return (
    <div>
      <label htmlFor="location">LOCATION</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Enter a city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button>set</button>
    </div>
  );
};

export { InputLocation };
