import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
       <div className="HeroGroup">
          <h1>Welcome to RGBL</h1>
           <p>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.
           </p>
           <Link to="/page-2/">Play</Link>
           <div className="Logos">
            <img src={require('../images/linkedin-108.png')} width="52"/>
            <img src={require('../images/liepin-108.png')} width="52"/>
            <img src={require('../images/maimai-108.png')} width="52"/>
            <img src={require('../images/lagou-108.png')} width="52"/>
            <img src={require('../images/51job-108.png')} width="52"/>
            <img src={require('../images/zhipin-108.png')} width="52"/>
            <img src={require('../images/zhilian-108.png')} width="52"/> 
           </div>

           <svg width="100%" height="144px" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill="white">
               <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="6s" values="M0,53.885577 C313.957943,-11.1874944 698.640399,-17.1384354 1154.04737,36.032754 C1428.98773,68.1335056 1708.75527,83.2625967 1993.35,81.4200274 C2117.88573,80.6137381 2306.76906,72.0922221 2560,55.8554794 L2559.94962,167.483281 L0,167.483281 L0,53.885577 Z;

               M0,3.88557704 C250.72885,-7.9537249 522.243086,12.7029092 814.542707,65.8554794 C1252.99214,145.584335 1701.50195,145.584335 1993.35,91.4200274 C2187.91537,55.3104892 2376.7987,46.7889732 2560,65.8554794 L2559.94962,177.483281 L0,177.483281 L0,3.88557704 Z;

               M0,46.885577 C426.391765,104.430582 811.074221,98.4796411 1154.04737,29.032754 C1282.68196,2.98618951 1706.00125,-34.9698459 1993.35,74.4200274 C2184.91583,147.34661 2373.79917,138.825094 2560,48.8554794 L2559.94962,160.483281 L0,160.483281 L0,46.885577 Z;

               M0,53.885577 C313.957943,-11.1874944 698.640399,-17.1384354 1154.04737,36.032754 C1428.98773,68.1335056 1708.75527,83.2625967 1993.35,81.4200274 C2117.88573,80.6137381 2306.76906,72.0922221 2560,55.8554794 L2559.94962,167.483281 L0,167.483281 L0,53.885577 Z
               " 
               />
             </path>
          </svg>
       </div>
      </div>
        <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
         <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/img-bg-01.jpg')} />
            <Card 
            title="Sketch for Developers"
            text="22 sections"
            image={require('../images/img-bg-02.jpg')} />
            <Card 
            title="Go for Leaders"
            text="14 sections"
            image={require('../images/img-bg-03.jpg')} />
            <Card 
            title="Vue for Noobs"
            text="19 sections"
            image={require('../images/img-bg-04.jpg')} />
          </div>
      </div>      
    </div>

  </Layout>
)

export default IndexPage
