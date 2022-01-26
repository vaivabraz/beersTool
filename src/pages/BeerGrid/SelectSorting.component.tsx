import { useCallback } from "react";
import { BeerType } from "../../services";
import "./Styles/BeerGrid.css";

type SelectSortingType = {
  data: BeerType[];
  updateData: (sortedData: BeerType[]) => void;
};

export const SelectSorting = ({ data, updateData }: SelectSortingType) => {
  const sortBeersByAbv = useCallback(
    (arrayToSort: BeerType[], ascending = true) => {
      const order = ascending ? 1 : -1;
      const sorted = [...arrayToSort]?.sort((a, b) => order * (a.abv - b.abv));
      updateData(sorted);
    },
    []
  );
  const sortBeersByName = useCallback((arrayToSort: BeerType[]) => {
    const sorted = [...arrayToSort]?.sort((a, b) => (a.name < b.name ? -1 : 1));
    updateData(sorted);
  }, []);

  return (
    <div className="SortingContainer">
      <p>Sort by </p>
      <select
        onChange={(event) => {
          //TODO: move values to constant
          switch (event.target.value) {
            case "name":
              sortBeersByName(data);
              break;
            case "abv_descend":
              sortBeersByAbv(data, false);
              break;
            case "abv_ascend":
              sortBeersByAbv(data);
              break;
            default:
              updateData(data);
          }
        }}
      >
        <option>-</option>
        <option value="abv_ascend">Alcohol volume (min-max)</option>
        <option value="abv_descend">Alcohol volume (max-min)</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};
