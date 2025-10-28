import Button from '../Buttons/ButtonMain/ButtonMain'
import Input from '../Inputs/InputWithIcon/InputWithIcon'
import styles from './LoginLayout.module.css'
import userIcon from '/user.svg'
import lockIcon from '/lock.svg'
import { useContext } from 'react'
import { MyContext } from '../ContextProvider/ContextProvider'
import { useQuery } from '@tanstack/react-query'

function LoginLayout() {
    const {onInputEmail, onInputPassword, email, password, setShowTwoAuthLayout,
        invalidUser, setInvalidUser, setFetchCode, setTimeRunning, error, setError,
    } = useContext(MyContext)
    
    let { userData, isLoading, errorData, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:9000/users').then(res => res.json()),
        enabled: false
    });

    async function onClickLogin() {

    const result = await refetch(); 

    setError(null)

    if (result.data) {

      let user = result.data.find(user => user.email === email && user.password === password)

      if (user) {
        setFetchCode(user.code)
        setShowTwoAuthLayout(true)
        setTimeRunning(true)
      } else {
        setInvalidUser(true)
      }
    } else {
      setError(result.error.message)
    }
  };
   
    
    return (
        <div>
            <h1 className={`title ${styles.title}`}>Sign in to your account to <br /> continue</h1>

            <div className={styles.inputsBox}>
                <Input value={email} onInput={onInputEmail} icon={userIcon} type='email' placeholder='Email'/>
                <Input value={password} onInput={onInputPassword} icon={lockIcon} type='password' placeholder='Password'/>
            </div>

            {invalidUser && email && password && <p className={styles.invalidText}>Wrong email or password</p>}

            {error && <p className={styles.invalidText}>{error}</p>}

            <Button onClick={onClickLogin} isDisabled={email && password ? false : true}>{isLoading ? 'Loading...' : 'Log in'}</Button>
        </div>
    )
}

export default LoginLayout
