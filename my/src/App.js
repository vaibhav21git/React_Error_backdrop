import React from 'react'
import Addusers from './components/Users/Addusers'
import Userlist from './components/Users/Userlist'
import {useState} from 'react'


function App() {

  const [userlist , setuserlist] = useState([]);

  const adduserhandler = (uname , uage) =>
  {
    //  console.log(`${uname} ${uage}`)
     setuserlist((prevuserlist) =>
     {
       return [...prevuserlist,{name : uname , age : uage , id : Math.random().toString()}];
     })
  }



  return (<>
     <div>
      <Addusers onadduser = {adduserhandler}/>
      <Userlist users ={userlist}/>
     </div>
  </> 
  )
}

export default App