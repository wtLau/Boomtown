import {
  ApolloClient,
  createBatchingNetworkInterface
 } from 'apollo-client';

import {
   FirebaseAuth
 } from './firebase';

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

networkInterface.use([{
  async applyBatchMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    const token = await FirebaseAuth.currentUser.getIdToken(true);
    req.options.headers['Authorization'] = token;
    next();
  }
}]);


const client = new ApolloClient({ networkInterface });
export default client;
