import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes />
    </Provider>
  );
};

