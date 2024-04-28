/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
const TouristsSpotsCard = ({touristsSpot}) => {
    const {_id,touristsSpotName,countryName,location,seasonality,photo} = touristsSpot;
    console.log('...................')
    console.log(touristsSpot)
    console.log('...................')
    return (
        <div className="border p-5 lg:p-0bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl h-auto">
            <img src={photo}
                    alt="Product" className="h-80 w-full object-cover rounded-t-xl" />
            <div className="px-4 py-3">
                <span className="text-gray-400 lg:mr-3 uppercase text-xs">{countryName}</span>
                <p className="dark:text-white text-lg font-bold text-black truncate block capitalize">{touristsSpotName}</p>
                <div className="flex items-center gap-6">
                <div className="text-[25px]">
                <p><IoLocationOutline /></p>
                </div>
                    <div className="text-lg text-black cursor-auto my-3 dark:text-white ">
                    {location}
                    </div>
                </div>
                <div className="flex items-center gap-6">
                <div className="text-[25px]">
                <p><TiWeatherPartlySunny />
</p>
                </div>
                    <div className="text-lg text-black cursor-auto my-3 dark:text-white ">
                    {seasonality}
                    </div>
                </div>
                <Link to={`/viewDetails/${_id}`}><button className="bg-[#BC986B] text-white mt-3 btn">View Details</button></Link>
            </div>
    </div>
            
    );
};

export default TouristsSpotsCard;