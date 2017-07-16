import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from './Profile';
import { fetchProfileData } from '../../redux/modules/profile';


class ProfileContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfileData());
  }

  render() {
    return <Profile profileData={this.props.profileData} />;
  }
}
// TODO: add prop type check
// Items.propTypes = {
//   itemsData: PropTypes.objectOf()
// };

function mapStateToProps(state) {
  return {
    profileData: state.profile.profileData
  };
}
export default connect(mapStateToProps)(ProfileContainer);
