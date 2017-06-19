import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../assets/Logo_ML.png';

const Logo = () => (
  <Link to="/">
    <img src={logoImage}/>
  </Link>
);

export default Logo;
