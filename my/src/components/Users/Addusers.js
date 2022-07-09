import React from 'react'
import Card from '../UI/Card'
import classes from './Addusers.module.css'
import Button from '../UI/Button';
import { useState } from 'react'


function Addusers(props) {

    const [user, setuser] = useState('');
    const [age, setage] = useState('');


    function adduserhandler(event) {

        event.preventDefault();
        if(user.trim().length === 0 || age.trim.length === 0)
        {
            return ;
        }

        if(+age <1)
        {
            return ;
        }

        props.onadduser(user,age);
        setuser('');
        setage('');
    }

    function userchangehandler(event) {
       setuser(event.target.value);
    }

    function agechangehandler(event) {
        setage(event.target.value);
     }

    // here our card component is a custom component it do not
    // have a method of className in it unlike div,p,form


    return (
        <Card className={classes.input}>
            <form onSubmit={adduserhandler}>
                <label htmlFor="username" >Username</label>
                <input value = {user} onChange ={userchangehandler} id="username" type="text" />
                <label htmlFor="age" >Age (Years)</label>
                <input value = {age} onChange ={agechangehandler} id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default Addusers