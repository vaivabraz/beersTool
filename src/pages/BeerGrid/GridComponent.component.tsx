import { BeerType } from "../../services";
import "./Styles/BeerGrid.css";

export const GridComponent = ({ data }: { data: BeerType }) => {
  return (
    <div className="BeerGridItem">
      <img src={data.image_url} alt={data.name}></img>
      <div className="BeerGridItemRightColumn">
        <div>
          <h3>{data.name}</h3>
          <h4>{data.tagline}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};
