import React, { Component } from 'react'
import { string } from 'prop-types'

export default class TwitterTweet extends Component {
  static propTypes = {
    text: string.isRequired,
  }

  componentDidMount() {
    this.loadTwitterJs()
  }

  loadTwitterJs = () => {
    window.twttr = (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {}
      if (d.getElementById(id)) return t
      js = d.createElement(s)
      js.id = id
      js.src = 'https://platform.twitter.com/widgets.js'
      fjs.parentNode.insertBefore(js, fjs)

      t._e = []
      t.ready = function (f) {
        t._e.push(f)
      }

      return t
    }(document, 'script', 'twitter-wjs'))
  }

  render() {
    const { text } = this.props
    return (
      <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${text}`}>
        Tweet
      </a>
    )
  }
}
