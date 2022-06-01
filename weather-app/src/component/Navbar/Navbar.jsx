import { weatherColors } from "../../utils";
import { useLocation } from "../../hooks/useLocation";

const Navbar = () => {
  const {
    weatherInfo: { currentWeather },
  } = useLocation();

  console.log(weatherColors, currentWeather);

  return (
    <nav
      className={`uppercase ${
        currentWeather
          ? weatherColors[currentWeather]
          : weatherColors["notPresent"]
      } text-white tracking-wide text-md font-normal py-3 px-5 w-full text-right md:text-center`}
    >
      my weather
    </nav>
  );
};

export { Navbar };
