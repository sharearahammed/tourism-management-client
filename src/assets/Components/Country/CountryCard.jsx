/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    const {countryName,shortDescription,photo} = country;
  return (
    <div className="rounded-lg">
      
      <Link to={`/countryTourismSpot/${countryName}`}>
      <div className="rounded-lg card bg-base-100 shadow-xl image-full">
  <img className="h-full w-full rounded-lg" src={photo} alt="country" />
  <div className="rounded-lg card-body">
    <h2 className="card-title">{countryName}</h2>
    <p className="text-[10px]">{shortDescription}</p>
    
  </div>
</div>
      </Link>
    </div>
  );
};

export default CountryCard;
