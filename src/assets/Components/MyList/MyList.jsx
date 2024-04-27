import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
  const [datas, setDatas] = useState([]);
  const [toggle , setToggle] = useState(false);
  const reload = ()=>{
    setToggle(!toggle);
  }
  const { user } = useContext(AuthContext) || {};
  useEffect(() => {
    fetch(`http://localhost:5000/alltouristsSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(data);
      });
  }, [user,toggle]);

  const handleDelete = (email)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
          // console.log('delete confirm')
          fetch(`http://localhost:5000/alltouristsSpot/${email}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // setDatas(data)
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Tourists Spot has been deleted.",
                  icon: "success",
                });
                reload();
              }
            
        })
        }
      });
  }
  return (
    <div className="overflow-x-auto">
        <Navbar></Navbar>
      <table className="mt-24 table">
        {/* head */}
        <thead>
          <tr className="bg-[#3F73AC] text-white">
            <th></th>
            <th>Email</th>
            <th>Tourists Spot Name</th>
            <th>Country Name</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            datas.map((data,idx)=><tr className="" key={data._id}>
                <th>{idx+1}.</th>
                <td className="border">{user.email}</td>
                <td className="border">{data.touristsSpotName}</td>
                <td className="border">{data.countryName}</td>
                <td className="border">{data.location}</td>
                <td  className="flex gap-2">
                    <Link className="btn bg-green-500 text-white text-[20px]" to={`/updateTouristsSpot/${data._id}`}>
                    <GrEdit /></Link>
                    
                    <button onClick={()=>handleDelete(data.email)} className="btn bg-red-500 text-white text-[20px]"><RiDeleteBin5Line /></button>
                </td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
