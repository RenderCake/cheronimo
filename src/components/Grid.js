import React from 'react'
import SbEditable from 'storyblok-react'
import styled, { css } from 'react-emotion'

import ComponentLibrary from './ComponentLibrary'
import { mq } from './Theme'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  max-width: 1200px;
  margin-bottom: 1rem;
  ${mq[1]} {
    grid-template-columns: repeat(${props => props.columns}, 1fr);
  }
`

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

function Column(props) {
  const { components } = props.blok
  return (
    <SbEditable content={props.blok}>
      <div className={props.blok.center ? center : null}>
        {components.map(blok => React.createElement(ComponentLibrary[blok.component], { key: blok._uid, blok }))}
      </div>
    </SbEditable>
  )
}
export default function Grid(props) {
  return (
    <SbEditable content={props.blok}>
      <GridContainer columns={props.blok.columns.length}>
        {props.blok.columns.map(blok => (
          <Column key={blok._uid} blok={blok} />
        ))}
      </GridContainer>
    </SbEditable>
  )
}
