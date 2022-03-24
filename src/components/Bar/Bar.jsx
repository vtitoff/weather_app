import React from 'react'
import classes from './Bar.module.css'

const Bar = (props) => {
    let cityValue = props.city

    function changeCityValue(e) {
        props.cityChange(e.target.value);
        console.log(`cityValue Bar ${cityValue}`)
    }

    function clickButton() {
        props.submit(props.city)
    }

    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                   onChange={changeCityValue}/>
            <button className="btn btn-outline-success" type="button" onClick={clickButton}>Search
            </button>
        </form>
    )

}


export default Bar;