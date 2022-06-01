import { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        weatherInfo,
        setWeatherInfo,
        loading,
        setLoading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
