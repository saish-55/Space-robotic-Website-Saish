import React from 'react'

import PropTypes from 'prop-types'

import './main.css'

const Main = (props) => {
  return (
    <div className={`main-main ${props.rootClassName} `}>
      <div className="main-navbar">
        <img alt={props.logo_alt} src={props.logo_src} className="main-logo" />
        <div className="main-navcontents">
          <div className="main-options">
            <span className="main-projects">{props.projects}</span>
            <span className="main-skills">{props.Skills}</span>
            <span className="main-home">{props.home}</span>
          </div>
          <div className="main-nav-icons">
            <div className="main-instagram">
              <svg viewBox="0 0 877.7142857142857 1024" className="main-icon">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="main-linkedin">
              <svg viewBox="0 0 877.7142857142857 1024" className="main-icon2">
                <path
                  d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="main-facebook">
              <svg viewBox="0 0 602.2582857142856 1024" className="main-icon4">
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <span className="main-welcome">{props.Welcome}</span>
      <span className="main-h-i-iam-saish">{props.HI_Iam_Saish}</span>
      <div className="main-container">
        <span className="main-text">{props.text}</span>
      </div>
      <div className="main-robot">
        <span
          dangerouslySetInnerHTML={{
            __html:
              "<iframe src='https://my.spline.design/superkidrobotcopy-52a0f8cf1cc18bd9dc4cf40d0516801e/' frameborder='0' width='100%'\r\n    height='100%'></iframe>",
          }}
        />
      </div>
      <div className="main-lets-connect">
        <svg viewBox="0 0 877.7142857142857 1024" className="main-arrow">
          <path
            d="M658.286 512c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-201.143c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h201.143v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
            className=""
          ></path>
        </svg>
        <span className="main-lets-connect1">{props.Lets_connect}</span>
      </div>
      <div className="main-container1">
        <div className="main-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                "<iframe src='https://my.spline.design/superkidrobotcopy-52a0f8cf1cc18bd9dc4cf40d0516801e/' frameborder='0' width='100%'\r\n    height='100%'></iframe>",
            }}
          />
        </div>
      </div>
    </div>
  )
}

Main.defaultProps = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  home: 'Home',
  Skills: 'Skills',
  logo_alt: 'image',
  logo_src: '/playground_assets/slogo-300h.png',
  Lets_connect: "Let's Connect",
  HI_Iam_Saish: "Hi! I'M Saish Web Developer",
  rootClassName: '',
  Welcome: 'Welcome to my Portfolio',
  projects: 'Projects',
}

Main.propTypes = {
  text: PropTypes.string,
  home: PropTypes.string,
  Skills: PropTypes.string,
  logo_alt: PropTypes.string,
  logo_src: PropTypes.string,
  Lets_connect: PropTypes.string,
  HI_Iam_Saish: PropTypes.string,
  rootClassName: PropTypes.string,
  Welcome: PropTypes.string,
  projects: PropTypes.string,
}

export default Main
