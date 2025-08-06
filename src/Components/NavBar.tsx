import { HStack, Image } from "@chakra-ui/react";
import logo from "../Assets/logo.svg";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" p={1}>
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
