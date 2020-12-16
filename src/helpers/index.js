import { firestoreFirebase, firebaseStorage } from '../firebaseService/FirebaseIndex'
const Token = localStorage.getItem('token');
const usersRef = firestoreFirebase.collection("/users");


export const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


export const getMeByPhone = async () => {
    const res = await usersRef.get();
    let MyDocument = res.docs.filter(e => {
        return e.data().mobile === parseJwt(Token).firebase.identities.phone[0];
    })
    MyDocument = MyDocument.map(e => {
        return { id: e.id, ...e.data() }
    })
    return MyDocument;
}



export const getUserNameById = async (id) => {
    const res = await usersRef.get();
    let name = res.docs.filter(e => {
        return e.id === id;
    })
    name = name.map(e => {
        return e.data().name
    })
    return name[0];
}