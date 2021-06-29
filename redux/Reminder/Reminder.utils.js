function omit(obj, ...props) {
    const result = { ...obj };
    props.forEach(function(prop) {
      delete result[prop];
    });
    return result;
  }
// TODO:Replace the below  prevStatereminders.t.push(newReminder); with reduce function

export const addReminderUtils = (array, newReminder) =>{
    newReminder = omit(newReminder,'type')
    array.push(newReminder);
    return array
}

export const removeReminderUtils = (prevStatereminders,removeReminder) =>{
    return(prevStatereminders.filter(reminder =>
            reminder.msg != removeReminder.msg || reminder.time!= removeReminder.time
        ))
} 

export const updateReminderUtils = (prevStatereminders,updateReminder) =>{
    removeReminderUtils(prevStatereminders,updateReminder.prevItem)
    addReminderUtils(prevStatereminders,updateReminder.updatedItem)
    return(
        {...prevStatereminders}
    )
}