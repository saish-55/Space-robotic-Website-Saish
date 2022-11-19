import React from 'react'

import PropTypes from 'prop-types'

import './sec4.css'

const Sec4 = (props) => {
  return (
    <div className={`sec4-sec4 ${props.rootClassName} `}>
      <div className="sec4-subscribe">
        <span className="sec4-text">
          <span className="">
            Subscribe to our
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">
            Newsletter
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">
            &amp; Never miss latest
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">updates</span>
        </span>
      </div>
      <div className="sec4-email">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="sec4-textinput"
        />
        <div className="sec4-container">
          <span className="sec4-text8">{props.text}</span>
        </div>
      </div>
      <div className="sec4-container1">
        <div className="sec4-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                "<iframe src='https://my.spline.design/robot4legslightcopy-821892969c183761ac2ee7948cc1588d/' frameborder='0'\r\n    width='100%' height='100%'></iframe>",
            }}
          />
        </div>
      </div>
    </div>
  )
}

Sec4.defaultProps = {
  text: 'Submit',
  rootClassName: '',
  textinput_placeholder: 'placeholder',
}

Sec4.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Sec4
