import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import boomtownLogo from '../../images/boomtown-logo.svg';
import FilterList from '../FilterList';
import { itemListFilter } from '../../redux/modules/items';

import './styles.css';

const style = {
  margin: 12,
};

const Header = ({ dispatch, itemFilter }) => (
  <div className="header">
    <div className="logo_menu">
      <Link to="/">
        <img className="logo" alt="logo" src={boomtownLogo} />
      </Link>
      <FilterList
        dispatch={dispatch}
        handleChange={itemListFilter}
        itemFilter={itemFilter}
      />
    </div>
    <div className="buttons">
      <Link to="/profile/QpVjRYM0nNU9Tvm8OWtI5ATGiFf1">
        <RaisedButton label="My Profile" primary={true} style={style} />
      </Link>
      <Link to="/daf">
        <RaisedButton label="Log Out"  style={style} />
      </Link>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    itemFilter: state.items.itemFilter
  };
}

export default connect(mapStateToProps)(Header);
