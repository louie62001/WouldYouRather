import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        const {user, userScore} = this.props
        console.log('Leaders: ', this.props)
        const count = Object.keys(user.answers).length
        const score = count + user.questions.length
        return (
            <div key={user.id}>
                    Author Name: {user.name}<br />
                    Questions Answered: {count}<br />
                    Votes: {user.questions.length}<br />
                    Score: {score}<br /><br />
            </div>
        )
    }
}

function mapStateToProps ({ users }, {id}) {
    const user = users[id]
    //const answers = Object.keys(users[id].answers).length
    //const questions = users[id].questions.length
    //const score = answers + questions
    //const userScore = Object.keys(users).sort((a,b) => (users[b].score - users[a].score))
    const userScore = {
        score: Object.keys(users[id].answers).length + users[id].questions.length
    }
    //debugger
    return {
        user,
        userScore
    }
}

export default connect(mapStateToProps)(User)