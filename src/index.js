import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import { initAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

anecdoteService.getAll().then(a =>{
  console.log('SISALTO', a)
  store.dispatch(initAnecdotes(a))}
)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
