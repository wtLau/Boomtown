import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import client from './config/apolloClient';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Routes from './routes/';
import { loadLoginAuth } from './redux/modules/auth';
import { FirebaseAuth } from './config/firebase';

import store from './redux/store';

FirebaseAuth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loadLoginAuth(user));
  } else {
    store.dispatch(loadLoginAuth(false));
  }
});

injectTapEventPlugin();


const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <ApolloProvider client={client} store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ApolloProvider>
  </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
