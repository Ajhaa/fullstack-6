
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = []

const anecdoteReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const old = store.filter(a => a.id !== id)
      const voted = store.find(a => a.id === id)
      return [...old, { ...voted, votes: voted.votes + 1 }]

    case 'NEW_ANECDOTE':
      return [...store, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return store
  }
}

export const anecdoteCreation = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export const initAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default anecdoteReducer
