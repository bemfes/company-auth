
import { createContext, useState, useRef } from "react"

export const MyContext = createContext()

function ContextProvider({children}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showTwoAuthLayout, setShowTwoAuthLayout] = useState(false)
    const [digits, setDigits] = useState(['', '', '', '', '', ''])
    const [fetchCode, setFetchCode] = useState('')
    const [invalidCode, setInvalidCode] = useState(false)
    const [invalidUser, setInvalidUser] = useState(false)
    const [time, setTime] = useState(120)
    const [timeRunning, setTimeRunning] = useState(false)
    const [error, setError] = useState(null)
    
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
      ];

    const digitsString = digits.join('')

    function onInputEmail(e) {
        setEmail(e.target.value);
        setInvalidUser(false)
        setError(null)
    }

    function onInputPassword(e) {
        setPassword(e.target.value);
        setInvalidUser(false)
        setError(null)
    }
    
    function onChangeSixDigitInput(index, value) {
        const newValue = value.slice(0, 1);
    
        const newDigits = [...digits];
        newDigits[index] = newValue;
        setDigits(newDigits);
    
        if (newValue && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }
        setInvalidCode(false)
      };
    
    function onKeyDownSixDigitInput(index, e) {
        if (e.key === 'Backspace' && digits[index] === '' && index > 0) {
          inputRefs[index - 1].current.focus();
          console.log('focus');
        }
      };

    function onClickContinueBtn() {
        if (digitsString !== fetchCode) {
            setInvalidCode(true)
        }
    }

    function onClickGetNewCodeBtn() {
      setTime(120)
      setTimeRunning(true)
    }

    function onClickArrowBtn() {
        setEmail('');
        setPassword('');
        setShowTwoAuthLayout(false)
        setDigits(['', '', '', '', '', ''])
        setInvalidCode(false)
        setTime(120)
    }
    
    return <MyContext.Provider value={{email, setEmail, password, setPassword, onInputEmail, onInputPassword,
         showTwoAuthLayout, setShowTwoAuthLayout, onChangeSixDigitInput, onKeyDownSixDigitInput, inputRefs,
          digitsString, digits, setDigits, onClickContinueBtn, invalidCode,
        onClickArrowBtn, invalidUser, setInvalidUser, fetchCode, setFetchCode,
         time, setTime, timeRunning, setTimeRunning, onClickGetNewCodeBtn,
        error, setError}}>{children}</MyContext.Provider>
}

export default ContextProvider
