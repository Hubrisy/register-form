import { useState } from 'react';
import './register.scss'

function Register() {

    // const [isEmail,setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState('');
    const [isColor, setIsColor] = useState('');
    const [isErrMessage,setIsErrMessage] = useState('');

    const getInfo = (e:any) => {
        console.log(setIsPassword(e.target.value))
        console.log(isPassword)
    }
    const checkPassword = (e:any) => {

        setIsPassword(e.target.value)

        if(e.target.value.length < 8){
            setIsColor('red')
            setIsErrMessage('Error: Password must be at least 8 characters')
        }else if(!(/(?=.*[A-Z])/.test(e.target.value))){
            setIsColor('orange')
            setIsErrMessage('Error: Password must contain at least one uppercase letter')
        }else if(!(/(?=.*[0-9])/.test(e.target.value))){
            setIsColor('orange')
            setIsErrMessage('Error: Password must contain at least one number')
        }else if(!(/(?=.*[!@#$%^&*])/.test(e.target.value))){
            setIsColor('orange')
            setIsErrMessage('Error: Password must contain at least one special symbol')
        }else{
            setIsColor('green')
            setIsErrMessage('Success')
        }
    }
    return (
        <div className='register__container'>
            <h2>Registration Form</h2>
            <div className='name__data-block'>
                <input type="text" placeholder='name'/>
                <input type="text" placeholder='second name' />
            </div>
            <div className='mail__data-block'>
                <input type="text" placeholder='mail' />
            </div>
            <div className='password__data-block'>
                <input type="text" placeholder='login' />
                <input type="password" placeholder='password' value={isPassword} onChange={checkPassword} />
            </div>
            <div className='password__checker'>
                <div>{isErrMessage}</div>
                <div className='checker' style={{ backgroundColor: `${isColor}`, transition: 'all .4s' }}></div>
            </div>
            <div className='button__block'>
                <button onClick = {getInfo}>Register</button>
            </div>
        </div>
    )
}

export default Register;