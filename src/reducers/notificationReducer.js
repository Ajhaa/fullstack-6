const initialNotification = ''

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'CHANGE_NOTIFICATION':
      return action.message
    default:
      return state
  }
}

export const notify = (message) => {
  return {
    type: 'CHANGE_NOTIFICATION',
    message
  }
}



export default notificationReducer
