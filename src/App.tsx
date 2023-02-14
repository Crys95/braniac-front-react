import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RouterPage from './routes/route';
import { Toaster } from 'react-hot-toast';
import { store, persistor } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
          <RouterPage />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
