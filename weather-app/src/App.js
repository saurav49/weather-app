import { Navbar, InputLocation, WeatherInfoCard } from "./component/index";
import { useLocation } from "./hooks/useLocation";

export default function App() {
  const { weatherInfo } = useLocation();

  return (
    <div>
      <Navbar />
      <InputLocation />
      <WeatherInfoCard
        weatherInfo={weatherInfo}
        // currentWeather={weatherInfo?.weather[0]?.main}
        // currentTemp={weatherInfo?.main?.temp}
        // currentDate={weatherInfo?.currentDate}
      />
    </div>
  );
}
