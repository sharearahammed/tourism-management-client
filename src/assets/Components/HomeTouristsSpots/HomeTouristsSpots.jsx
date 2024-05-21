import { useEffect, useState } from "react";
import TouristsSpotsCard from "./TouristsSpotsCard";

const HomeTouristsSpots = () => {
    const [touristsSpots , setTouristsSpots] = useState([]);
    useEffect(()=>{
        fetch(`https://tourism-management-server-dusky.vercel.app/touristsSpot`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setTouristsSpots(data)
        })
    },[])
    
    return (
        <div className="dark:bg-slate-800 dark:text-white mt-20">
            <div className=" p-10">
            <h1 data-aos="zoom-in-down"
      data-aos-duration="2000" className="mb-3 text-4xl font-extrabold text-center">Tourists Spots</h1>
            <p data-aos="zoom-in-down"
      data-aos-duration="2000" className="text-center">Explore the world's most iconic tourist spots with us! From the majestic wonders of nature <br /> to the vibrant pulse of bustling cities, our curated selection of tourist spots offers something <br /> for every adventurer. Discover historical landmarks, natural br wonders, cultural hotspots, and <br /> hidden gems that will leave you in awe. Let us guide you to the must-see attractions and <br /> hidden treasures that will make your journey truly unforgettable.</p>
            </div>
            <div className="dark:bg-slate-800 dark:text-white justify-center items-center max-w-7xl mx-auto lg:grid md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            {
                touristsSpots.map(touristsSpot=><TouristsSpotsCard key={touristsSpot._id}
                    touristsSpot={touristsSpot}></TouristsSpotsCard>)
            }
            </div>
        </div>
    );
};

export default HomeTouristsSpots;