import styles from './InputWithIcon.module.css'

function Input({type, icon, placeholder, onInput, value}) {
    
    return (
        <div className={styles.inputBox}>
            <img className={styles.icon} src={icon} />
            <input value={value} onInput={onInput} className={styles.input} icon={icon} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input
