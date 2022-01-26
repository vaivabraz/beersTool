import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { Grid } from "../../components";
import { BeerType, getBeers, reactQueryKeys } from "../../services";
import { GridComponent } from "./GridComponent.component";

export const BeerGrid = () => {
  const { isLoading, data } = useQuery(reactQueryKeys.beersList, getBeers);
  const [beersList, setBeersList] = useState(data);

  const sortBeersByAbv = useCallback((arrayToSort, ascending = true) => {
    const order = ascending ? 1 : -1;
    const sorted = [...arrayToSort]?.sort((a, b) => order * (a.abv - b.abv));
    setBeersList(sorted);
  }, []);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data && (
          <>
            <h3>Amazing selection of beers</h3>
            <button onClick={() => sortBeersByAbv(data)}>
              Sort by alcohol volume (min-max)
            </button>
            <button onClick={() => sortBeersByAbv(data, false)}>
              Sort by alcohol volume (max-min)
            </button>
            <Grid<BeerType>
              data={beersList || data}
              gridComponent={GridComponent}
            />
          </>
        )
      )}
      ;
    </>
  );
};
