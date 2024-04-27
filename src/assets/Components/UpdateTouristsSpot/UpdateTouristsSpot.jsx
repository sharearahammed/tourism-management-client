import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const UpdateTouristsSpot = () => {
  const{id} = useParams();
  console.log(id)
    const touristsSpot = useLoaderData()
    const [ singleData , setSingleData ]= useState({})
    useEffect(()=>{
      const singleData = touristsSpot.find(item=>item._id == id);
      setSingleData(singleData)
    },[id, touristsSpot])

    console.log(singleData)
    const {_id,touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totaVisitorsPerYear,photo} = singleData;

    const handleUpdateTouristSpot = e =>{
        e.preventDefault();

        const form = e.target;

        const touristsSpotName = form.touristsSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const photo = form.photo.value;

        const UpdatetouristsSpot = {touristsSpotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,totaVisitorsPerYear,photo}

        console.log(UpdatetouristsSpot)

        fetch(`http://localhost:5000/alltouristsSpot/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(UpdatetouristsSpot)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourists Spot Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }

  return (
    <div className="bg-[#F4F3F0] p-24">
        <Navbar></Navbar>
      <h2 className="text-center text-3xl font-extrabold mb-8">
        {" "}
        Update a Tourists Spot
      </h2>
      <form onSubmit={handleUpdateTouristSpot}>
        {/* Form name and quantity row */}
        <div className="md:flex gap-4 mb-8">
          <div className="md:w-1/2">
            <label className="label">
              <span>Tourists Spot Name</span>
            </label>
            <input
              type="text"
              name="touristsSpotName"
              placeholder="Tourists Spot Name"
              defaultValue={touristsSpotName}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">
              <span>Country Name</span>
            </label>
            <input
              type="text"
              name="countryName"
              placeholder="Country Name"
              defaultValue={countryName}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Form name and quantity row */}
        <div className="md:flex gap-4 mb-8">
          <div className="md:w-1/2">
            <label className="label">
              <span>Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="location"
              defaultValue={location}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">
              <span>Short Description</span>
            </label>
            <input
              type="text"
              name="shortDescription"
              placeholder="description"
              defaultValue={shortDescription}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Form name and quantity row */}
        <div className="md:flex gap-4 mb-8">
          <div className="md:w-1/2">
            <label className="label">
              <span>Average Cost</span>
            </label>
            <input
              type="text"
              name="averageCost"
              placeholder="Cost"
              defaultValue={averageCost}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">
              <span>Seasonality</span>
            </label>
            <input
              type="text"
              name="seasonality"
              placeholder="Seasonality"
              defaultValue={seasonality}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Form name and quantity row */}
        <div className="md:flex gap-4 mb-8">
          <div className="md:w-1/2">
            <label className="label">
              <span>Travel Time</span>
            </label>
            <input
              type="text"
              name="travelTime"
              placeholder="Travel Time"
              defaultValue={travelTime}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">
              <span>Total Visitors Per Year</span>
            </label>
            <input
              type="text"
              name="totaVisitorsPerYear"
              placeholder="Total Visitors Per Year"
              defaultValue={totaVisitorsPerYear}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Form name and quantity row */}
        <div className="md:flex gap-4 mb-8">
          <div className="md:w-full">
            <label className="label">
              <span>Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Update"
            className="bg-[#D2B48C] btn btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTouristsSpot;
