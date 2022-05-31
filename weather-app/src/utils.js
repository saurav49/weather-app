import cloudy from "./assets/cloudy.png";
import mist from "./assets/mist.png";
import thunderstorm from "./assets/storm.png";
import sun from "./assets/sun.png";
import snowflake from "./assets/snowflake.png";

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

const weatherImages = {
  "clear sky": sun,
  "few clouds": cloudy,
  "scattered clouds": cloudy,
  "broken clouds": cloudy,
  "shower rain": thunderstorm,
  rain: thunderstorm,
  thunderstorm: thunderstorm,
  snow: snowflake,
  mist: mist,
};

export { getCurrentDay, weatherImages };
