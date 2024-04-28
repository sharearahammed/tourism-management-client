import { IoLocationOutline } from "react-icons/io5";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const AllTouristSpotViewDetails = () => {
  const { id } = useParams();
  const spotDetails = useLoaderData();

  const [data, setData] = useState({});
  useEffect(() => {
    const singledata = spotDetails.find((item) => item._id == id);
    setData(singledata);
  }, [id, spotDetails]);

  const {
    touristsSpotName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totaVisitorsPerYear,
    photo,
  } = data;
  console.log(data);
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <Navbar></Navbar>
      <div className=" dark:bg-slate-800 py-8 mt-14 lg:mt-22 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg mb-4">
              <img className="w-full h-full object-cover" src={photo} alt="" />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-3xl font-bold mb-2 dark:text-white ">
              Tourists Spot Name: {touristsSpotName}
            </h2>
            <h3 className="text-xl font-bold mb-2">
              Country Name: {countryName}
            </h3>

            <div className="mt-7 flex">
              <div className="mr-4 mb-5 flex items-center gap-6">
                <span className="text-[20px] font-bold ">
                  <IoLocationOutline />
                </span>
                <span className="dark:text-white">{location}</span>
              </div>
              <div className="mr-4 mb-5 flex items-center gap-6">
                <span className="font-bold ">
                  <PiCurrencyDollarBold />
                </span>
                <span className="">{averageCost}</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="mr-4 mb-5 flex items-center gap-6">
                <span className="font-bold ">Seasonality:</span>
                <span className="">{seasonality}</span>
              </div>
              <div className="mr-4 mb-5 flex items-center gap-6">
                <span className="font-bold ">Travel Time:</span>
                <span className="">{travelTime}</span>
              </div>

              <div className="mr-4 mb-5 flex items-center gap-6">
                <span className="font-bold ">Total Visitors Per Year:</span>
                <span className="">{totaVisitorsPerYear}</span>
              </div>
            </div>

            <div>
              <span className="font-bold"> Description:</span>
              <p className="text-sm mt-2">{shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllTouristSpotViewDetails;
