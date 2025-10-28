import styles from "./ButtonMain.module.css"

function Button({children, onClick, isDisabled, classes}) {
    return (
        <button disabled={isDisabled} onClick={onClick} className={`${styles.btn} ${classes}`}>
            {children}
        </button>
    )
}

export default Button
