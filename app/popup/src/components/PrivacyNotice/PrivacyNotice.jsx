import React from 'react';
import { changeViewMessage } from '../../../../messages/userActionsMessages';

import './privacy-notice.scss';

const PrivacyNotice = () => (
  <div styleName="privacy-notice-wrapper">
    <div styleName="privacy-notice-body">
      <div>
        ΞXTΞND an open soruce Chrome extension published under GPL v3.0 license. Upon installation, the extension will
        create a new Ethereum account for the user, which can then be used to send and receive ETH tips via various
        websites. Original developers of this extension are not responsible for any potential Ether loss resulting from
        the use of this tool.
      </div>
    </div>

    <button tabIndex="-1" onClick={() => { changeViewMessage('createAccount', { acceptedNotice: true }); }}>
      Accept
    </button>
  </div>
);

export default PrivacyNotice;
