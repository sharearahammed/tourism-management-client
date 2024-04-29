import { useEffect, useState } from "react";
import AllTouristSpotCard from "./AllTouristSpotCard";
import Footer from '../Footer/Footer.jsx'
import { Helmet } from "react-helmet";

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
  
    console.log(datas.averageCost);
    return (
        <div className="dark:bg-slate-800">
            <Helmet>
        <title>Roamazing All Tourist Spots</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div className="p-7 mt-20">
            <button onClick="" className="btn">Sort</button>
            <div className="justify-center items-center lg:grid md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
            {
              datas.map(data=><AllTouristSpotCard key={data._id}
                data={data}></AllTouristSpotCard>)  
            }
        </div>
        
        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default AllTouristSpot;