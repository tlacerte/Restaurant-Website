import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReviewForm.css'

class ReviewForm extends Component{
    state = {
        rating : "",
        comment : "",
    }
    handleOnChange = event =>{
        console.log(event.target.name)
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
            <form className="review-form" action="reviewform" onSubmit={this.handleSubmit}>
                <label>Rating: </label>
                <input className="rating-form"
                    type="number" 
                    name="rating" 
                    onChange={this.handleOnChange} 
                    value={this.state.rating} 
                /><span className="review-5">/5</span>
            <br/>
                <label>Comment: </label>
                <textarea className="comment-form"
                    type="text" 
                    name="comment" 
                    onChange={this.handleOnChange} 
                    value={this.state.comment} 
                />
            <br/>
                <input type="submit" />
            </form>
        )
    }
}

export default ReviewForm;

ReviewForm.propTypes = {
    handleAddPost : PropTypes.func,
}