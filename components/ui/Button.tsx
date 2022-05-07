import { Button } from "@chakra-ui/react";
import { AlohaButton } from "../interfaces/interfaces";
// eslint-disable-next-line no-use-before-define
import React from "react";

interface AlohaButtonProps {
  buttonProps: AlohaButton[];
  children?: React.ReactNode;
}
const AloButton = ({ buttonProps }: AlohaButtonProps) => {
  return (
    <>
      {buttonProps.map((button) => {
        return (
          <Button key={button.id} {...button}>
            {button.text}
          </Button>
        );
      })}
    </>
  );
};

export default AloButton;
