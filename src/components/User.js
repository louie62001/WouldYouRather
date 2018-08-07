import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        const {user} = this.props
        console.log('Leaders: ', this.props)
        const count = Object.keys(user.answers).length
        const score = count + user.questions.length
        const avatarStyle = {
            height: '75px',
            width: '75px',
            float: 'left',
            padding: '10px',
            'margin-top': '8px'
        }
        return (
            <div key={user.id}>
                    <img src={user.avatarURL} alt={user.name} style={avatarStyle} /><br />
                    Author: {user.name}<br />
                    Questions Answered: {count}<br />
                    Votes: {user.questions.length}<br />
                    Score: {score}<br /><br />
            </div>
        )
    }
}

function mapStateToProps ({ users }, {id}) {
    const user = users[id]
    return {
        user,
    }
}

export default connect(mapStateToProps)(User)