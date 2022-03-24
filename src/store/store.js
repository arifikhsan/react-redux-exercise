import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
// import reducer from './product/reducer'; // folder approach

import { reducer } from './product';

const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;
