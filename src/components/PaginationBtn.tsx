import React from "react";
import { Button, IconButton } from "@chakra-ui/react";

interface Props {
  label: string;
  title?: string;
  icon?: React.ReactElement;
  selected?: boolean;
  isDisabled?: boolean;
  onChangePage(): void;
}

const PaginationBtn: React.FC<Props> = ({
  label,
  icon,
  title = "",
  isDisabled = false,
  selected = false,
  onChangePage
}) => {
  return icon ? (
    <IconButton
      onClick={() => onChangePage()}
      icon={icon!}
      color="white"
      bgColor="#0043C0"
      isDisabled={isDisabled}
      aria-label={label}
      h="56px"
      w="56px"
      _hover={{ bgColor: "#4771be", cursor: "pointer" }}
    />
  ) : (
    <Button
      onClick={() => onChangePage()}
      color={selected ? "white" : "#04002B"}
      bgColor={selected ? "#0043C0" : "white"}
      isDisabled={isDisabled}
      aria-label={label}
      h="56px"
      w="56px"
      display={[selected ? "block" : "none", "block"]}
      _hover={{ bgColor: "#4771be", cursor: "pointer" }}
    >
      {title}
    </Button>
  );
};

export default PaginationBtn;
