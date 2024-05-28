import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const NavbarLanding = () => {
    return (
        <>
            <Navbar maxWidth="full">
                <NavbarBrand>
                    <div className="w-40" >
                        <img src='/logoFormsDuniya.jpg' />
                    </div>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                        {/* <p className="text-white">Explore </p> */}
                        <Link href="#">Explore Schools</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">Boarding Schools</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">Admission Tracker</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">Compare Schools</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}

export default NavbarLanding