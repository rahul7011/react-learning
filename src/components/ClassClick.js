import React, { Component } from 'react'

class ClassClick extends Component {
    
    clicked() {
        console.log("class clicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.clicked}>click class</button>
            </div>
        )
    }
}

export default ClassClick
