import { useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { PiCurrencyDollarBold } from "react-icons/pi";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const ViewDetails = () => {
    const viewTouristsSpots = useLoaderData();
    const {touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totaVisitorsPerYear,photo} = viewTouristsSpots;
    console.log(viewTouristsSpots)

    return (
        <div className="dark:bg-slate-800 dark:text-white py-8">
            <Navbar></Navbar>
            <Helmet>
        <title>Roamazing Spot Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Slide>
            <div className="mt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg mb-4">
                    <img className="w-full h-full object-cover" src={photo} alt="" />
                </div>
                
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-3xl font-bold mb-2">Tourists Spot Name: {touristsSpotName}</h2>
                <h3 className="text-xl font-bold mb-2">Country Name: {countryName}</h3>

                <div className="mt-7 flex">
                <div className="mr-4 mb-5 flex items-center gap-6">
                        <span className="text-[20px] font-bold "><IoLocationOutline /></span>
                        <span className="">{location}</span>
                    </div>
                    <div className="mr-4 mb-5 flex items-center gap-6">
                        <span className="font-bold "><PiCurrencyDollarBold /></span>
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
                    <p className="text-sm mt-2">
                        {shortDescription}
                    </p>
                </div>
            </div>
        </div>
    </div>
            </Slide>
    
    <Footer></Footer>
</div>

    );
};

export default ViewDetails;