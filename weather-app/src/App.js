import { Navbar, InputLocation, WeatherInfoCard } from "./component/index";
import { useLocation } from "./hooks/useLocation";

export default function App() {
  const { weatherInfo } = useLocation();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <InputLocation />
        <WeatherInfoCard weatherInfo={weatherInfo} />
      </div>
    </div>
  );
}
