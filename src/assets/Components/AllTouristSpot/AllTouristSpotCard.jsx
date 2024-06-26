/* eslint-disable react/prop-types */

import { IoLocationOutline } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const AllTouristSpotCard = ({ data }) => {
  const {
    _id,
    touristsSpotName,
    countryName,
    location,
    averageCost,
    seasonality,
    photo,
  } = data;
  console.log(data)
  return (
    <div>
      <div className="h-[675px] dark:text-white mt-16 md:mt-20 lg:mt-24 p-5 lg:p-0 dark:bg-slate-800 bg-white shadow-md rounded-xl duration-500 border border-white hover:scale-105 hover:shadow-xl ">
        <img
          src={photo}
          alt="Product"
          className="h-80 w-full object-cover rounded-t-xl"
        />
        <div className="px-4 py-3">
          <span className="text-gray-400 lg:mr-3 uppercase text-xs">
            {countryName}
          </span>
          <p className="dark:text-white text-lg font-bold text-black truncate block capitalize">
            {touristsSpotName}
          </p>
          <div className="flex items-center gap-6">
            <div className="text-[25px]">
              <p>
                <IoLocationOutline />
              </p>
            </div>
            <div className="dark:text-white text-lg text-black cursor-auto my-3">
              {location}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-[25px]">
              <p>
                <TiWeatherPartlySunny />
              </p>
            </div>
            <div className="dark:text-white text-lg text-black cursor-auto my-3">
              {seasonality}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-[25px]">
              <p>
                <PiCurrencyDollarSimpleBold />
              </p>
            </div>
            <div className="dark:text-white text-lg text-black cursor-auto my-3">
              {averageCost}
            </div>
          </div>

          <Link to={`/allTouristSpotViewDetails/${_id}`}>
            <button className="mt-3 btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpotCard;
