import React, { Fragment } from 'react'
import Slider from 'react-slick'
import Helmet from 'react-helmet'
import SbEditable from 'storyblok-react'

export default function ImageSlider(props) {
  const { Photos } = props.blok
  console.log(props.blok)
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <SbEditable content={props.blok}>
        <div css={{ width: 350 }}>
          <Slider {...settings}>
            {Photos.map(({ filename, name }) => (
              <img src={filename} alt={name} />
            ))}
          </Slider>
        </div>
      </SbEditable>
    </Fragment>
  )
}
