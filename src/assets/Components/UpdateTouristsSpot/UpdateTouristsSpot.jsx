import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import axios from "axios";

const UpdateTouristsSpot = () => {
  const { id } = useParams();
  // console.log(id)
  const touristsSpot = useLoaderData();
  const [singleData, setSingleData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState();
  useEffect(() => {
    const singleData = touristsSpot.find((item) => item._id == id);
    setSingleData(singleData);
  }, [id, touristsSpot]);

  // console.log(singleData)
  const {
    _id,
    touristsSpotName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totaVisitorsPerYear
  } = singleData;

  const handleUpdateTouristSpot = async (e) => {
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
    const photo = form.photo.files[0];
    const formdata = new FormData();
    formdata.append("image", photo);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formdata
    );

    const UpdatetouristsSpot = {
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totaVisitorsPerYear,
      photo: data.data.display_url,
    };

    console.log(UpdatetouristsSpot);

    fetch(
      `https://tourism-management-server-dusky.vercel.app/alltouristsSpot/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatetouristsSpot),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tourists Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

    // handle image change
    const handleImage = (image) => {
      setImagePreview(URL.createObjectURL(image));
      setImageText(image.name);
    };

  return (
    <div className="dark:bg-slate-800">
      <div className="bg-[#F4F3F0] dark:bg-slate-800 dark:text-white p-5 mt-20 lg:p-24">
        <Navbar></Navbar>
        <Helmet>
          <title>Roamazing Update Tourist Spot</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <h2 className="text-center text-3xl font-extrabold mb-8">
          {" "}
          Update a Tourists Spot
        </h2>
        <form onSubmit={handleUpdateTouristSpot}>
          {/* Form name and quantity row */}
          <div className="md:flex gap-4 mb-8">
            <div className="md:w-full">
              <label className="label">
                <span>Tourists Spot Name</span>
              </label>
              <input
                type="text"
                name="touristsSpotName"
                placeholder="Tourists Spot Name"
                defaultValue={touristsSpotName}
                className="input dark:text-black input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-4 mb-8">
            <div className="mt-9 flex flex-col">
              <span className="mb-6">Select Country</span>
              <div>
                <select
                  className="p-4 rounded-lg w-full bg-red-200"
                  name="countryName"
                >
                  <option>Bangladesh</option>
                  <option>Thailand</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Vietnam</option>
                  <option>Cambodia</option>
                </select>
              </div>
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
                className="input dark:text-black input-bordered w-full"
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
                className="input dark:text-black input-bordered w-full"
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
                className="input dark:text-black input-bordered w-full"
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
                className="input dark:text-black input-bordered w-full"
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
                className="input dark:text-black input-bordered w-full"
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
                className="input dark:text-black input-bordered w-full"
              />
            </div>
          </div>

          {/* Form name and quantity row */}
          <div className="md:flex gap-4 mb-8">
            <div className="flex items-center md:w-full">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  onChange={(e) => {
                    handleImage(e.target.files[0]);
                  }}
                  name="photo"
                  accept="image/*"
                  placeholder="Photo Url"
                />
                <div className="justify-center h-16 w-16 object-cover overflow-hidden flex items-center">
                  {imagePreview && <img src={imagePreview} />}
                </div>
                <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                  {imageText ? imageText : "Upload Image"}
                </div>
              </label>
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
      <Footer></Footer>
    </div>
  );
};

export default UpdateTouristsSpot;
