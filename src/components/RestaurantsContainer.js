import Restaurant from "./Restaurant";
import { restaurants } from "../data/data";

const RestaurantsContainer = () => {
  //   console.log(restaurants);
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantsContainer;
