import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import HomeTouristsSpots from "../HomeTouristsSpots/HomeTouristsSpots";
import ContactUs from "../ContactUs.jsx/ContactUs";
import NextTrip from "../NextTripCard/NextTrip";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <title>Opulent Escapes Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <HomeTouristsSpots></HomeTouristsSpots>
      <NextTrip></NextTrip>
      <ContactUs></ContactUs>
      <Footer></Footer> 
    </div>
  );
};

export default Home;
