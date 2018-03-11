import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

anecdoteService.getAll().then(a =>{
  store.dispatch(initAnecdotes(a))}
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
