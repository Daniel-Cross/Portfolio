import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBYS-NkRx4UtoRscUTO9mSNjVlUVnbBsO4',
  authDomain: 'blog-4868a.firebaseapp.com',
  databaseURL: 'https://blog-4868a.firebaseio.com',
  projectId: 'blog-4868a',
  storageBucket: 'blog-4868a.appspot.com',
  messagingSenderId: '224919909643'
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
