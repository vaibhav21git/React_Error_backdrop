import React from 'react'
import Addusers from './components/Users/Addusers'
import Userlist from './components/Users/Userlist'
import {useState} from 'react'


function App() {

  const [userslist , setuserlist] = useState([]);

  const adduserhandler = (uname , uage) =>
  {
    //  console.log(`${uname} ${uage}`)
     setuserlist((prevuserslist) =>
     {
       return [...prevuserslist,{name : uname , age : uage , id : Math.random().toString()}];
     })
  }



  return (<>
     <div>
      <Addusers onadduser = {adduserhandler}/>
      <Userlist users ={userslist}/>
     </div>
  </> 
  )
}

export default App