import React from 'react';

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import { Navigation } from "./components/navigation"
import 'bootstrap/dist/css/bootstrap.min.css';

const { store } = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
