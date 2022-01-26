import { useState } from "react";
import { useQuery } from "react-query";
import { Grid } from "../../components";
import { BeerType, getBeers, reactQueryKeys } from "../../services";
import { GridComponent } from "./GridComponent.component";
import { SelectSorting } from "./SelectSorting.component";

export const BeerGrid = () => {
  const { isLoading, data } = useQuery(reactQueryKeys.beersList, getBeers);
  const [beersList, setBeersList] = useState<BeerType[]>();

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data && (
          <>
            <SelectSorting updateData={setBeersList} data={data} />
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
