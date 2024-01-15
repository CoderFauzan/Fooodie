import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);
  // console.log(resData);
  const { name, cuisines, avgRatingString, costForTwo } =
    resData?.info;
   const { deliveryTime } = resData?.info?.sla;
  //  console.log({deliveryTime});

  return (
    <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg w-full h-1/2"
        alt="res-logo"
        src={CDN_URL +
          resData.info.cloudinaryImageId
        }
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="text-sm"> ⭐{avgRatingString}</h4>
      <div className="flex justify-between pt-2">
      <h4 className="text-sm"> ⌚{deliveryTime} minutes</h4>
      <h4 className="text-sm">💵{costForTwo}</h4>
      </div>
      <h6 className="text-xs pt-2">{cuisines.join(", ")}</h6>
      {/* <h6 className="text-xs pt-2">User:{loggedInUser}</h6> */}
    </div>
  );
};


// Higher order component
export const withIsOpen = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-lime-600 text-white m-2 p-2 rounded-lg">Pure VEG🥗</label>
        <RestaurentCard {...props}/>
      </div>
    );
  };
};

export default RestaurentCard;
