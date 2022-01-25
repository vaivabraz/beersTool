import { BeerType } from "../../services";
import "./Styles/BeerAccordion.css";

export const BeerAccordionItem = ({ data }: { data: BeerType }) => {
  return (
    <div className="BeerAccordionItem">
      <h4>{data.tagline}</h4>
      <p>{`First brewed ${data.first_brewed}`}</p>
      <p>{data.description}</p>
    </div>
  );
};
