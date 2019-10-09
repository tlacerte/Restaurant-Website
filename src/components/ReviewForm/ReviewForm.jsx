import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReviewForm extends Component{
    state = {
        rating : "",
        comment : "",
    }
    handleOnChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleAddPost({...this.state})
        this.setState({
            rating : "",
            comment : "",
        })
    }
    
    render(){
        return (
            <form action="reviewform" onSubmit={this.handleSubmit}>
                <label>Rating: </label>
                <input 
                    type="number" 
                    name="rating" 
                    onChange={this.handleOnChange} 
                    value={this.state.title} 
                />
                <br/>
                <label>Comment: </label>
                <textarea 
                    type="text" 
                    name="comment" 
                    onChange={this.handleOnChange} 
                    value={this.state.post} 
                />
                <input type="submit" />
            </form>
        )
    }
}

export default ReviewForm;

ReviewForm.propTypes = {
    handleAddPost : PropTypes.func,
}