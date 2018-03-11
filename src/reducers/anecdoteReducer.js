const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const old = store.filter(a => a.id !== id)
      const voted = store.find(a => a.id === id)
      return [...old, { ...voted, votes: voted.votes + 1 }]

    case 'NEW_ANECDOTE':
      console.log('LUODAAT UUSI', action.data)
      console.log('STORE:', store)
      return [...store, action.data]
    default:
      return store
  }
}

export const anecdoteCreation = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default anecdoteReducer
