import React from 'react'
import Card from '../UI/Card'
import classes from './Addusers.module.css'


function Addusers() {

function adduserhandler(event){
  event.preventDefault();

}

// here oue card component is a custom component it do not
// have a method of className in it unlike div,p,form


  return (
    <Card className  = {classes.input}>
    <form onSubmit={adduserhandler}>
    <label htmlFor  = "username" >Username</label>
    <input id = "username" type = "text"/>
    <label htmlFor  = "age" >Age (Years)</label>
    <input id = "age" type = "number"/>
    <button type  = "submit">Add User</button>
   </form>
   </Card>
  )
}

export default Addusers