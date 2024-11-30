import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@sequencemedia/react-render'

import Component from './component.cjs'

use(sinonChai)

describe('@sequencemedia/react-render', () => {
  describe('`renderToString`', () => {
    it('is a function', () => {
      return expect(renderToString)
        .to.be.a('function')
    })
  })

  describe('`renderToStaticMarkup`', () => {
    it('is a function', () => {
      return expect(renderToStaticMarkup)
        .to.be.a('function')
    })
  })

  describe('`render`', () => {
    it('is a function', () => {
      return expect(render)
        .to.be.a('function')
    })
  })

  describe('With props', () => {
    const props = {
      content: 'MOCK CONTENT'
    }

    describe('`renderToString()`', () => {
      it('returns a string', () => {
        return expect(renderToString(Component, props))
          .to.equal('<h1>Component <!-- -->MOCK CONTENT</h1>')
      })
    })

    describe('`renderToStaticMarkup()`', () => {
      it('returns a string', () => {
        return expect(renderToStaticMarkup(Component, props))
          .to.equal('<h1>Component MOCK CONTENT</h1>')
      })
    })

    describe('`render()`', () => {
      it('returns a Promise resolving to a string', async () => {
        return expect(await render(Component, props))
          .to.equal('<h1>Component <!-- -->MOCK CONTENT</h1>')
      })
    })
  })

  describe('Without props', () => {
    describe('`renderToString()`', () => {
      it('returns a string', () => {
        return expect(renderToString(Component))
          .to.equal('<h1>Component</h1>')
      })
    })

    describe('`renderToStaticMarkup()`', () => {
      it('returns a string', () => {
        return expect(renderToStaticMarkup(Component))
          .to.equal('<h1>Component</h1>')
      })
    })

    describe('`render()`', () => {
      it('returns a Promise resolving to a string', async () => {
        return expect(await render(Component))
          .to.equal('<h1>Component</h1>')
      })
    })
  })
})
