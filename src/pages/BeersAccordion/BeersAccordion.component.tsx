import { useEffect, useState } from "react";
import { getBeers, BeerType } from "../../services";
import { Accordion } from "../../components";
import { BeerAccordionItem } from "./BeerAccordionItem.component";

export const BeersAccordion = () => {
  const [timestamp, setTimestamp] = useState<string>();
  const [beers, setBeers] = useState<BeerType[]>([]);

  useEffect(() => {
    async function fetchBeers() {
      const response = await getBeers();
      if (response) {
        setBeers(response);
      }
    }
    fetchBeers();
  }, []);

  return (
    <div>
      <Accordion<BeerType>
        data={beers}
        controlSections={{ expand: false, updateAt: timestamp }}
        bodyComponent={BeerAccordionItem}
      />
      <button onClick={() => setTimestamp(Date())}>Collapse everything!</button>
    </div>
  );
};
