import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             topic:'Django',
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            username:event.target.value,
        },)
    }
    handleCommentChange = (event) =>{
        this.setState({
            comment:event.target.value,
        },)
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic:event.target.value,
        },)
    }
    handleSubmitRequest = (event) =>{
        alert(`You have entered:${this.state.username},${this.state.comment},${this.state.topic}`)
    }

    render() {
        const{username,comment,topic}=this.state
        return (
            <form onSubmit={this.handleSubmitRequest}>
                <div>
                    <label>Username</label>
                    <input
                     type="text" 
                    value={username}
                    onChange={this.handleUsernameChange}
                    ></input>
                </div>

                <div>
                    <label>Comments</label>
                    <textarea 
                    value={comment} 
                    onChange={this.handleCommentChange} 
                    ></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                    <option value="Django">Django</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    </select>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
