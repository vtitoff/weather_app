import React from 'react'
import classes from './Bar.module.css'
import {preventDefault} from "leaflet/src/dom/DomEvent";

class Bar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                       onChange={this.props.changeCityValue}/>
                {console.log(`bar render ${this.cityValue}`)}
                <button className="btn btn-outline-success" type="button" onClick={this.props.testButton}>Search</button>
            </form>
        )
    }
}


export default Bar;