import React from "react";
import SearchBar from "./SearchBar";
import RecentSearch from "./RecentSearch";
import "./location.css";

const LocationModal = ({
  showSearch,
  onClick,
  searchValue,
  onChange,
  searchCountry,
  setShowSearch,
  setSearchValue,
  displayClickedCountry,
}) => {
  return (
    <div
      className={`absolute bg-white h-full w-full top-0 left-0 px-8 pt-7 pb-5 rounded-b-3xl ${
        showSearch ? "block" : "hidden"
      }`}
    >
      <SearchBar
        onChange={onChange}
        searchValue={searchValue}
        onClick={onClick}
      />
      <RecentSearch
        searchCountry={searchCountry}
        setShowSearch={setShowSearch}
        setSearchValue={setSearchValue}
        displayClickedCountry={displayClickedCountry}
      />
    </div>
  );
};

export default LocationModal;
