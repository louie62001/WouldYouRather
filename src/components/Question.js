import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/api.js'

class Question extends Component {
    render() {
        const { question, authedUser } = this.props

        if(question.author === authedUser) {
            if (question.optionOne.votes.length !== 0 || question.optionTwo.votes.length !== 0) {              
                return (
                    <span>
                        Author: {question.author} - {question.id}<br />
                        Date: {formatDate(question.timestamp)}<br />
                        Option One: {question.optionOne.text}<br />
                        Option Two: {question.optionTwo.text}<br />                        
                        <hr />
                    </span>
                )
            }
        } 
        return (
            <div>
                {question.optionOne.votes.length === 0 && question.optionTwo.votes.length === 0 && (
                <span>
                    Author: {question.author} -**- {question.id}<br />
                    Option One: {question.optionOne.text}<br />
                    Option Two: {question.optionTwo.text}<br />
                    <hr />
                </span>
                )}
            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }, {id}) {
    const question = questions[id]
    return {
        question,
        authedUser,
    }
}

export default connect(mapStateToProps)(Question)