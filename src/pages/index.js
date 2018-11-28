import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
       <div className="HeroGroup">
          <h1>Welcome to RGBL</h1>
           <p>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.
           </p>
        <Link to="/page-2/">Play</Link>
       </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
