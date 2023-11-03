import React, { useContext } from "react";
import Restaurant from "./Restaurant";
import { RestaurantContext } from "../context/restaurantContext";
import '../styles/favorites.css'


const Favorites = () => {
const { restaurants} = useContext(RestaurantContext);


const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

const favoriteRestaurants = restaurants.filter((restaurant) => favorites.includes(restaurant.id));


return (
    <div className="container-fluid">
      <div className="favorites-wrap row d-flex flex-column justify-content-center">
      <h2 className="text-center text-uppercase mb-4">your favorite restaurants</h2>
      <div className="favorites">
          {favoriteRestaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} {...restaurant}  />
          ))}
      </div>
      </div>
    </div>
  );
};

export default Favorites;
