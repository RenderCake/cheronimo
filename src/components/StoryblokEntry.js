import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ComponentLibrary from './ComponentLibrary'

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)

    return { story }
  }

  constructor(props) {
    super(props)

    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    const content = this.state.story.content
    console.log(content)

    return (
      <div>
        {React.createElement(ComponentLibrary[content.component], {
          key: content._uid,
          blok: content,
        })}
      </div>
    )
  }
}

export default StoryblokEntry
