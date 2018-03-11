import anecdoteService from '../services/anecdotes'

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
  return async (dispatch) => {
    const sent = await anecdoteService.createNew(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: sent
    })
  }
}

export const initAnecdotes = () => {
  return async (dispatch) => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data
    })
  }
}

export const vote = (id) => {
  return async (dispatch) => {
    await anecdoteService.vote(id)
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }
}

export default anecdoteReducer
