import React from 'react';
import {Link} from 'react-router-dom'
import './styles.scss'

const Logo = (props) => {
  return (
    <Link to="/" className={`logo ${props.color ? props.color : ''}`}>
      Boost PTE
    </Link>
  );
}

export default Logo;
