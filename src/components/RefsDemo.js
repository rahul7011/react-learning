import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef()             //Method 1
        //method 2
        // this.cbRef = null
        // this.setCbRef = (element) =>{
        //     this.cbRef=element
        // }
    }
    
    componentDidMount(){
        //method 2
        // if(this.cbRef){
        //     this.cbRef.focus()
        // }
        //method 1
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler=()=>{
        alert(this.input.current.value)
    }

    render() {
        return (
            <div>
                <label>Input</label>
                <input ref={this.inputRef}></input>
                <button type="submit" onClick={this.clickHandler} >Submit</button>
                {/* <input ref={this.setCbRef}></input>
                <button type="submit" onClick={this.clickHandler} >Submit</button> */}
                <br />
            </div>
        )
    }
}

export default RefsDemo
