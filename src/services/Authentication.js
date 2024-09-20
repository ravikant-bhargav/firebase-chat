import auth from '@react-native-firebase/auth';

const signIn = async (email, password) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        console.log('User signed in:', userCredential.user);
    } catch (error) {
        console.error(error);
    }
};

const signUp = async (email, password) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        console.log('User signed up:', userCredential.user);
    } catch (error) {
        console.error(error);
    }
};
