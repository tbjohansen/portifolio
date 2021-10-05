import React from "react";

export const Button = ({text, onPress}) => {
  return (
      <button onClick={onPress}>
          {text}
      </button>
  );
};