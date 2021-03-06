import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handleVote = async (anecdote) => {
    this.props.vote(anecdote.id)
    this.props.notify(`voted "${anecdote.content}"`, 4)
  }

  render() {
    const { anecdotes, filter } = this.props
    console.log('ANECDOTES: ', anecdotes)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  vote, notify
}


const connected = connect(
  mapStateToProps,
  mapDispatchToProps

)(AnecdoteList)



export default connected
