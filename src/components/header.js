import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll =(event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50 ) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled : false })
    }
  }


  render() {
    return (
      <div className={this.state.hasScrolled ?
      'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/o-redface-white.svg')} width="44" /></Link>
          <Link to="/Home">Home</Link>
          <Link to="/Product">Products</Link>
          <Link to="/About">About</Link>
          <Link to="/Free Try"><button>Free Try</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
