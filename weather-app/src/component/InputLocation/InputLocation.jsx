import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "../../hooks/useLocation";

const InputLocation = () => {
  const [location, setLocation] = useState("silchar");
  const { setWeatherInfo } = useLocation();

  const getCurrentDay = () => {
    let currentTime = new Date();
    const dayObj = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thrusday",
      5: "Friday",
      6: "Saturday",
    };
    const monthObj = {
      0: "January",
      1: "Febuary",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };

    const day = dayObj[currentTime.getDay()];
    const month = monthObj[currentTime.getMonth()];

    return `${day}, ${month} ${currentTime.getDate()}`;
  };

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
          currentWeatherIcon: response.data.weather[0].icon,
        });
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
