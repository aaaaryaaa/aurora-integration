import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Partners",
    "Timeline",
    "Sponsors",
    "Hackathon",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[none]" isBlurred='false'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <Logo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button>
            Home
          </Button>
        </NavbarItem>
        <NavbarItem isActive>
          <Button>
            About
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button>
            Partners
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button>
            Timeline
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button>
            Sponsors
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* HERE IS LOGIN */}
          <Link href='/register'>                 
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* HERE IS HACKATHON */}
          <Button as={Link} color="primary" href="#" variant="flat">
            Hackathon
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "foreground" : index === menuItems.length - 1 ? "primary" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
