import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Choose a Login:</h3>
		<select>
		<option>Select a login</option>
                    {this.props.userIds.map((id) => (
                        <option key={id}>{id}</option>
			//<div key={id}>User: {id}</div>
                    ))}
		</select><br />
		<button type='submit'>Login</button>
            </div>
        )
    }
}

function mapStateToProps ({ users}) {
    return {
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)