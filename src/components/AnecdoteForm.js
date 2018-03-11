import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()

    const content = e.target.anecdote.value
    e.target.anecdote.value = ''

    this.props.anecdoteCreation(content)
    this.props.notify(`created "${content}"`, 5)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  anecdoteCreation, notify
}

const connected = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default connected
