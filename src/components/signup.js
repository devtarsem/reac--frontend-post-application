import './../App.css'
import { useState } from 'react'
import axios from 'axios'
function Signup(props){
    const classes = props.signupCredentialStatus ? 'login-container pad48' : 'login-container pad48 hidden'
    // taking data from user
    const [username, setUsername] = useState('');
    const gettingUsername = (event)=>{
        event.preventDefault()
        setUsername(event.target.value)
    }
    const [email, setEmail] = useState('');
    const gettingEmail = (event)=>{
        event.preventDefault()

        setEmail(event.target.value)
    }
    const [password, setpassword] = useState('');
    const gettingpassword = (event)=>{
        event.preventDefault()
        setpassword(event.target.value)
    }
    
    const signingTheUSer = async(event)=>{
        event.preventDefault()
        const user = username
        const emailUser = email
        const pass = password
        const sign = await axios({
            method : "POST",
            url : "http://127.0.0.1:5700/api/v1/signup",
            data : {
                username : user,
                email : emailUser,
                password : pass
            }
        })
        if(sign.data.status==='ok'){
            alert('you are signed in')
        }
    }


    return (
        <div className={classes}>
            <form className='login-form flex flex-dir gap16'>
                <div className='credential flex flex-dir gap08'>
                    <label className='label'>username</label>
                    <input value={username} onChange={gettingUsername} className='input' placeholder='tarsem singh' type='text'/>
                </div>
                <div className='credential flex flex-dir gap08'>
                    <label className='label'>email</label>
                    <input value={email} onChange={gettingEmail} className='input' placeholder='ts@gmail.com' type='email'/>
                </div>
                <div className='credential flex flex-dir gap08'>
                    <label className='label'>password</label>
                    <input value={password} onChange={gettingpassword} className='input' placeholder='*********' type='password'/>
                </div>
                <button onClick={signingTheUSer} className='loginBtn'>Sign up</button>
                <button className='closeLoginBtn'>close</button>

            </form>
        </div>
    )
}

export default Signup;