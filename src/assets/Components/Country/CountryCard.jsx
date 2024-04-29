/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const CountryCard = ({country}) => {
    const {countryName,shortDescription,photo} = country;
  return (
    <div data-aos="fade-right"
    data-aos-easing="ease-out-cubic"
   data-aos-duration="2000" className="rounded-lg">
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
