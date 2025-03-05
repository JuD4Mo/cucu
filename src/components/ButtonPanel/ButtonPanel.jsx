import React from "react";
import Button from "../Button/Button";

const ButtonPanel = ({ handleClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "DEL", "C"
  ];

  return (
    <div className="button-panel">
      {buttons.map((btn) => (
        <Button key={btn} label={btn} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ButtonPanel;
