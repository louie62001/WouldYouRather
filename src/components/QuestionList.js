import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Results from './Results';

class QuestionList extends Component {
    render() {
    console.log('Props: ', this.props)
    //debugger
    return (
        <div>
            <h3>Would You Rather</h3>
            {this.props.questionIds.map((id) => (
                <span key={id}>
                    <Question id={id} author={this.props.authedUser} />
                </span>
            ))}
        </div>
    )
    }
}

function mapStateToProps ({ questions, authedUser}) {
    debugger
    return {
        questionIds: Object.keys(questions)
         .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        authedUser,
    }
}

export default connect(mapStateToProps)(QuestionList)