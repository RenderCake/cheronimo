import React, { Component } from 'react'
import { array } from 'prop-types'

export default class Nav extends Component {
  static propTypes = {
    navItems: array.isRequired,
  }

  state = {
    toggled: false,
  }

  handleToggle = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ toggled: !prevState }))
  }

  render() {
    const { navItems } = this.props
    return (
      <div>
        <div>logo</div>
        <div>button</div>
        <nav>
          <ul>
            {(function recursiveList(navList = []) {
              console.log(navList)

              return navList.map(navItem => (
                <li key={navItem.label}>
                  {Array.isArray(navItem.subNav) ? (
                    <div>
                      <a>{navItem.label}</a>
                      <ul>{recursiveList(navItem.subNav)}</ul>
                    </div>
                  ) : (
                    <a>{navItem.label}</a>
                  )}
                </li>
              ))
            }(navItems))}
          </ul>
        </nav>
      </div>
    )
  }
}
