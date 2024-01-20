import React from 'react'
import PropTypes from 'prop-types'

const Logo = props => {
  return (
    <h1 className='header__logo'>
        <a href='/'>
            <em arua-hidden='true'></em>
            <span>webs<br />youtube</span>
        </a>
    </h1>
  )
}

Logo.propTypes = {}

export default Logo