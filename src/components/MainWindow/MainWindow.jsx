import LoginLayout from '../LoginLayout/LoginLayout'
import arrowIcon from '/arrow-left.svg'
import styles from './MainWindow.module.css'
import TwoFactorAuthLayout from '../TwoFactorAuthLayout/TwoFactorAuthLayout'
import { useContext} from 'react'
import { MyContext } from '../ContextProvider/ContextProvider'
import ButtonArrow from '../Buttons/ButtonArrow/ButtonArrow'
import Logo from '../Logo/Logo'

function MainWindow() {
    
    const {showTwoAuthLayout, onClickArrowBtn} = useContext(MyContext)
    
    return (
        <div className={styles.mainWindow}>
            <Logo/>

            {!showTwoAuthLayout && <LoginLayout/>}

            {showTwoAuthLayout && <TwoFactorAuthLayout/>}

            {showTwoAuthLayout && <ButtonArrow onClick={onClickArrowBtn} arrowIcon={arrowIcon}/>}
        </div>
    )
}

export default MainWindow
