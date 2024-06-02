import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

const NavbarLanding = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <>
      <Navbar
        maxWidth="full"
        className="bg-[#10203C]"
      >
        <NavbarBrand>
          <div className="w-40">
            <img src="/logoFormsDuniya.jpg" />
          </div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            {/* <p className="text-white">Explore </p> */}
            <Link className="text-white font-semibold" href="#">Explore Schools</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-semibold" href="#">Boarding Schools</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-semibold" href="#">Admission Tracker</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-semibold" href="#">Compare Schools</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button className="bg-blue-500" as={Link} color="default" variant="flat" onClick={handleClick}>
              <span className="text-white font-semibold">
                Login
              </span>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarLanding;
