import Body from "../components/Body";
import Facts from "../components/Facts";
import Features from "../components/Features";
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
    </>
  );
};

export default Landing;
