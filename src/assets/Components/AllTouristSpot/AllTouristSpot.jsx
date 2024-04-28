import { useEffect, useState } from "react";
import AllTouristSpotCard from "./AllTouristSpotCard";

const AllTouristSpot = () => {

    const [ datas , setDatas ] = useState([]);
    useEffect(()=>{
        fetch('https://tourism-management-server-dusky.vercel.app/alltouristsSpot')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDatas(data);
        }) 
    },[])
  
    console.log(datas.averageCost);
    return (
        <div className="p-7 dark:bg-slate-800 mt-20 max-w-7xl mx-auto">
            <button onClick="" className="btn">Sort</button>
            <div className="justify-center items-center lg:grid md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            {
              datas.map(data=><AllTouristSpotCard key={data._id}
                data={data}></AllTouristSpotCard>)  
            }
        </div>
        </div>
    );
};

export default AllTouristSpot;