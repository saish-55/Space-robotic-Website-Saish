import React from 'react'

import { Helmet } from 'react-helmet'

import Main from '../components/main'
import Sec2 from '../components/sec2'
import Sec3 from '../components/sec3'
import Sec4 from '../components/sec4'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Knowledgeable Hot Whale</title>
        <meta property="og:title" content="Knowledgeable Hot Whale" />
      </Helmet>
      <div className="home-body">
        <Main rootClassName="main-root-class-name"></Main>
        <Sec2 rootClassName="sec2-root-class-name"></Sec2>
        <Sec3></Sec3>
        <Sec4 rootClassName="sec4-root-class-name"></Sec4>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default Home
