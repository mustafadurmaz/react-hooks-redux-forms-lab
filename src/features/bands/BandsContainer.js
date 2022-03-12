import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();
  const bandItems = bands.map((band) => <li key={band}>{band}</li>);
  const handleBandSubmit = (band) => {
    dispatch(bandAdded(band));
  };

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>{bandItems}</ul>
    </div>
  );
}

export default BandsContainer;