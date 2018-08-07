import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOneText: '', 
        optionTwoText: ''
    }

    handleChangeOne = (e) => {
        const optionOneText = e.target.value

        this.setState(() => ({
            optionOneText
        }))
    }
    handleChangeTwo = (e) => {
        const optionTwoText = e.target.value

        this.setState(() => ({
            optionTwoText
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const text = this.state
        const {dispatch} = this.props

        dispatch(handleAddQuestion(text))

        this.setState(() => ({
        optionOneText: '', 
        optionTwoText: ''
        }))
    }
    render() {
        return (
            <div>
                <h3>Would You Rather?</h3>
                <img src="images/avatar.JPG" />
                <form onSubmit={this.handleSubmit}>
                    <input name="optionOne" placeholder="Option One" value={this.state.optionOneText} onChange={this.handleChangeOne} /><br />
                    <input name="optionTwo" placeholder="Option One" value={this.state.optionTwoText} onChange={this.handleChangeTwo} /><br />
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)