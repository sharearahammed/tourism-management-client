import { useContext, useEffect, useState } from "react";
import AllTouristSpotCard from "./AllTouristSpotCard";
import Footer from "../Footer/Footer.jsx";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Authconfiguration/Authconfiguration.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { IoIosArrowDropdown } from "react-icons/io";

const AllTouristSpot = () => {
  const { spotCollection } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);

  const handleDescendingSort = () => {
    const descending = spotCollection.sort((a, b) => b.averageCost - a.averageCost);
    // console.log("-------------------", descending);
    setDatas(descending);
  };

  // console.log(spotCollection);

  useEffect(() => {
    fetch("http://localhost:5000/alltouristsSpot")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDatas(data);
      });
  }, []);

  // console.log(datas);
  return (
    <div className="dark:bg-slate-800">
      <Navbar></Navbar>
      <Helmet>
        <title>Roamazing All Tourist Spots</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="p-7 mt-20">
        <div className="flex justify-center items-center">
        <details className="text-center dropdown">
          <summary className="bg-red-200 w-[200px] text-xl font-extrabold m-1 btn">Sort
          <IoIosArrowDropdown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleDescendingSort()}>
              <a>Descending by Cost</a>
            </li>
          </ul>
        </details>
        </div>
        <div className="justify-center items-center lg:grid md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
          {datas.map((data) => (
            <AllTouristSpotCard key={data._id} data={data}></AllTouristSpotCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllTouristSpot;
