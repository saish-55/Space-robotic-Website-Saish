import React from 'react'

import PropTypes from 'prop-types'

import './sec2.css'

const Sec2 = (props) => {
  return (
    <div className={`sec2-sec2 ${props.rootClassName} `}>
      <span className="sec2-skills">{props.Skills}</span>
      <div className="sec2-skillcontent">
        <span className="sec2-text">{props.text}</span>
      </div>
      <div className="sec2-skills1">
        <div className="sec2-skillnames">
          <span className="sec2-react">{props.React}</span>
          <span className="sec2-js">{props.js}</span>
          <span className="sec2-css">{props.css}</span>
          <span className="sec2-wb">{props.wb}</span>
        </div>
        <div className="sec2-percentages">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="sec2-image"
          />
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="sec2-image1"
          />
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="sec2-image2"
          />
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="sec2-image3"
          />
        </div>
      </div>
    </div>
  )
}

Sec2.defaultProps = {
  css: 'Cascading Style Sheets',
  image_alt1: 'image',
  image_src3: '/playground_assets/95-300w.png',
  image_alt2: 'image',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  Skills: 'Skills',
  image_src1: '/playground_assets/90-300w.png',
  image_alt3: 'image',
  React: 'React',
  image_src: '/playground_assets/90-300w.png',
  rootClassName: '',
  image_alt: 'image',
  js: 'JavaScript',
  wb: 'Web Development',
  image_src2: '/playground_assets/85-300w.png',
}

Sec2.propTypes = {
  css: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt2: PropTypes.string,
  text: PropTypes.string,
  Skills: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt3: PropTypes.string,
  React: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  js: PropTypes.string,
  wb: PropTypes.string,
  image_src2: PropTypes.string,
}

export default Sec2
