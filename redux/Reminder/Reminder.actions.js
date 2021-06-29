import { ReminderActionTypes } from "./Reminder.types";

export const removeReminder = (item)=>({
    type:ReminderActionTypes.REMOVE_REMINDER,
    payload:item
})

export const removeallReminders =()=>(
    {
        type:ReminderActionTypes.REMOVE_ALL_REMINDERS
    }
)

export const addDailyReminder = (newitem) =>(
    {
        type:ReminderActionTypes.ADD_DAILY_REMINDER,
        payload:newitem
    }
)
export const addOnceReminder = (newitem) =>(
    {
        type:ReminderActionTypes.ADD_ONCE_REMINDER,
        payload:newitem
    }
)
export const addAnnualReminder = (newitem) =>(
    {
        type:ReminderActionTypes.ADD_ANNUAL_REMINDER,
        payload:newitem
    }
)

export const updateReminder = (prevItem , updatedItem)=>(
{
        type:ReminderActionTypes.UPDATE_REMINDER,
        payload:{
            prevItem, 
            updatedItem
        }
    }
)