import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const logout = () => {
        logOut()
          .then()
          .catch((error) => {
            console.log(error.message);
          });
      };

  const links = (
    <>
      <li className="text-[#BC986B]">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-400 border border-[#BC986B]"
              : isPending
              ? "pending"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      
      <li className="text-[#BC986B]">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-400 border border-[#BC986B]"
              : isPending
              ? "pending"
              : ""
          }
          to={"/allTouristsSport"}
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li className="text-[#BC986B]">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-400 border border-[#BC986B]"
              : isPending
              ? "pending"
              : ""
          }
          to={"/addAllTouristsSpot"}
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li className="text-[#BC986B]">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-400 border border-[#BC986B]"
              : isPending
              ? "pending"
              : ""
          }
          to={"/mylist"}
        >
          My List
        </NavLink>
      </li>

    </>
  );
  return (
    <div className="bg-transparent bg-base-100 shadow-5-strong lg:px-[120px] navbar flex-no-wrap fixed top-0 right-0 left-0 z-10 flex">
      <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="text-pink-600 btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  
  <div className="navbar-end">
  
      {user ? (
        <div className="hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip={user.displayName}>
        <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
        <div className="w-11 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
      </div>
      </div>
      ):
      <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
        
      </div>
      }
    
    <div>
    {
            user ? <div onClick={logout} className="btn bg-red-600 text-white text-[8px] lg:text-[14px]">
              Sign Out
          </div>
          :
          <div className="flex">
            <Link
              className="btn bg-[#BC986B] hover:bg-slate-400 text-white text-[8px] lg:text-[14px]"
              to={"/login"}
            >
              Sign In
            </Link>
            <Link to="/register" className="ml-3 btn">Register</Link>
          </div>
          }
    </div>
    
  </div>
</div>
    </div>
  );
};

export default Navbar;
