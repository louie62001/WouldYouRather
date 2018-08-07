import React, { Component } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import QuestionList from './QuestionList';
//import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
//import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    //<NewQuestion />
       //<QuestionList />
    return (
      <div>
         <Leaderboard />
      </div>
    )
  }
}

export default connect()(App)