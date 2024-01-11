import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0035068%26lng%3D77.5890953%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    ); //fetching api

    const json = await data.json();
    console.log(json);

    // opitional chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">

      <div className="filter flex align-middle justify-center">

        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-200 m-4 rounded-xl" onClick={() => {

            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);

          }}>Search</button>

        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-amber-300 m-4 rounded-xl"
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
        
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurent) => (
          // <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          <Link
            key={restaurent.info.id}
            to={"/restaurants/" + restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
