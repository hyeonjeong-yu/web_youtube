import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { snsLink } from '../../data/header.js';

const Sns = props => {
    let [sns, setSns] = useState(snsLink);
    return (
    <div className='header__sns'>
        <ul>
            {
                sns.map((param,i) => {
                    return (
                        <li key={i}>
                            <a href={sns[i].url} target='_blank' rel='noopener noreferrer' aria-label={sns[i].title}>
                                <span>{sns[i].icon}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    )
}

Sns.propTypes = {}

export default Sns