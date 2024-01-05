import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //fetching api

    const json = await data.json();
    console.log(json);

    // opitional chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">

      <div className="filter">

        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {

            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);

          }}>Search</button>

        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRatingString > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurent
        </button>
        
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
