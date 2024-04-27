import { useEffect, useState } from "react";
import AllTouristSpotCard from "./AllTouristSpotCard";

const AllTouristSpot = () => {
    const [ datas , setDatas ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/alltouristsSpot')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDatas(data);
        }) 
    },[])
    return (
        <div className="justify-center items-center max-w-7xl mx-auto lg:grid md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            {
              datas.map(data=><AllTouristSpotCard key={data._id}
                data={data}></AllTouristSpotCard>)  
            }
        </div>
    );
};

export default AllTouristSpot;