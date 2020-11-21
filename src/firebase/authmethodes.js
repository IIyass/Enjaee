import { firestoreFirebase, firebaseStorage } from './firebaseIndex'
import firebase from 'firebase'

const usersRef = firestoreFirebase.collection("/Users");
const contentsRef = firestoreFirebase.collection("/Content");

export const authMethods = {



    saveUser: async (user, additionalData) => {
        if (!user) return;
        const userRef = firestoreFirebase.doc(`Users/${user.uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            const { email } = user;
            try {
                await userRef.set({
                    email,
                    Name: additionalData,
                    content: [],
                    tickedContent: [],
                    avatar: ''
                });
            } catch (error) {
                console.error("Error creating user document", error);
            }
        }
        return authMethods.getUserDocument(user.uid);
    },



    // firebase helper methods go here... 
    signup: (email, password, displayName, setUser, setErrors, setToken, Confirmpassword) => {
        if (Confirmpassword === password) {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(async res => {
                authMethods.saveUser(res.user, displayName);
                setUser(res.user);
                const token = await Object.entries(res.user)[5][1].b
                //set token to localStorage 
                await localStorage.setItem('token', token)
                //grab token from local storage and set to state. 
                setToken(window.localStorage.token)

            })
                .catch(err => {
                    //saving error messages here
                    setErrors(prev => ([...prev, err.message]))
                })
        } else {
            setErrors(prev => ([...prev, 'passord incorrect']))
        }


    },

    login: (email, password, setUser, setErrors, setToken) => {
        //change from create users to...
        firebase.auth().signInWithEmailAndPassword(email, password)
            //everything is almost exactly the same as the function above
            .then(async res => {
                setUser(res.user);
                const token = await Object.entries(res.user)[5][1].b
                //set token to localStorage 
                await localStorage.setItem('token', token)
                setToken(window.localStorage.token)

            })
            .catch(err => {
                setErrors(prev => ([...prev, err.message]))
            })
    },

    signout: (setErrors, setToken) => {
        // signOut is a no argument function
        firebase.auth().signOut().then(res => {
            //remove the token
            localStorage.removeItem('token')
            //set the token back to original state
            setToken(null)
        })
            .catch(err => {
                console.log(err)
                //there shouldn't every be an error from firebase but just in case
                setErrors(prev => ([...prev, err.message]))
                //whether firebase does the trick or not i want my user to do there thing.
                localStorage.removeItem('token')
                setToken(null)
                console.error(err.message)
            })
    },

    forgotPass: (email) => {
        firebase.auth().sendPasswordResetEmail(email)
    }
}