import React from 'react'
import SbEditable from 'storyblok-react'
import { css } from 'emotion'

import ComponentLibrary from './ComponentLibrary'

export default function Box(props) {
  const {
    components, display, Alignment: justifyContent, width, style,
  } = props.blok

  return (
    <SbEditable content={props.blok}>
      <div
        css={{
          padding: '1rem',
          backgroundColor: style === 'secondary' ? '#d5d5d5' : 'transparent',
          color: '#000',
          display,
          justifyContent,
          div: {
            width,
          },
        }}
      >
        {components.map(blok => React.createElement(ComponentLibrary[blok.component], { key: blok._uid, blok }))}
      </div>
    </SbEditable>
  )
}
