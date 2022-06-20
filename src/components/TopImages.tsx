import React from "react";
import { Flex, Image } from "@chakra-ui/react";

import Logo from "../assets/svgs/mainLogo.png";
import FightBtn from "../assets/svgs/button.svg";

const TopImages: React.FC = () => {
  return (
    <Flex justify="center">
      <Image src={Logo} alt="logo" w="424px" mt="13px" />
      <Image
        src={FightBtn}
        alt="fight-btn"
        w="260px"
        display={["none", "none", "none", "block"]}
        cursor="pointer"
        position="absolute"
        right="40px"
        mt="34px"
        transition="1s"
        _hover={{ transform: "scale(1.1)" }}
      />
    </Flex>
  );
};

export default TopImages;
