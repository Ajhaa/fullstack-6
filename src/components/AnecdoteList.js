import React from 'react'
import anecdoteService from '../services/anecdotes'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handleVote = async (anecdote) => {
    const updated = anecdoteService.vote(anecdote.id)
    this.props.store.dispatch(vote(anecdote.id))
    this.props.store.dispatch(notify('voted "' + anecdote.content+ '"'))
    setTimeout(() => {
      this.props.store.dispatch(notify(''))
    }, 5000)
  }
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const filter = this.props.store.getState().filter
    const filtered = anecdotes.filter(a => a.content.includes(filter))
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
