/**
 *  @typedef {ReactRenderTypes.ComponentType} ComponentType
 *  @typedef {ReactRenderTypes.PropsType} PropsType
 */

import debug from 'debug'

import {
  getReactDOMServerRenderToString,
  getReactDOMServerRenderToStaticMarkup
} from './react-dom-server.cjs'

const log = debug('@sequencemedia/react-render')

log('`react-render` is awake')

/**
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function renderToString (Component, props = {}) {
  return (
    getReactDOMServerRenderToString(Component, props)
  )
}

/**
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function renderToStaticMarkup (Component, props = {}) {
  return (
    getReactDOMServerRenderToStaticMarkup(Component, props)
  )
}

/**
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function render (Component, props = {}) {
  return (
    getReactDOMServerRenderToString(Component, props)
  )
}
