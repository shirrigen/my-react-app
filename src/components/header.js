import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/o-redface-white.svg')} width="44" /></Link>
    <Link to="/Home">Home</Link>
    <Link to="/Product">Products</Link>
    <Link to="/About">About</Link>
    <Link to="/Free Try"><button>Free Try</button></Link>
    </div>
  </div>
)

export default Header
