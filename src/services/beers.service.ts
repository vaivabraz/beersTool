import axios from "./axiosConfig";

export const getBeers = async () => {
  try {
    const response = await axios.get("beers");
    return response.data;
  } catch (e) {
    console.log("error:", e);
  }
};
