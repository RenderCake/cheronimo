import React from 'react'
import SbEditable from 'storyblok-react'

export default function ImageComponent(props) {
  const { image: filename, name } = props.blok

  return (
    <SbEditable content={props.blok}>
      <div>
        <img src={filename} alt={name} />
      </div>
    </SbEditable>
  )
}
