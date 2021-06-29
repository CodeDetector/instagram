import {combineReducers} from 'redux';
// import {userReducer} from './User/user.reducer'
import {reminderReducer} from './Reminder/Reminder.reducer'
import {ApplicationReducer} from './Application/Application.reducer'
import {userReducer} from './User/user.reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    reminder: reminderReducer,
    app: ApplicationReducer,
})
