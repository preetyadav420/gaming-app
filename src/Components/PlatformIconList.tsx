import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiSega, SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    sega: SiSega,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;
        return (
          <Icon
            color="gray.500"
            key={platform.id}
            as={iconMap[platform.slug] as React.ElementType}
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
