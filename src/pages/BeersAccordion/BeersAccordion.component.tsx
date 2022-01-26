import { useState } from "react";
import { useQuery } from "react-query";
import { getBeers, BeerType, reactQueryKeys } from "../../services";
import { Accordion } from "../../components";
import { BeerAccordionItem } from "./BeerAccordionItem.component";

export const BeersAccordion = () => {
  const [timestamp, setTimestamp] = useState<string>();

  const { isLoading, data } = useQuery(reactQueryKeys.beersList, getBeers);

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data && (
          <>
            <Accordion<BeerType>
              data={data}
              controlSections={{ expand: false, updateAt: timestamp }}
              bodyComponent={BeerAccordionItem}
            />
            <button onClick={() => setTimestamp(Date())}>
              Collapse everything!
            </button>
          </>
        )
      )}
    </div>
  );
};
