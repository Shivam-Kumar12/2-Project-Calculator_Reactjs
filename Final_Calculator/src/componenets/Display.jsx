import React from "react";
import styles from "./Display.module.css";

const Display = ({ displayValue, showMessage }) => {
  return (
    <div>
      {showMessage ? (
        <div className={styles.message}>Please write any equation</div>
      ) : (
        <input
          type="text"
          value={displayValue}
          className={styles.display}
          readOnly
        />
      )}
    </div>
  );
};

export default Display;
