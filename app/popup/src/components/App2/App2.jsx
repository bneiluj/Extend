import React from 'react';
import PropTypes from 'prop-types';
import { createWalletMessage } from '../../../../messages/accountActionMessages';
import connect from '../../../../customRedux/connect';
import Header from '../Header/Header';
import PrivacyNotice from '../PrivacyNotice/PrivacyNotice';

import './app2.scss';

// <button o nClick={() => createWalletMessage()}>
// Generate wallet
// </button>

const App2 = ({ acceptedNotice }) => (
  <div styleName="app2">
    <Header />

    {
      !acceptedNotice && <PrivacyNotice />
    }

    {
      acceptedNotice && <div>App Dashboard</div>
    }
  </div>
);

App2.propTypes = {
  acceptedNotice: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  acceptedNotice: state.user.acceptedNotice
});

export default connect(App2, mapStateToProps);