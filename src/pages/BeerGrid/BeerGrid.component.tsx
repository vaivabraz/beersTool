import { useQuery } from "react-query";
import { Grid } from "../../components";
import { BeerType, getBeers } from "../../services";
import { GridComponent } from "./GridComponent.component";

export const BeerGrid = () => {
  const { isLoading, data } = useQuery("beers", getBeers);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data && (
          <>
            <h3>Amazing selection of beers</h3>
            <Grid<BeerType> data={data} gridComponent={GridComponent} />
          </>
        )
      )}
      ;
    </>
  );
};
