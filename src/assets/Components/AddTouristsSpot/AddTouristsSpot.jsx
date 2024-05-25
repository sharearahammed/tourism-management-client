import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import axios from "axios";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState();
  // console.log(user);

  const handleAddTouristSpot = async (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const touristsSpotName = form.touristsSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCosts = form.averageCost.value;
    const averageCost = parseInt(averageCosts);
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const photo = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    const email = user.email;
    const name = user.displayName;
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    // if(countryName){
    //   s
    // }

    const addtouristsSpot = {
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totaVisitorsPerYear,
      photo: data.data.display_url,
      email,
      name,
    };

    // console.log(addtouristsSpot);

    if (countryName != "Choose Country") {
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
            toast.error("Added Failed");
          }
        });
    } else {
      // console.log("------------------------please")
      toast.error("Please Select Your Country!");
    }
  };

  // handle image change
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <ToastContainer />
      <Navbar></Navbar>
      <div className=" dark:bg-slate-800 dark:text-white bg-[#F4F3F0] mt-20 p-3 lg:p-24">
        <Helmet>
          <title>Roamazing Add Tourist Spot</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
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
            <div className="mt-9 flex flex-col">
              <span className="mb-6">Select Country</span>
              <div>
                <select
                  className="p-4 rounded-lg w-full bg-red-200"
                  name="countryName"
                >
                  <option>Choose Country</option>
                  <option>Bangladesh</option>
                  <option>Thailand</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Vietnam</option>
                  <option>Cambodia</option>
                </select>
              </div>
            </div>
            {error && <p>Added Failed</p>}
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
                type="number"
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
          <div className="md:flex gap-4">
            <div className="md:w-1/2">
              <label className="label">
                <span>User Email</span>
              </label>
              <input
                type="text"
                name=""
                placeholder="Email"
                defaultValue={user.email}
                className="dark:text-black input input-bordered w-full"
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
                className="dark:text-black input input-bordered w-full"
                required
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
                  required
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
              value="Add Tourists Spot"
              className="bg-[#D2B48C] btn btn-block"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddTouristsSpot;
