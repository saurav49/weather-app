import { weatherImages } from "../../utils";
import notPresent from "../../assets/undraw_weather_app_re_kcb1.svg";

const WeatherInfoCard = ({ weatherInfo }) => {
  return (
    <div
      className="flex flex-col mt-7 w-[280px] h-[320px] md:w-[420px] md:h-[240px] p-4 rounded-2xl bg-gray-100 shadow-md border-2 border-gray-100
    md:flex md:flex-row md:items-center md:w-[350px] md:py-6
    "
    >
      {weatherInfo.hasOwnProperty("currentWeather") ? (
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={weatherImages[`${weatherInfo?.currentWeather}`]}
            alt="weather"
            className="w-2/4 md:w-[80%]"
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img src={notPresent} alt="weather" className="w-full md:w-[70%]" />
        </div>
      )}
      {weatherInfo.hasOwnProperty("currentWeather") && (
        <div className="px-3 text-gray-800 md:w-1/2 md:ml-8">
          <h1 className="text-4xl font-normal my-3">
            {weatherInfo?.currentTemp}&#176;
          </h1>
          <h2 className="text-xl font-medium">{weatherInfo?.currentWeather}</h2>
          <p className="text-xs font-medium my-2">{weatherInfo?.currentDay}</p>
        </div>
      )}
    </div>
  );
};

export { WeatherInfoCard };
