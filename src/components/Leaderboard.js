import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Leaderboard extends Component {
    render() {
        //debugger
        console.log('Leaders: ', this.props.authorID)
        return (
            <div>
            <h3>Leaderboard</h3>
            {this.props.authorID.map((id) => (
                <User id={id} />
            ))}
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    //const score = Object.keys(users[0].answers).length//+ users.questions.length
    //debugger
    return {
        authorID: Object.keys(users).sort((a,b) => users[b].score - users[a].score)
    }
}

export default connect(mapStateToProps)(Leaderboard)