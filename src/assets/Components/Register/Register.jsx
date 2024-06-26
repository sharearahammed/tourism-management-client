import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";

const Register = () => {
  const {user} = useContext(AuthContext)
  const { createUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const cpassword = e.target.cpassword.value;
    const accepcted = e.target.terms.checked;
    const upload = e.target.upload.files[0];
    const formdata = new FormData();
    formdata.append("image", upload);
    console.log(name, upload, email, password, accepcted);

    const {data}  = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formdata
    );
    console.log(data.data.display_url)
    // reset error
    setError("");
    // reset success

    // validation
    if (password.length < 6) {
      setError("Password should be 6 charecters or longer");
      return;
    }
    const pattern = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!pattern.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }
    // if(password !== cpassword){
    //     setError('Passwords do not match')
    //     return;
    // }
    else if (!accepcted) {
      setError("Please accepct our terms and conditions!");
      return;
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Create Successfully");

        // Update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: data.data.display_url,
        })
          .then(() => console.log("profile updated"))
          .catch();
        //Logout
        logOut()
          .then()
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.error(error.meggase);
        setError(error.meggase);
      });

    navigate("/login");
  };

  return (
    <div className="dark:bg-slate-800">
      <Navbar></Navbar>
      <Helmet>
        <title>Roamazing Register</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/GtZcrKV/reg-Page-Cover.jpg)",
      }}
      className="bg-cover mt-20 md:mt-28 flex flex-col justify-center font-[sans-serif] text-[#333]  p-4"
    >
      <div className="text-center lg:mb-12">
        <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold">Please Signup</h1>
      </div>
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
        <form onSubmit={handleSignup}>
          <div className="space-y-6">
            <div>
              <label className="text-sm mb-2 block text-white">Name</label>
              <input
                name="name"
                type="text"
                className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter name"
                required
              />
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="text"
                className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Photo</label>
              <input
                name="upload"
                type="file"
                className=""
                accept="image/*"
                required
              />
            </div>

            <div className="relative">
              <label className="text-white text-sm mb-2 block">Password</label>
              <input
                className="  bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <span
                className="absolute top-11 right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {/* <div>
              <label className="text-sm mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div> */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="terms"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-white ml-3 block text-sm">
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  className="text-[#2563EB] font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <div className="!mt-10">
            <button className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
              Create an account
            </button>
          </div>
        </form>
        <p className="text-white text-sm mt-6 text-center">
          Already have an account?{" "}
          {
            user ? 
            <Link className="text-blue-600 font-semibold underline ml-1" to={"/"}>
              Signin here
          </Link> : 
          <Link className="text-blue-600 font-semibold underline ml-1" to={"/login"}>
          Signin here
      </Link>
          }
        </p>

        {error && <p className="text-red-600">{error}</p>}
      </div>
      <ToastContainer />
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Register;
