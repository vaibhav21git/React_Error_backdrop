import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './Errormodal.module.css'

function Errormodal(props) {
  return (<>
  <div className={classes.backdrop} onClick = {props.onconfirm}/>
  <Card className  = {classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer  className={classes.actions}>
    <Button onClick = {props.onconfirm}>OKay</Button>
    </footer>
    </Card>
    </>)
}

export default Errormodal