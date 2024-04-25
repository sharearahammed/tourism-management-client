import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <title>Opulent Escapes Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
