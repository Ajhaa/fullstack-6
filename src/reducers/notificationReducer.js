const initialNotification = ''

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'CHANGE_NOTIFICATION':
      return action.message
    default:
      return state
  }
}

export const notify = (message, timeout) => {
  return async (dispatch) => {

    dispatch({
      type: 'CHANGE_NOTIFICATION',
      message
    })
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_NOTIFICATION',
        message: ''
      })
    }, timeout*1000)
  }
}



export default notificationReducer
