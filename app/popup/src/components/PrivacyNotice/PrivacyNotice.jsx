import React from 'react';
import PropTypes from 'prop-types';
import { acceptNoticeMessage, changeViewMessage } from '../../../../messages/permanentActionsMessages';

import './privacy-notice.scss';

const acceptPrivacyNotice = () => {
  changeViewMessage('createAccount');
  acceptNoticeMessage();
};

const PrivacyNotice = ({ acceptedNotice }) => (
  <div styleName="privacy-notice-wrapper">
    <div styleName="privacy-notice-body">
      <div>
        ΞXTΞND is an open source Chrome extension published under GPL v3.0 license. Upon installation, the extension
        will create a new Ethereum account for the user, which can then be used to send and receive ETH tips via various
        websites. Original developers of this extension are not responsible for any potential damage or loss resulting
        from the use of this extension.
      </div>
    </div>

    {
      !acceptedNotice &&
      <button tabIndex="-1" onClick={() => { acceptPrivacyNotice(); }}>
        Accept
      </button>
    }
  </div>
);

PrivacyNotice.propTypes = {
  acceptedNotice: PropTypes.bool.isRequired
};

export default PrivacyNotice;
