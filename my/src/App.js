import React from 'react'
import Addusers from './components/Users/Addusers'
import Userlist from './components/Users/Userlist'


function App() {


  return (<>
     <div>
      <Addusers/>
      <Userlist users ={[]}/>
     </div>
  </> 
  )
}

export default App