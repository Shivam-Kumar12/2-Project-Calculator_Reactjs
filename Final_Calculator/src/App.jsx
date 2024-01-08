import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Display from "./componenets/display";
import Calculator_name from "./componenets/Calculator_name";
import ButtonContainer from "./componenets/ButtonContainer";

function App() {
  let [calVal, setCalVal] = useState("");
  let [showMessage, setShowMessage] = useState(false);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
      setShowMessage(false);
    } else if (buttonText === "=") {
      if (calVal === "") {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      } else {
        const result = eval(calVal);
        setCalVal(result);
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }, [showMessage]);

  return (
    <center>
      <div className={styles.calculator}>
        <Calculator_name />
        <Display displayValue={calVal} showMessage={showMessage} />
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
