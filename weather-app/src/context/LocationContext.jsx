import { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});

  return (
    <LocationContext.Provider
      value={{ location, setLocation, weatherInfo, setWeatherInfo }}
    >
      {children}
    </LocationContext.Provider>
  );
};
