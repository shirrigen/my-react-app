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
           <svg width="100%" height="148px" viewBox="0 0 2560 352" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill="white">
               <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="8s" values="M0,38.8170732 C607.318673,160.817073 1091.19473,174.817073 1451.62817,80.8170732 C1812.0616,-13.1829268 2181.51888,-25.1829268 2560,44.8170732 L2559.94962,384.817073 L0,384.817073 L0,38.8170732 Z;

               M0,51.8170732 C542.086032,-28.5420363 1025.96209,-14.5420363 1451.62817,93.8170732 C1877.29425,202.176183 2246.75152,190.176183 2560,57.8170732 L2559.94962,397.817073 L0,397.817073 L0,51.8170732 Z;

               M0,61.8170732 C276.220456,229.560677 660.98697,246.717202 1154.29954,113.28665 C1647.61211,-20.1439023 2116.17893,-35.3004279 2560,67.8170732 L2559.94962,407.817073 L0,407.817073 L0,61.8170732 Z;

               M0,38.8170732 C607.318673,160.817073 1091.19473,174.817073 1451.62817,80.8170732 C1812.0616,-13.1829268 2181.51888,-25.1829268 2560,44.8170732 L2559.94962,384.817073 L0,384.817073 L0,38.8170732 Z
               " 
               />
             </path>
          </svg>
       </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
