import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';


// import Login from './containers/Login';
// import ItemCard from './containers/Items';
// import NotFound from './containers/NotFound';

injectTapEventPlugin();

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
      {/*<ItemCard />*/}
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
