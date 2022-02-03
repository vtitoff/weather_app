import React from 'react'
import classes from './Title.module.css'
const Title = (props) => {
    return ( 
        <div className={classes.title}>{props.text}</div>
     );
}
 
export default Title;