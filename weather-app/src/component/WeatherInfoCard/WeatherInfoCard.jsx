import React from "react";

const WeatherInfoCard = ({ weatherInfo }) => {
  console.log(weatherInfo);
  return (
    <div>
      <div></div>
      <div>
        <h1>{weatherInfo?.currentTemp}</h1>
        <h2>{weatherInfo?.currentWeather}</h2>
        <p>{weatherInfo?.currentDay}</p>
        <span>{weatherInfo?.currentWeatherIcon}</span>
      </div>
    </div>
  );
};

export { WeatherInfoCard };
