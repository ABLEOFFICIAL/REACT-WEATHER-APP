import React from "react";
import { MdAccessTime } from "react-icons/md";

const RecentSearch = ({
  searchCountry,
  setShowSearch,
  setSearchValue,
  displayClickedCountry,
}) => {
  function handleClick(e) {
    setShowSearch(false);
    setSearchValue("");
    displayClickedCountry(e);
  }
  return (
    <>
      {searchCountry && (
        <div className="text-black mt-5">
          <h6 className="font-medium">Recent search</h6>
          <div className="py-4">
            {searchCountry.slice(0, 10).map((country, index) => (
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                key={country.cca3}
                data-id={country.cca3}
                className="flex w-full justify-between py-3"
              >
                <div>
                  <MdAccessTime className="inline" />
                  <span className="pl-5">{country.name.common}</span>
                </div>
                <span>34°/23°</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentSearch;
