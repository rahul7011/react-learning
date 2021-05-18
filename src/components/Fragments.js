import React, { Component } from 'react'

class Fragments extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Now we wont have an extra div tag!</h3>
            </React.Fragment>
        )
    }
}

export default Fragments
