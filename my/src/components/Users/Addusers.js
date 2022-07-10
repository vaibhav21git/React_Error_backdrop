import React from 'react'
import Card from '../UI/Card'
import classes from './Addusers.module.css'
import Button from '../UI/Button';
import { useState } from 'react'
import Errormodal from '../UI/Errormodal';


function Addusers(props) {

    const [user, setuser] = useState('');
    const [age, setage] = useState('');
    const [error,seterror] = useState();


    function adduserhandler(event) {

        // console.log('button clicked')
        event.preventDefault();
        console.log(user.trim().length)
        console.log(age.trim().length)

        if(user.trim().length === 0 || age.trim().length === 0)
        {
            seterror({
                 title : 'Invalid input',
                 message : 'please add a valid age and name (non-empty values)' 
            })
            return ;
        }

        if(+age <1)
        {
            seterror({
                title : 'Invalid age',
                message : 'please enyer a valid age greater than zero' 
           })
            return ;
        }
        
        // console.log(user);
        // console.log(age);
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

     const errorhandler = () =>
     {
        seterror(null);
     }

    return (<>
        {error && <Errormodal title = {error.title} message = {error.message} onconfirm = {errorhandler}/>}
        <Card className={classes.input}>
            <form onSubmit={adduserhandler}>
                <label htmlFor="username" >Username</label>
                <input value = {user} onChange ={userchangehandler} id="username" type="text" />
                <label htmlFor="age" >Age (Years)</label>
                <input value = {age} onChange ={agechangehandler} id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default Addusers