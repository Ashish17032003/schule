import Body from "../components/Body";
import Facts from "../components/Facts";
import Features from "../components/Features";
import Footer from "../components/Footer";
import NavbarLanding from "../components/NavbarLanding";
import Testimonial from "../components/Testimonial";
import Working from "../components/Working";

const Landing = () => {
  return (
    <>
      <NavbarLanding />
      <Body />
      <Facts />
      <Features />
      <Working />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Landing;
