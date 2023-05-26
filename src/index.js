import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'
import debug from 'debug'

const log = debug('@sequencemedia/react-render')

log('`react-render` is awake')

const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })

function getReactDOMServerRenderToString (Component, props) {
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

function getReactDOMServerRenderToStaticMarkup (Component, props) {
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

/**
 * @return {string}
 */
export const renderToString = (Component, props = {}) => getReactDOMServerRenderToString(Component, props)

/**
 * @return {string}
 */
export const renderToStaticMarkup = (Component, props = {}) => getReactDOMServerRenderToStaticMarkup(Component, props)

/**
 * @return {Promise}
 */
export const render = async (Component, props = {}) => getReactDOMServerRenderToString(Component, props)
