import {ReminderActionTypes} from './Reminder.types';
import {Reminders} from '../../constants/UserReminders'
import {addReminderUtils,removeReminderUtils,updateReminderUtils} from './Reminder.utils'

const initialState = {
    daily : [],
    once:[],
    annual : []
}

export const reminderReducer = (state = initialState , action) =>{
    console.log("Reducer accessed")
    switch(action.type)
    {
        case ReminderActionTypes.ADD_DAILY_REMINDER:
            return{
                ...state,
                daily: addReminderUtils(state.daily,action.payload)
            }
        case ReminderActionTypes.ADD_ONCE_REMINDER:
        return{
            ...state,
            once: addReminderUtils(state.once,action.payload)
        }
        case ReminderActionTypes.ADD_ANNUAL_REMINDER:
            return{
                ...state,
                annual: addReminderUtils(state.annual,action.payload)
            }  
        case ReminderActionTypes.REMOVE_REMINDER:
            return{
                reminders : removeReminderUtils(state.reminders,action.payload)
            }
        case ReminderActionTypes.UPDATE_REMINDER:return{
            reminders : updateReminderUtils(state.reminders , action.payload)
        }
        case ReminderActionTypes.REMOVE_ALL_REMINDERS:return{
            reminders : [] 
        }
        default : return({...state})
    
}}