import { RECEIVE_USERS } from '../actions/users'

export function users (state = {}, action) {
  switch(action.type) {
		case RECEIVE_USERS :
		 let users = {}
			for(let key in action.users){
				if(action.users.hasOwnProperty(key)){
					let user = {...action.users[key],score:(Object.keys(action.users[key].answers).length + action.users[key].questions.length )};
					users[key] = user;
				}
			}
			return {
				...state,
				...users
			}
		default :
			return state
  }
}