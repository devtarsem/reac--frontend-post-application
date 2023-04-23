import { Fragment, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Allposts from './components/allPosts';
import Bookmarks from './components/bookmark';
import YourComment from './components/yourComments';
import AllPostsUser from './components/userposts';
import Login from './components/login';
import Overlay from './components/overlay';
import Signup from './components/signup';
function App() {

  // const testApi = async()=>{
  //   const test = await axios({
  //     method : "POST",
  //     url : "http://127.0.0.1:5700/api/v1/signup",
  //     data : {
  //       username : "landu",
  //       email : "ts634629@gmail.com",
  //       password : "741741741"
  //     }
  //   })
  //   console.log(test.data.data.user)
  // }



  const [login, setlogin] = useState(false)
  const loginPanelOpener = ()=>{
    setlogin(true)
  }

  const [signup, setsignup] = useState(false)
  const signupPanelOpener = ()=>{
    setsignup(true)
  }

  
    // const gettingMyself = async()=>{
    //   const me = await axios({
    //     method : 'GET',
    //     url : "http://127.0.0.1:5700/api/v1/me"
    //   })
    //   console.log(me.data)
    // }
    // gettingMyself()
    
  

  return (

    <Fragment>
      <nav className='navigation flex flex-2 pad16'>
        <h1 className='primary-heading'>Post application</h1>
        <div className='links flex flex-1 gap48'>
          <button onClick={loginPanelOpener} className='btn'>Login</button>
          <button onClick={signupPanelOpener} className='btn'>Signup</button>
          <button  className='btn'>Share post</button>
        </div>
      </nav>
      <div className='header-container grid grid-4-cols'>
        <Overlay overlayLoginStatus = {login} overlaySignUpStatus = {signup}></Overlay>
        <Login loginCredentialStatus = {login} ></Login>
        <Signup signupCredentialStatus ={signup} ></Signup>
        <Bookmarks></Bookmarks>
        <YourComment></YourComment>
        <Allposts></Allposts>
        <AllPostsUser></AllPostsUser>
      </div>
    </Fragment>
  );
}

export default App;
