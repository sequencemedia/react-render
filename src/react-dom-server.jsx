import debug from 'debug'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'

const log = debug('@sequencemedia/react-render')

log('`react-render` is awake')

/**
 * @param {Error} e
 * @param {{props: Object.<string, any>}} data
 * @returns A boom object
 */
const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })

/**
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export function getReactDOMServerRenderToString (Component, props) {
  try {
    return ReactDOMServer.renderToString(
      <Component
        {...props}
      />
    )
  } catch (e) {
    log(e)

    throw badImplementation(e, { props })
  }
}

/**
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export function getReactDOMServerRenderToStaticMarkup (Component, props) {
  try {
    return ReactDOMServer.renderToStaticMarkup(
      <Component
        {...props}
      />
    )
  } catch (e) {
    log(e)

    throw badImplementation(e, { props })
  }
}
