import React from "react";
import SearchBar from "./SearchBar";
import RecentSearch from "./RecentSearch";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      {showSearch && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.6 }}
          className={`absolute bg-white h-screen w-full top-0 left-0 px-8 pt-7 pb-5 location-modal"
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
          <div></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LocationModal;
