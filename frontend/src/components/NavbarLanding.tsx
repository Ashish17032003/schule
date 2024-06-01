import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavbarLanding = () => {
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
            <Button className="bg-blue-500" as={Link} color="default" href="#" variant="flat">
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
