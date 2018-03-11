import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    console.log(this.props)
    const { message } = this.props
    if (message.length !== 0) {
      return (

        <div style={style}>
          {message}
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.notification
  }
}

const connected = connect(
  mapStateToProps
)(Notification)




export default connected
