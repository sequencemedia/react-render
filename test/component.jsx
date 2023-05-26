import React from 'react'
import PropTypes from 'prop-types'

function Component ({ content }) {
  if (content) return <h1>Component {content}</h1>
  return <h1>Component</h1>
}

Component.propTypes = {
  content: PropTypes.string
}

export default Component
