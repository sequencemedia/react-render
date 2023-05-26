import debug from 'debug'

import {
  getReactDOMServerRenderToString,
  getReactDOMServerRenderToStaticMarkup
} from './react-dom-server.cjs'

const log = debug('@sequencemedia/react-render')

log('`react-render` is awake')

/**
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export const renderToString = (Component, props = {}) => getReactDOMServerRenderToString(Component, props)

/**
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export const renderToStaticMarkup = (Component, props = {}) => getReactDOMServerRenderToStaticMarkup(Component, props)

/**
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {Promise<string>}
 */
export const render = async (Component, props = {}) => getReactDOMServerRenderToString(Component, props)
