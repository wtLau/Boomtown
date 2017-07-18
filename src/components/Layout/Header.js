import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import boomtownLogo from '../../images/boomtown-logo.svg';
import FilterList from '../../components/FilterList';

import './styles.css';

const style = {
  margin: 12,
};

const Header = () => (
  <div className="header">
    <div className="logo_menu">
      <Link to="/">
        <img className="logo" alt="logo" src={boomtownLogo} />
      </Link>
      <FilterList />
    </div>

    <div className="buttons">
      <Link to="/profile">
        <RaisedButton label="My Profile" primary={true} style={style} />
      </Link>
      <Link to="/daf">
        <RaisedButton label="Log Out"  style={style} />
      </Link>
    </div>
  </div>
);

export default Header;
