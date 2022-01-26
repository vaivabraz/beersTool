import { useState } from "react";
import { BeerGrid, BeersAccordion } from "..";
import "./Styles/Application.css";

export const Application = () => {
  const [activePage, setActivePage] = useState<"BeerList" | "BeerGrid">(
    "BeerGrid"
  );

  return (
    <div>
      <div className="applicationHeader">
        <button onClick={() => setActivePage("BeerList")}>
          See the list of beers
        </button>
        <button onClick={() => setActivePage("BeerGrid")}>
          See the grid of beers
        </button>
      </div>
      {activePage === "BeerGrid" && <BeerGrid />}
      {activePage === "BeerList" && <BeersAccordion />}
    </div>
  );
};
