import { weatherImages } from "../../utils";

const WeatherInfoCard = ({ weatherInfo }) => {
  return (
    <div
      className="flex flex-col mt-7 w-[280px] p-4 rounded-xl bg-gray-100 shadow-lg border-2 border-gray-100
    md:flex md:flex-row md:items-center md:w-[350px] md:py-6
    "
    >
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={weatherImages[`${weatherInfo.currentWeatherDesc}`]}
          alt="weather"
          className="w-2/4  md:w-3/4"
        />
      </div>
      <div className="px-3 text-gray-800 md:w-1/2 md:ml-5">
        <h1 className="text-4xl font-normal my-3">
          {weatherInfo?.currentTemp}&#176;
        </h1>
        <h2 className="text-xl font-medium">{weatherInfo?.currentWeather}</h2>
        <p className="text-xs font-medium my-2">{weatherInfo?.currentDay}</p>
      </div>
    </div>
  );
};

export { WeatherInfoCard };
