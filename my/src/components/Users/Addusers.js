import React from 'react'
import Card from '../UI/Card'
import classes from './Addusers.module.css'
import Button from '../UI/Button';
import { useState } from 'react'


function Addusers() {

    const [user, setuser] = useState('');
    const [age, setage] = useState('');


    function adduserhandler(event) {
        event.preventDefault();
        // console.log(user);
        // console.log(age);
    }

    function userchangehandler(event) {
       setuser(event.target.value);
    }

    function agechangehandler(event) {
        setage(event.target.value);
     }

    // here oue card component is a custom component it do not
    // have a method of className in it unlike div,p,form


    return (
        <Card className={classes.input}>
            <form onSubmit={adduserhandler}>
                <label htmlFor="username" >Username</label>
                <input onChange ={userchangehandler} id="username" type="text" />
                <label htmlFor="age" >Age (Years)</label>
                <input  onChange ={agechangehandler} id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default Addusers