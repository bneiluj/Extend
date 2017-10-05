import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { wrapStore } from '../../modules/react-chrome-redux/index';
import { STORE_PORT } from '../../constants/general';
import * as userActions from '../../actions/userActions';
import * as accountActions from '../../actions/accountActions';
import contractConfig from '../../modules/config.json';

let web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/9yl24EhEjqjMG3uAR0oR'));
const contract = web3.eth.contract(contractConfig.abi).at(contractConfig.contractAddress);

const store = createStore(rootReducer, {});
const dispatch = store.dispatch;
const getState = store.getState;

wrapStore(store, { portName: STORE_PORT });

userActions.setAddress(contract, getState().user.address, dispatch, web3);
userActions.setNetwork(web3, dispatch);

chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    const funcName = msg.action;

    switch (funcName) {
      case 'createUserAuth':
        userActions[funcName](contract, web3, getState().user.address, dispatch);
        break;

      case 'createWallet':
        accountActions[funcName]();
        break;
      default:
        console.log('action is not handled', funcName);
    }
  });
});
