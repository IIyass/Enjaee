import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import {
  ADD_GROUP_ACTION,
  BACK_TO_CONTACT,
  SELECT_GROUP_PERSON,
  REMOVE_GROUP_PERSON,
  ADD_GROUP_BY_NAME,
  GET_GROUP_BY_ID,
  GET_ALL_GROUPS,
  GROUP_ERROR,
  GO_TO_GROUP_DETAIL,
  SHOW_ALL_GROUP,
  ADD_MEMBERS,
  UPDATE_MEMBER
} from './actionType';
import { getMeByPhone } from '../../helpers'

const groupRef = firestoreFirebase.collection('/groups');

export const showAllGroup = () => async (dispatch) => {
  dispatch({
    type: SHOW_ALL_GROUP
  })
};

export const updateMember = (id) => async (dispatch, getState) => {
  const members = getState().GroupChatReducer.GroupPerson;
  let ExistingMembers = [];

  await groupRef
    .where(firebase.firestore.FieldPath.documentId(), '==', id)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.forEach((doc) => {
        ExistingMembers = [...doc.data().members]
      });
    })

  const NewMembers = members.filter(e => !ExistingMembers.includes(e))

  await groupRef.doc(id).update({
    members: [...ExistingMembers, ...NewMembers],
  })

  dispatch({
    type: UPDATE_MEMBER,
    payload: id
  })
};

export const AddMember = () => async (dispatch) => {
  dispatch({
    type: ADD_MEMBERS,
  });
};

export const addGroupAction = () => async (dispatch) => {
  dispatch({
    type: ADD_GROUP_ACTION,
  });
};

export const goToGroupDetail = (id) => async (dispatch) => {
  dispatch({
    type: GO_TO_GROUP_DETAIL,
    payload: id
  });
};

export const getGroupById = (id) => async (dispatch) => {
  let groupMetadata = {}

  await groupRef
    .where(firebase.firestore.FieldPath.documentId(), '==', id)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.forEach((doc) => {
        groupMetadata = ({ id: doc.id, ...doc.data() })
      });
    })

  dispatch({
    type: GET_GROUP_BY_ID,
    payload: groupMetadata
  });
};

export const addNewGroup = (name) => async (dispatch, getState) => {
  const me = await getMeByPhone();
  const members = getState().GroupChatReducer.GroupPerson;
  const allGroups = getState().GroupChatReducer.allGroups;
  const VerifyName = allGroups.filter(group => {
    return group.name === name
  });
  const VerifyGroup = allGroups.filter(group => {
    return group.members.every((e) => members.includes(e)) &&
      members.every((e) => group.members.includes(e))
  });


  if (members.length < 2) {
    dispatch({
      type: GROUP_ERROR,
      payload: "Group member must be more than one !"
    });
  } else {
    if (VerifyName.length !== 0) {
      dispatch({
        type: GROUP_ERROR,
        payload: "Group name already Exist !"
      });
    } else {
      if (VerifyGroup.length !== 0) {
        dispatch({
          type: GROUP_ERROR,
          payload: "Group already exist with the same members !"
        });
      } else {
        await groupRef.add({
          members: [me[0].id, ...members],
          name: name
        }).then(doc => {
          dispatch({
            type: ADD_GROUP_BY_NAME,
            payload: doc.id
          });
        })
      }
    }
  }
};

export const getAllGroups = () => async (dispatch) => {
  const me = await getMeByPhone();
  let data = [];
  await groupRef
    .get()
    .then((querySnapshot) => {
      return querySnapshot.forEach((doc) => {
        if (doc.data().members.includes(me[0].id)) {
          data = [...data, { id: doc.id, ...doc.data() }]
        }
      });
    })
  dispatch({
    type: GET_ALL_GROUPS,
    payload: data,
  });
};

export const selectGroupPerson = (PersonId) => async (dispatch) => {
  dispatch({
    type: SELECT_GROUP_PERSON,
    payload: PersonId,
  });
};

export const removeGroupPerson = (PersonId) => async (dispatch, getState) => {
  const GroupPersonState = getState().GroupChatReducer.GroupPerson;
  const index = GroupPersonState.indexOf(PersonId);
  dispatch({
    type: REMOVE_GROUP_PERSON,
    payload: index,
  });
};

export const backToContact = () => async (dispatch) => {
  dispatch({
    type: BACK_TO_CONTACT,
  });
};

