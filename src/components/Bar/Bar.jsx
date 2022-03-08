import React from 'react'
import classes from './Bar.module.css'

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.cityValue = this.props.cityValue
        this.changeCityValue = this.props.changeCityValue
    }

    render() {
        console.log(`render ${this.cityValue}`)
        return (
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                       onChange={this.changeCityValue}/>
                <button className="btn btn-outline-success" type="submit" onClick={this.changeCityValue}>Search</button>
            </form>
        )
    }
}


export default Bar;