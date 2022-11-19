import React from 'react'

import PropTypes from 'prop-types'

import './sec3.css'

const Sec3 = (props) => {
  return (
    <div className="sec3-sec3">
      <div className="sec3-code-embed">
        <span
          dangerouslySetInnerHTML={{
            __html:
              "<iframe src='https://my.spline.design/miniroomartcopy-b2dd52ebab4b190d3fc0ad5cc558fa28/' frameborder='0' width='100%'\r\n    height='100%'></iframe>",
          }}
        />
      </div>
      <div className="sec3-userdetails">
        <input
          type="text"
          placeholder={props.Firstname_placeholder}
          className="sec3-firstname"
        />
        <input
          type="text"
          placeholder={props.Email_placeholder}
          className="sec3-email"
        />
        <textarea
          placeholder={props.textarea_placeholder}
          className="sec3-textarea textarea"
        ></textarea>
        <input
          type="text"
          placeholder={props.lastname_placeholder}
          className="sec3-lastname"
        />
        <input
          type="text"
          placeholder={props.phnno_placeholder}
          className="sec3-phnno"
        />
      </div>
      <div className="sec3-send">
        <span className="sec3-text">{props.text}</span>
      </div>
    </div>
  )
}

Sec3.defaultProps = {
  Firstname_placeholder: 'placeholder',
  text: 'SEND',
  Email_placeholder: 'placeholder',
  lastname_placeholder: 'placeholder',
  phnno_placeholder: 'placeholder',
  textarea_placeholder: 'placeholder',
}

Sec3.propTypes = {
  Firstname_placeholder: PropTypes.string,
  text: PropTypes.string,
  Email_placeholder: PropTypes.string,
  lastname_placeholder: PropTypes.string,
  phnno_placeholder: PropTypes.string,
  textarea_placeholder: PropTypes.string,
}

export default Sec3
