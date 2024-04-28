import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import Footer from "../Footer/Footer";

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
        <div className="dark:bg-slate-800">
            <div className="dark:bg-slate-800 dark:text-white justify-center items-center lg:grid md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 flex flex-col p-7">
            {
                countrys.map(country=><Cards key={country._id}
                    country={country}
                ></Cards>)
            }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CountryTouristSpot;