const initialNotification = {
  message: 'Hello World'
}

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'CHANGE_NOTIFICATION':
      return action.data
    default:
      return state  
  }
}



export default notificationReducer