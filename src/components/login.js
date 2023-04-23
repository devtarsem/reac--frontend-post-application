import './../App.css'

function Login(props){
    const classes = props.loginCredentialStatus ? 'login-container pad48' : 'login-container pad48 hidden'
    return (
        <div className={classes}>
            <form className='login-form flex flex-dir gap16'>
                <div className='credential flex flex-dir gap08'>
                    <label className='label'>email</label>
                    <input className='input' placeholder='ts@gmail.com' type='email'/>
                </div>
                <div className='credential flex flex-dir gap08'>
                    <label className='label'>password</label>
                    <input className='input' placeholder='*********' type='password'/>
                </div>
                <button className='loginBtn'>Login</button>
                <button className='closeLoginBtn'>close</button>

            </form>
        </div>
    )
}

export default Login;