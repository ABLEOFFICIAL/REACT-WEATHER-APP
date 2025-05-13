import React, { useState, useEffect } from "react";
import Gloomy from "../images/gloomy.png";
import Clear from "../images/clear.png";
import Clouds from "../images/clouds.png";
import HeavyThunder from "../images/heavy-thunderstorm.png";
import Mild from "../images/mild.png";
import Rain from "../images/rain.png";
import Snowfall from "../images/snowfall.png";
import Thunderstorm from "../images/thunderstorm.png";
import Drizzle from "../images/drizzle.png";

const WeatherCondition = ({ countryData }) => {
  const [weatherImg, setWeatherImg] = useState();

  useEffect(() => {
    if (!countryData || !countryData.list || !countryData.list[0]?.weather)
      return;

    const weatherMain = countryData.list[0].weather[0].main;

    switch (weatherMain) {
      case "Clear":
        setWeatherImg(Clear);
        break;
      case "Clouds":
        setWeatherImg(Clouds);
        break;
      case "Rain":
        setWeatherImg(Rain);
        break;
      case "Drizzle":
        setWeatherImg(Drizzle);
        break;
      case "Thunderstorm":
        setWeatherImg(Thunderstorm);
        break;
      case "Snow":
        setWeatherImg(Snowfall);
        break;
      case "Sand":
      case "Dust":
      case "Fog":
      case "Haze":
        setWeatherImg(Gloomy);
        break;
      default:
        setWeatherImg(Mild); // fallback image
    }
  }, [countryData]);

  return (
    <div className="w-full py-5">
      {weatherImg && (
        <img src={weatherImg} alt="Weather Icon" className="w-3/5 m-auto" />
      )}
    </div>
  );
};

export default WeatherCondition;
