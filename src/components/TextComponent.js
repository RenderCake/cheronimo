import React from 'react'
import SbEditable from 'storyblok-react'
import Markdown from 'react-markdown'

const theme = {
  primary: {
    color: 'rgb(96, 255, 0)',
    backgroundColor: '#000',
    fontSize: '2rem',
    fontWeight: '700',
    fontFamily: 'Montserrat',
  },
  secondary: {
    color: '#000',
    backgroundColor: '#d5d5d5',
    fontWeight: '700',
    fontSize: '1.1rem',
  },
  tertiary: {
    color: '#00',
    backgroundColor: '#fff',
    border: '4px solid rgb(96, 255, 0)',
    borderRadius: '6px',
  },
  quaternary: {
    color: '#000',
    backgroundColor: 'rgb(228, 245, 7)',
    fontSize: '1.5rem',
  },
}
export default function TextComponent(props) {
  const {
    blok: { text, style, width },
  } = props
  return (
    <SbEditable content={props.blok}>
      <div
        css={[
          {
            padding: '1rem',
            borderRadius: 8,
            textAlign: 'center',
            '& p': {
              margin: 0,
            },
            width: width
          },
          theme[style],
        ]}
      >
        <Markdown source={text} />
      </div>
    </SbEditable>
  )
}
