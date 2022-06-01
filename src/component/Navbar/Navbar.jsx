import { weatherImagesAndColors } from "../../utils";
import { useLocation } from "../../hooks/useLocation";

const Navbar = () => {
  const {
    weatherInfo: { currentWeather },
  } = useLocation();

  return (
    <nav
      className={`uppercase ${
        currentWeather
          ? weatherImagesAndColors[currentWeather]["color"]
          : weatherImagesAndColors["notPresent"]["color"]
      } text-white tracking-wide text-md font-normal py-3 px-5 w-full text-right md:text-center`}
    >
      my weather
    </nav>
  );
};

export { Navbar };
