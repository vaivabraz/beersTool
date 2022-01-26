import { useCallback } from "react";
import { BeerType } from "../../services";

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
    <div>
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
        <option value="abv_ascend">Sort by alcohol volume (min-max)</option>
        <option value="abv_descend">Sort by alcohol volume (max-min)</option>
        <option value="name">Sort by name</option>
      </select>
    </div>
  );
};
