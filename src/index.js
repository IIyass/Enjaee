import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GroupProvider from './Provider/GroupProvider/GroupProvidre'
import ChatProvider from './Provider/ChatProvider/ChatProvider'
import AuthProvider from './Provider/AuthProvider/authProvider'
import { createStore, compose, applyMiddleware } from "redux";
import reduxthunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reducers from './store/Reducer'
import './App.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(reduxthunk)));

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <GroupProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </GroupProvider>

      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

