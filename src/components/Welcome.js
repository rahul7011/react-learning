import React,{Component} from 'react';

class Welcome extends Component{
    render(){
        return(
            <div>
        <h1>Hello {this.props.name} from class component</h1>
        <strong>{this.props.children}</strong>
        </div> 
            )
    }
}

export default Welcome