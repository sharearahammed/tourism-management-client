import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import HomeTouristsSpots from "../HomeTouristsSpots/HomeTouristsSpots";
import ContactUs from "../ContactUs.jsx/ContactUs";
import NextTrip from "../NextTripCard/NextTrip";
import Footer from "../Footer/Footer";
import Country from "../Country/Country";

const Home = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <Navbar></Navbar>
      <Helmet>
        <title>Roamazing Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <HomeTouristsSpots></HomeTouristsSpots>
      <Country></Country>
      <NextTrip></NextTrip>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div> 
  );
};

export default Home;
