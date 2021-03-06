import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    this.props.filter(event.target.value)
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  filter
}

const connected = connect(
  null,
  mapDispatchToProps
)(Filter)

export default connected
