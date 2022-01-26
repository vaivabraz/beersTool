import { BeerType } from "../../services";
import "./Styles/BeerGrid.css";

export const GridComponent = ({ data }: { data: BeerType }) => {
  return (
    <button
      onClick={() => {
        console.log(`${data.name} was selected`);
      }}
      className="BeerGridItem"
    >
      <img src={data.image_url} alt={data.name}></img>
      <div className="BeerGridItemRightColumn">
        <div>
          <h3>{data.name}</h3>
          <h4>{data.tagline}</h4>
          <p>Alcohol volume: {data.abv}</p>
        </div>
      </div>
    </button>
  );
};
