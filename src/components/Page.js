import React from 'react'
import ComponentLibrary from './ComponentLibrary'

function Page(props) {
  console.log(props)

  return (
    <div css={{ maxWidth: '1024px', margin: '0 auto' }}>
      {props.blok.body
        && props.blok.body.map(
          blok => (ComponentLibrary[blok.component]
            ? React.createElement(ComponentLibrary[blok.component], { key: blok._uid, blok })
            : `Component ${blok.component} not created yet`),
        )}
    </div>
  )
}

export default Page
