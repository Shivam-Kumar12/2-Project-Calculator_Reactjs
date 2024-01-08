import { useState } from "react";
import styles from "./App.module.css";
import Display from "./componenets/display";
import ButtonContainer from './componenets/ButtonContainer'
function App() {
  return (
    <center>
    <div className={styles.calculator}>
      <Display/>
      <ButtonContainer/>
    </div>
    </center>
  );
}

export default App;
