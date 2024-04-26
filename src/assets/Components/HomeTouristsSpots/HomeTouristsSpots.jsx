import { useEffect, useState } from "react";
import TouristsSpotsCard from "./TouristsSpotsCard";

const HomeTouristsSpots = () => {
    const [touristsSpots , setTouristsSpots] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/touristsSpot`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTouristsSpots(data)
        })
    },[])
    
    return (
        <div>
            total : {touristsSpots.length}
            <div className="justify-center items-center max-w-7xl mx-auto lg:grid md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            {
                touristsSpots.map(touristsSpot=><TouristsSpotsCard key={touristsSpot._id}
                    touristsSpot={touristsSpot}></TouristsSpotsCard>)
            }
            </div>
        </div>
    );
};

export default HomeTouristsSpots;