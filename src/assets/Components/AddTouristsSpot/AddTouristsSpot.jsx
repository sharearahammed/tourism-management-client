import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { IoIosArrowDown } from "react-icons/io";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [countryName, setcountryName] = useState("");
  const [error, setError] = useState("");
  const handlecountryNameChange = (e) => {
    setcountryName(e.target.value);
    setError("");
  };

  const handleAddTouristSpot = (e) => {
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
    const email = user.email;
    const name = user.displayName;

    if (!countryName) {
      setError("Please select a Country");
      return;
    }
    const addtouristsSpot = {
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totaVisitorsPerYear,
      photo,
      email,
      name,
    };

    console.log(addtouristsSpot);

    fetch(
      `https://tourism-management-server-dusky.vercel.app/alltouristsSpot`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addtouristsSpot),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourists Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          toast.error("Added Failed")
        }
      });
  };

  return (
    <div className="dark:bg-slate-800 bg-[#F4F3F0] p-3 lg:p-24">
      <Navbar></Navbar>
      <h2 className="text-center text-3xl font-extrabold mb-8">
        {" "}
        Add a Tourists Spot
      </h2>
      <form onSubmit={handleAddTouristSpot}>
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
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="md:flex gap-4 mb-8">
          <div className="mt-9">
            <details className="dropdown">
              <summary className="m-1 btn bg-red-200 text-gray-700 lg:w-[600px] text-lg font-bold">
                Country Name <IoIosArrowDown />
              </summary>
              <div className="mb-8 flex flex-col p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <div className="flex flex-col mb-2">
                  <div>
                    <input
                      type="checkbox"
                      name="countryName"
                      value="Bangladesh"
                      checked={countryName === "Bangladesh"}
                      onChange={handlecountryNameChange}
                      className="mr-2"
                    />
                    <label htmlFor="countryNameBangladesh" className="mr-4">
                      Bangladesh
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="countryName"
                      value="Thailand"
                      checked={countryName === "Thailand"}
                      onChange={handlecountryNameChange}
                      className="mr-2"
                    />
                    <label htmlFor="countryNameThailand" className="mr-4">
                      Thailand
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="countryName"
                      value="Indonesia"
                      checked={countryName === "Indonesia"}
                      onChange={handlecountryNameChange}
                      className="mr-2"
                    />
                    <label htmlFor="countryNameIndonesia" className="mr-4">
                      Indonesia
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="countryName"
                      value="Malaysia"
                      checked={countryName === "Malaysia"}
                      onChange={handlecountryNameChange}
                      className="mr-2"
                    />
                    <label htmlFor="countryNameMalaysia" className="mr-4">
                      Malaysia
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="countryName"
                      value="Vietnam"
                      checked={countryName === "Vietnam"}
                      onChange={handlecountryNameChange}
                      className="mr-2"
                    />
                    <label htmlFor="countryNameVietnam" className="mr-4">
                      Vietnam
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="countryName"
                      value="Cambodia"
                      checked={countryName === "Cambodia"}
                      onChange={handlecountryNameChange}
                      className="mr-2"
                    />
                    <label htmlFor="countryNameCambodia">Cambodia</label>
                  </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </details>
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
              className="input input-bordered w-full"
              required
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
              className="input input-bordered w-full"
              required
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
              className="input input-bordered w-full"
              required
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
              className="input input-bordered w-full"
              required
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
              className="input input-bordered w-full"
              required
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
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Form name and quantity row */}
        <div className="md:flex gap-4 mb-8">
          <div className="md:w-1/2">
            <label className="label">
              <span>User Email</span>
            </label>
            <input
              type="text"
              name=""
              placeholder="Email"
              defaultValue={user.email}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="md:w-1/2">
            <label className="label">
              <span>User Name</span>
            </label>
            <input
              type="text"
              name=""
              defaultValue={user.displayName}
              placeholder="Name"
              className="input input-bordered w-full"
              required
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
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Add Tourists Spot"
            className="bg-[#D2B48C] btn btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
