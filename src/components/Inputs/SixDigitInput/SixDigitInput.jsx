import { useContext } from "react";
import styles from './SixDigitInput.module.css'
import { MyContext } from "../../ContextProvider/ContextProvider";

function SixDigitInput() {

  const {digits, onChangeSixDigitInput, onKeyDownSixDigitInput, inputRefs} = useContext(MyContext)

  return (
    <div className={styles.inputBox}>
      {digits.map((digit, index) => (
        <input
          className={styles.input}
          key={index}
          type="number"
          value={digit}
          onChange={(e) => onChangeSixDigitInput(index, e.target.value)}
          onKeyDown={(e) => onKeyDownSixDigitInput(index, e)}
          ref={inputRefs[index]}
        />
      ))}
    </div>
  );
}

export default SixDigitInput
