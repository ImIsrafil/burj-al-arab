import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })

    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((err) => console.log(err));
    }

    return {
        signInUsingGoogle,
        user,
        logout
    }
}


export default useFirebase;