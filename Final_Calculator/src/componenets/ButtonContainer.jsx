import React from "react";
import styles from "./ButtonContainer.module.css";
let ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "00",
    "=",
  ];
  return (
    <div className={styles.buttons_group}>
      {buttonNames.map((buttonName) => (
        <button className={styles.Btn} onClick={() =>onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
