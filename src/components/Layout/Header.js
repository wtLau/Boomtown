import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import boomtownLogo from '../../images/boomtown-logo.svg';

import './styles.css';

const style = {
  margin: 12,
};


const Header = () => (
  <div className="header">
    <div className="logo_menu">
      <img className="logo" alt="logo" src={boomtownLogo} />
      <DropDownMenu value={'Filer by Tag'} >
        <MenuItem value={1} primaryText="Electronics" />
        <MenuItem value={2} primaryText="Household Items" />
        <MenuItem value={3} primaryText="Musical Instruments" />
        <MenuItem value={4} primaryText="Physical Media" />
        <MenuItem value={5} primaryText="Recreational Equipment" />
        <MenuItem value={6} primaryText="Sporting Goods" />
        <MenuItem value={7} primaryText="Tools" />
      </DropDownMenu>
    </div>
    <div className="buttons">
      <RaisedButton label="My Profile" primary={true} style={style} />
      <RaisedButton label="Log Out"  style={style} />
    </div>
  </div>
);

export default Header;
