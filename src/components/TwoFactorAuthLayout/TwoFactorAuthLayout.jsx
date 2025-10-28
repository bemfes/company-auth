import { useContext } from 'react'
import styles from './TwoFactorAuthLayout.module.css'
import { MyContext } from '../ContextProvider/ContextProvider'
import Button from '../Buttons/ButtonMain/ButtonMain'
import SixDigitInput from '../Inputs/SixDigitInput/SixDigitInput'
import Timer from '../Timer/Timer'

function TwoFactorAuthLayout() {
    
    const {onClickContinueBtn, invalidCode, digitsString, time, onClickGetNewCodeBtn} = useContext(MyContext)
    
    return (
        <div>
            <h2 className={`title ${styles.title}`}>Two-Factor Authentication</h2>
            <p className={styles.text}>Enter the 6-digit code from the Google <br /> Authenticator app</p>

            <SixDigitInput/>

            {digitsString.length < 6 && time !== 0 ? <Timer/> : ""}

            {invalidCode && digitsString.length === 6 ? <p className={styles.invalidCodeText}>Invalid code</p> : ''}

            {time === 0 && <Button onClick={onClickGetNewCodeBtn} classes={styles.mt}>Get new code</Button>}
            
            {digitsString.length === 6 ? <Button classes={styles.mt} isDisabled={invalidCode ? true : false} onClick={onClickContinueBtn}>Continue</Button> : ''}
        </div>
    )
}

export default TwoFactorAuthLayout
