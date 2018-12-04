import React from 'react'
import SbEditable from 'storyblok-react'

export default function Cta(props) {
  const { text, url } = props.blok

  return (
    <SbEditable content={props.blok}>
      <div>
        <a
          css={{
            padding: '1rem 1.5rem',
            backgroundColor: 'rgb(255, 132, 0)',
            color: '#fff',
            fontSize: '1rem',
            display: 'inline-block',
            width: '100%',
            textAlign: 'center',
          }}
          href={url}
        >
          {text}
        </a>
      </div>
    </SbEditable>
  )
}
