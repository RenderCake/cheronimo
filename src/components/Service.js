import React from 'react'
import styled, { css, injectGlobal } from 'react-emotion'
import Markdown from 'react-markdown'
import SbEditable from 'storyblok-react'
import StaticServiceList from './StaticServiceList'

injectGlobal`
  *{
    box-sizing: border-box
  }
`
export default function Service(props) {
  const {
    name = '',
    subHeader = '',
    featuredImage = '',
    description = '',
    userGuides = [],
    pricing = [],
    faqs = '',
    videos = '',
  } = props.blok
  return (
    <div css={{ backgroundColor: '#f1f1f1' }}>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 4fr',
          gridGap: 30,
          maxWidth: 1024,
          margin: '0 auto',
        }}
      >
        <nav>
          <div css={{ padding: '1rem', marginBottom: '1rem', background: '#000' }}>
            <h3 css={{ color: '#ff8400', textDecoration: 'underline' }}>Do-it-Yourself</h3>
            <StaticServiceList serviceType="self-service" />
          </div>
          <div css={{ padding: '1rem', marginBottom: '1rem', background: '#000' }}>
            <h3 css={{ color: '#ff8400', textDecoration: 'underline' }}>Full Service</h3>
            <StaticServiceList serviceType="full-service" />
          </div>
          <div css={{ padding: '1rem', marginBottom: '1rem', background: '#000' }}>
            <h3 css={{ color: '#ff8400', textDecoration: 'underline' }}>Hire a Helper</h3>
          </div>
        </nav>
        <SbEditable content={props.blok}>
          <article>
            <div
              css={{
                background: '#000',
                color: 'rgb(44, 255, 0)',
                padding: '.5rem 1rem',
                textAlign: 'center',
              }}
            >
              <h1>{name}</h1>
            </div>

            <p css={{ textAlign: 'center', color: 'red' }}>{subHeader}</p>
            <div
              css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                background: '#fff',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={featuredImage} alt="featured" />
              </div>
              <div>
                <Markdown source={description} />
              </div>
            </div>
            <div>
              <ul
                css={{
                  padding: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '2rem 0',
                }}
              >
                {userGuides.map(({ name, filename }) => (
                  <li key={name} css={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    <a
                      href={filename}
                      css={{
                        padding: '.5rem 1.2rem',
                        borderRadius: 16,
                        background: '#999',
                        textDecoration: 'none',
                        color: '#000',
                        display: 'block',
                      }}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {videos && (
                <div
                  css={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${videos.split(',').length}, 1fr)`,
                    gridGap: 10,
                  }}
                >
                  {videos.split(',').map(id => (
                    <div
                      css={{
                        overflow: 'hidden',
                        paddingTop: '56.25%',
                        position: 'relative',
                        '& iframe': {
                          border: 0,
                          height: '100%',
                          left: 0,
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                        },
                      }}
                    >
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              css={{
                background: '#fff',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <h1 css={{ textAlign: 'center' }}>Pricing</h1>
              <div
                css={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${pricing.length}, 1fr)`,
                  gridGap: '2rem',
                  textAlign: 'center',
                }}
              >
                {pricing.map(({
                  _uid, type, price, duration,
                }) => (
                  <div key={_uid}>
                    <div
                      css={{
                        background: '#000',
                        color: 'rgb(44, 255, 0)',
                        border: '4px solid rgb(44, 255, 0)',
                        padding: '1rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <h2 css={{ margin: 0 }}>{duration}</h2>
                      <h2 css={{ margin: 0 }}>{type}</h2>
                    </div>
                    <div>
                      <h3>{`$${price}`}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div css={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
                <a
                  css={{
                    background: '#ff8400',
                    padding: '.5rem 1.5rem',
                    color: '#fff',
                    fontWeight: 'bold',
                    display: 'block',
                  }}
                >
                  {`Rent an ${name}`}
                </a>
              </div>
              <div
                css={{
                  background: '#fff',
                  padding: '1rem',
                  borderRadius: '8px',
                }}
              >
                <Markdown source={faqs} />
              </div>
            </div>
          </article>
        </SbEditable>
      </div>
    </div>
  )
}
