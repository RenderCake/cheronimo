import React, { Component } from 'react'
import { string } from 'prop-types'

export default class FaceBookLike extends Component {
  static propTypes = {
    dataHref: string.isRequired,
  }

  componentDidMount() {
    this.loadFbSDK()
  }

  loadFbSDK = () => {
    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }

  render() {
    const { dataHref } = this.props
    return (
      <div
        className="fb-like"
        data-href={dataHref}
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-show-faces="true"
        data-share="false"
      />
    )
  }
}
