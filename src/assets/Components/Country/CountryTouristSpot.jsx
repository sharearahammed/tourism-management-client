import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";

const CountryTouristSpot = () => {
    const {id} = useParams();
    console.log(id)
    const [countrys,setCountrys] = useState([]);
    useEffect(()=>{
        fetch(`https://tourism-management-server-dusky.vercel.app/alltouristsSpot/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setCountrys(data)
        })
    },[id])
    console.log(countrys)
    return (
        <div className="mt-16 flex flex-col gap-7 p-7">
            {
                countrys.map(country=><Cards key={country._id}
                    country={country}
                ></Cards>)
            }
        </div>
    );
};

export default CountryTouristSpot;