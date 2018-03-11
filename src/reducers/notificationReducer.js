const initialNotification = ''

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'CHANGE_NOTIFICATION':
      console.log('actionData', action.message)
      return action.message
    default:
      return state
  }
}

export const notify = (message) => {
  console.log('Message', message)
  return {
    type: 'CHANGE_NOTIFICATION',
    message
  }
}



export default notificationReducer
