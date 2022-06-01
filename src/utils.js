import cloudy from "./assets/cloudy.png";
import mist from "./assets/mist.png";
import thunderstorm from "./assets/storm.png";
import sun from "./assets/sun.png";
import snowflake from "./assets/snowflake.png";
import drizzle from "./assets/drizzle.png";
import smoke from "./assets/carbon-dioxide.png";
import dust from "./assets/dust.png";
import fog from "./assets/mist1.png";
import sand from "./assets/sand.png";
import ash from "./assets/urn.png";
import tornado from "./assets/tornado.png";
import notPresent from "./assets/undraw_weather_app_re_kcb1.svg";

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

const weatherImagesAndColors = {
  Clear: { img: sun, color: "bg-amber-400" },
  Clouds: { img: cloudy, color: "bg-sky-300" },
  Rain: { img: thunderstorm, color: "bg-sky-500" },
  Thunderstorm: { img: thunderstorm, color: "bg-sky-500" },
  Snow: { img: snowflake, color: "bg-blue-200" },
  Mist: { img: mist, color: "bg-neutral-500" },
  Drizzle: { img: drizzle, color: "bg-sky-500" },
  Smoke: { img: smoke, color: "bg-slate-600" },
  Haze: { img: mist, color: "bg-neutral-500" },
  Dust: { img: dust, color: "bg-neutral-300" },
  Fog: { img: fog, color: "bg-gray-300" },
  Sand: { img: sand, color: "bg-amber-300" },
  Ash: { img: ash, color: "bg-slate-700" },
  Squall: { img: thunderstorm, color: "bg-sky-500" },
  Tornado: { img: tornado, color: "bg-neutral-500" },
  notPresent: { img: notPresent, color: "bg-stone-400" },
};

export { getCurrentDay, weatherImagesAndColors };
