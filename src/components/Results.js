import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/api.js'

class Results extends Component {
    render() {
        const { question, authedUser } = this.props
        //console.log('props: ', question, authedUser)
        let percent = 0

        if(question.optionOne.votes.length > 0) {
            percent = question.optionOne.votes.length / 2 * 100
        } else {
            percent = question.optionTwo.votes.length / 2 * 100
        }

        return (         
            <span>
                Author: {question.author} - {question.id}<br />
                Date: {formatDate(question.timestamp)}<br />
                Option One: {question.optionOne.text} - Votes: {question.optionOne.votes.length} - 
                {question.optionOne.votes.length === 0 && (
                    <span> 0%</span>
                )}
                {question.optionOne.votes.length > 0 && (
                    <span> {percent}%</span>
                )}
                <br />
                Option Two: {question.optionTwo.text} - Votes: {question.optionTwo.votes.length} - 
                {question.optionTwo.votes.length === 0 && (
                    <span> 0%</span>
                )}
                {question.optionTwo.votes.length > 0 && (
                    <span> {percent}%</span>
                )}
                <br />
                {question.optionOne.votes.length + question.optionTwo.votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes
                <hr />
            </span>
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

export default connect(mapStateToProps)(Results)