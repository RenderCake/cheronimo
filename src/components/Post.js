import React from 'react'
import { graphql } from 'gatsby'
import MarkDown from 'react-markdown'
import Moment from 'react-moment'

import Layout from './layout'
import FaceBookLike from './FaceBookLike'
import TwitterTweet from './TwitterTweet'

export default function Post(props) {
  const {
    contentfulPosts: {
      titile,
      publishedDate,
      slug,
      bodyText: { bodyText },
    },
  } = props.data

  return (
    <Layout>
      <div>
        <h3>{titile}</h3>
        <Moment format="MM/DD/YYYY">{publishedDate}</Moment>
        <div css={{ padding: '1rem', backgroundColor: '#e9e9e9' }}>
          <MarkDown source={bodyText} />
        </div>
        <FaceBookLike dataHref={slug} />
        <TwitterTweet text={titile} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPosts(slug: { eq: $slug }) {
      slug
      id
      titile
      publishedDate
      bodyText {
        bodyText
      }
    }
  }
`
