import React, { useEffect, useCallback, useState } from "react";
import firebase from "firebase";
import { connect, useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Layout from "../Components/Layout";
import {
  firebaseDatabase,
  firestoreFirebase,
} from "../firebaseService/FirebaseIndex";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { fetchMyData } from "../store/Me/action";
import Modal from "../Components/Modal";
const roomsRef = firestoreFirebase.collection("/rooms");

const PrivateRoute = ({ component: Component, fetchMyData, ...rest }) => {
  const token = localStorage.getItem("token");
  const me = useSelector((state) => state.MeReducer.Me);
  const Loading = useSelector((state) => state.MeReducer.Loading);
  const [calls, setCalls] = useState([]);
  const dispatch = useDispatch();

  const fetchMyDataCall = useCallback(() => dispatch(fetchMyData), [
    dispatch,
    fetchMyData,
  ]);

  const query = roomsRef;

  const [snapshot, loading, error] = useCollectionData(query, {
    idField: "id",
  });

  useEffect(() => {
    fetchMyDataCall();
  }, [fetchMyDataCall]);

  // useEffect(() => {
  //   if (!loading) {
  //     const roomCalls = snapshot.filter((e) => {
  //       return e.type === "offer";
  //     });
  //     setCalls(roomCalls);
  //   }
  // });

  useEffect(() => {
    // Assuming user is logged in

    if (!Loading) {
      const reference = firebaseDatabase.ref(`/online/${me.id}`);
      // Set the /users/:userId value to true
      reference.set(true).then(async () => console.log("connected"));

      // Remove the node whenever the client disconnects
      reference
        .onDisconnect()
        .remove()
        .then(async () => console.log("Disconnected"));
    }
  }, [Loading]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Layout>
      {snapshot !== undefined && (
        <Modal>
          <h1>You have a Call from {snapshot[0].from}</h1>
        </Modal>
      )}
      <Route
        {...rest}
        render={(props) =>
          token ? <Component {...props} /> : alert("Please Authenticate")
        }
      />
    </Layout>
  );
};

export default connect(null, {
  fetchMyData,
})(PrivateRoute);
