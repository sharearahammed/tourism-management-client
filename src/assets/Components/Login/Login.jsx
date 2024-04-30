import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  const { setReload, signInUser, setUser, GoogleSignIn, GitHubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const logedInUser = result.user;
        setUser(logedInUser);
        navigate("/");
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };

  const handleGithubSignIn = () => {
    GitHubSignIn()
      .then((result) => {
        const logedInUser = result.user;
        setUser(logedInUser);
        navigate("/");
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // Login user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
        setReload(true);
        toast.success("User Login Successfully");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("The email or password that you entered is Incorrect ");
      });
  };

  return (
    <div className="dark:bg-slate-800">
      <Navbar></Navbar>
      <Helmet>
        <title>Roamazing Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/zxDM9n5/tourism-Loginc-Back-Cover.jpg)",
        }}
        className="mt-20 hero min-h-screen"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <ToastContainer />
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-white text-xl md:text-3xl lg:text-5xl font-bold">
              Please Login now!
            </h1>
          </div>
          <div className="border card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="text-white bg-transparent border border-whites w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  required
                />
              </div>
              <div className="form-control">
                <div className="relative">
                  <label className="text-sm mb-2 block text-white">
                    Password
                  </label>
                  <input
                    className="text-white bg-transparent border border-whites w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="text-white absolute top-11 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <label className="label">
                  <a
                    href="#"
                    className="text-white label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-white">
                Do not have an account? Please{" "}
                <Link
                  to={"/register"}
                  className="hover:underline text-blue-400 underline font-semibold"
                >
                  Signup
                </Link>
              </p>
              <hr />
              <h3 className="mt-2 text-white text-2xl text-center font-semibold">
                {" "}
                Or
              </h3>
            </form>
            <div className="flex flex-col p-2 gap-2">
              <button onClick={handleGoogleSignIn} className="btn">
                <p className="text-xl flex items-center gap-3">
                  <img className="h-7 w-7" src="/google.svg" alt="" />
                  Google
                </p>
              </button>
              <button onClick={handleGithubSignIn} className="btn">
                <p className="text-xl flex items-center gap-3">
                  <img className="h-7 w-7" src="/github.svg" alt="" />
                  Github
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
