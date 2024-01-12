import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Banner.css";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          varient="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h2>Get out and stretch your imagination</h2>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button varient="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
