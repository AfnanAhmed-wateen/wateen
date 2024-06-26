import React from "react";
import { Button } from "./style";

const AnimatedButton = (props) => {
  return (
    <>
      <Button
        bg={props.bg}
        style={{ backgroundColor: props.bg }}
        theme={props.theme}
      >
        <span>{props.name}</span>
        <span>
          <img
            src={
              props.theme === "#52006a"
                ? "/images/right-arrow-white.webp"
                : "/images/right-arrow-orange.webp"
            }
            alt=""
          />
        </span>
      </Button>
    </>
  );
};

export default AnimatedButton;
