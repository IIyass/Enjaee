import React, { useEffect, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import { firebaseDatabase, firestoreFirebase } from '../firebaseService/FirebaseIndex';

import {
  fetchMyData
} from '../store/Me/action';

const usersRef = firestoreFirebase.collection('/users');


const PrivateRoute = ({ component: Component, fetchMyData, ...rest }) => {
  const token = localStorage.getItem('token');
  const me = useSelector((state) => state.MeReducer.Me);
  const Loading = useSelector((state) => state.MeReducer.Loading);

  const dispatch = useDispatch()

  const fetchMyDataCall = useCallback(
    () => dispatch(fetchMyData),
    [dispatch, fetchMyData]
  );

  useEffect(() => {
    fetchMyDataCall();
  }, [fetchMyDataCall]);

  useEffect(() => {
    // Assuming user is logged in

    if (!Loading) {
      const reference = firebaseDatabase.ref(`/online/${me.id}`);
      // Set the /users/:userId value to true
      reference.set(true).then(async () => console.log('connected'))

      // Remove the node whenever the client disconnects
      reference
        .onDisconnect()
        .remove()
        .then(async () => console.log('Disconnected'))
    }
  }, [Loading])

  return (
    <Layout>
      <Route {...rest} render={(props) => (token ? <Component {...props} /> : alert('Please Authenticate'))} />
    </Layout>
  );
};


export default connect(null,
  {

    fetchMyData,

  })(PrivateRoute);

