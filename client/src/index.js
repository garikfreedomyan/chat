import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { ChatServiceProvider } from './components/chat-service-context';
import chatService from './services/chat-service';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ChatServiceProvider value={chatService}>
        <Router>
          <App />
        </Router>
      </ChatServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
