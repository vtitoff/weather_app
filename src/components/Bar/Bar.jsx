import React from 'react'

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        console.log('Была нажата клавиша.');
    }

    render() {
        return (
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        )
    }
}


export default Bar;