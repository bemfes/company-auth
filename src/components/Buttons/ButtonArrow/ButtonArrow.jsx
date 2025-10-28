import styles from './ButonArrow.module.css'

function ButtonArrow({arrowIcon, onClick}) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles.btnPosition}`}>
          <img src={arrowIcon} />  
        </button>
    )
}

export default ButtonArrow
