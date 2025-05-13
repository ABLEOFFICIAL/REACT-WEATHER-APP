import React, { useEffect, useState } from "react";
import MyHeader from "./components/MyHeader";
import WeatherCondition from "./components/WeatherCondition";
import MyInfo from "./components/MyInfo";
import LocationModal from "./components/LocationModal";
import WeatherInfo from "./components/moreInfo/WeatherInfo";

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [countryData, setCountryData] = useState();
  const [searchCountry, setSearchCountry] = useState();
  // const [countryName, setCountryName] = useState();

  const apiKey = "d8718dad84e281aa484f88a07d41f81f";
  // const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  const countryAPI = "https://restcountries.com/v3.1/all";
  const apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?units=metric";

  useEffect(() => {
    async function displayCountry() {
      try {
        const res = await fetch(countryAPI);
        const data = await res.json();
        const extractedCountry = data[0].name.common;
        // setCountryName(extractedCountry);

        // fetch weather
        const weatherRes = await fetch(`
          ${apiURL}&q=${extractedCountry}&appid=${apiKey}`);
        const weatherData = await weatherRes.json();
        setCountryData(weatherData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    displayCountry();
  }, []);

  function handleClick() {
    setShowSearch(true);
  }
  function removeModal() {
    setShowSearch(false);
  }
  function filterCountries(e) {
    setSearchValue(e.target.value);
    async function filterCountry(e) {
      try {
        const res = await fetch(countryAPI);
        const data = await res.json();

        const searchCountries = data.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
        setSearchCountry(searchCountries);
      } catch {
        console.error("Error fetching data:", error);
      }
    }
    filterCountry(e);
  }
  function displayClickedCountry(e) {
    let countryName = e.currentTarget.dataset.id;
    fetch(countryAPI)
      .then((res) => res.json())
      .then((data) => {
        const clickedCountry = data.filter((item) => item.cca3 === countryName);
        const clickedCountryName = clickedCountry[0].name.common;
        displayClicked(clickedCountryName);
      });
    async function displayClicked(country) {
      try {
        const res = await fetch(`${apiURL}&q=${country}&appid=${apiKey}`);
        const data = await res.json();
        setCountryData(data);
      } catch {
        console.error("Error fetching data:", error);
      }
    }
  }

  return (
    <>
      {countryData && (
        <div className="px-5 pt-12 relative">
          <MyHeader countryData={countryData} onClick={handleClick} />
          <WeatherCondition countryData={countryData} />
          <MyInfo countryData={countryData} />
          <LocationModal
            searchCountry={searchCountry}
            onChange={(e) => filterCountries(e)}
            searchValue={searchValue}
            onClick={removeModal}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            setSearchValue={setSearchValue}
            displayClickedCountry={displayClickedCountry}
          />
          <WeatherInfo />
        </div>
      )}
    </>
  );
};

export default App;
