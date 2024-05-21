/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const TouristsSpotsCard = ({ touristsSpot }) => {
  const {
    _id,
    touristsSpotName,
    countryName,
    location,
    seasonality,
    averageCost,
    photo,
  } = touristsSpot;

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="border p-5 lg:p-0 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl h-[675px] flex flex-col"
    >
      <img
        src={photo}
        alt="Product"
        className="h-80 w-full object-cover rounded-t-xl"
      />
      <div className="flex flex-col flex-grow px-4 py-3">
        <span
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className="text-gray-400 lg:mr-3 uppercase text-xs"
        >
          {countryName}
        </span>
        <p
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className=" text-lg font-bold text-black truncate block capitalize"
        >
          {touristsSpotName}
        </p>
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className="flex items-center gap-6"
        >
          <div className="text-[25px]">
            <p className="text-black">
              <IoLocationOutline />
            </p>
          </div>
          <div className="text-lg text-black cursor-auto my-3  ">
            {location}
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className="flex items-center gap-6"
        >
          <div className="text-[25px]">
            <p className="text-black">
              <TiWeatherPartlySunny />
            </p>
          </div>
          <div className="text-lg text-black cursor-auto my-3  ">
            {seasonality}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-[25px]">
            <p className="text-black">
              <PiCurrencyDollarSimpleBold />
            </p>
          </div>
          <div className=" text-lg text-black cursor-auto my-3">
            {averageCost}
          </div>
        </div>
      </div>
      <Link className="pl-6 pb-6" to={`/viewDetails/${_id}`}>
        <button className="animate__animated animate__pulse animate__delay-2s animate__infinite infinite bg-[#BC986B] text-white mt-3 btn">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default TouristsSpotsCard;
