import React from 'react'
import MarkDown from 'react-markdown'
import SbEditable from 'storyblok-react'

export default function Text(props) {
  const {
    blok: { text, textColor, content },
  } = props
  return (
    <SbEditable content={props.blok}>
      <div css={{ color: textColor }}>
        <MarkDown source={text} />
      </div>
    </SbEditable>
  )
}
