import { useContext, useEffect } from "react";
import { MyContext } from "../ContextProvider/ContextProvider";
import styles from "./Timer.module.css"

function Timer() {

    const {time, timeRunning, setTime, setTimeRunning} = useContext(MyContext)

    useEffect(() => {
            let timer
            if (timeRunning) {
              timer = setInterval(() => {
                setTime(prev => {
                    if (prev > 0) return prev - 1
                    else {
                        setTimeRunning(false)
                        return 0
                    }
                })
              }, 1000)
            }
            return () => {
              if (timer) {
                clearInterval(timer)
              }
            }
          }, [timeRunning])

          return <p className={styles.text}>Enter the code before time ends {Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}</p>
}

export default Timer
