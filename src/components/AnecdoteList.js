import React from 'react'
import PropTypes from 'prop-types'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => {
    this.props.store.dispatch(vote(anecdote.id))
    this.props.store.dispatch(notify('voted "' + anecdote.content+ '"'))
    setTimeout(() => {
      this.props.store.dispatch(notify(''))
    }, 5000)
  }
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const filter = this.props.store.getState().filter
    console.log('anecdotes' ,anecdotes)
    anecdotes.forEach(a => console.log(typeof a.content))
    const filtered = anecdotes.filter(a => a.content.includes(filter))
    console.log(filtered)
    return (
      <div>
        <h2>Anecdotes</h2>
        {filtered.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
                this.handleVote(anecdote)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
