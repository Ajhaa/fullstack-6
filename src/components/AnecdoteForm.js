import React from 'react'
import PropTypes from 'prop-types'
import anecdoteService from '../services/anecdotes'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.store.dispatch(anecdoteCreation(newAnecdote))
    this.props.store.dispatch(notify('created anecdote "' + content + '"'))
    setTimeout(() => {
      this.props.store.dispatch(notify(''))
    }, 5000)
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

export default AnecdoteForm
