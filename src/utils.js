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
  Clear: sun,
  Clouds: cloudy,
  Rain: thunderstorm,
  Thunderstorm: thunderstorm,
  Snow: snowflake,
  Mist: mist,
  Drizzle: drizzle,
  Smoke: smoke,
  Haze: mist,
  Dust: dust,
  Fog: fog,
  Sand: sand,
  Ash: ash,
  Squall: thunderstorm,
  Tornado: tornado,
};

const weatherColors = {
  Clear: "bg-amber-400",
  Clouds: "bg-sky-300",
  Rain: "bg-sky-500",
  Thunderstorm: "bg-sky-500",
  Snow: "bg-blue-200",
  Mist: "bg-neutral-500",
  Drizzle: "bg-sky-500",
  Smoke: "bg-slate-600",
  Haze: "bg-neutral-500",
  Dust: "bg-neutral-300",
  Fog: "bg-gray-300",
  Sand: "bg-amber-300",
  Ash: "bg-slate-700",
  Squall: "bg-sky-500",
  Tornado: "bg-neutral-500",
  notPresent: "bg-stone-400",
};

export { getCurrentDay, weatherImages, weatherColors };
