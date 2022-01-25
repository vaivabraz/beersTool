import axios from "./axiosConfig";
import { BeerType } from "./types";

export const getBeers = async () => {
  try {
    const response = await axios.get<BeerType[]>("beers");
    return response.data;
  } catch (e) {
    console.log("error:", e);
  }
};
