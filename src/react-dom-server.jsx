/**
 *  @typedef {ReactRenderTypes.ComponentType} ComponentType
 *  @typedef {ReactRenderTypes.PropsType} PropsType
 *
 *  @typedef {{
 *    props: PropsType
 *  }} PropsException
 *
 *  @typedef {{
 *    e: unknown
 *  }} Exception
 */

import debug from 'debug'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'

const log = debug('@sequencemedia/react-render')

log('`react-render` is awake')

/**
 *  @param {Error} e
 *  @param {PropsException | Exception} data
 *  @returns A boom object
 */
function badImplementation (e, data) {
  return (
    Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })
  )
}

/**
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function getReactDOMServerRenderToString (Component, props) {
  try {
    return ReactDOMServer.renderToString(
      <Component
        {...props}
      />
    )
  } catch (e) {
    if (e instanceof Error) throw badImplementation(e, { props })
    throw badImplementation(new Error('Exception'), { e })
  }
}

/**
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function getReactDOMServerRenderToStaticMarkup (Component, props) {
  try {
    return ReactDOMServer.renderToStaticMarkup(
      <Component
        {...props}
      />
    )
  } catch (e) {
    if (e instanceof Error) throw badImplementation(e, { props })
    throw badImplementation(new Error('Exception'), { e })
  }
}
