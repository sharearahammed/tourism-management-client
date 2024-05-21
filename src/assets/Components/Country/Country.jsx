import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {

    const [countrys , setCountrys] = useState([]);
    useEffect(()=>{
        fetch('https://tourism-management-server-dusky.vercel.app/country')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setCountrys(data)
        })
    },[])
    return (
        <div className="dark:bg-slate-800 dark:text-white mt-24 max-w-7xl mx-auto">
            <h1 data-aos="zoom-in-down"
      data-aos-duration="2000" className="mb-20 text-4xl font-extrabold text-center">Countrys</h1>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
                {
                    countrys.map(country=><CountryCard key={country._id}
                        country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Country;