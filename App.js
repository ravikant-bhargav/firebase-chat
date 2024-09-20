import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import ChatScreen from './src/components/ChatScreen';

const App = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Auth state observer
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsubscribe;
    }, []);

    const handleSignIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
    };

    const handleSignUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
    };

    return (
        <View style={{ padding: 20 }}>
            {user ? (
                <ChatScreen chatId="default_chat" />
            ) : (
                <>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    />
                    <Button title="Sign In" onPress={handleSignIn} />
                    <Button title="Sign Up" onPress={handleSignUp} />
                </>
            )}
        </View>
    );
};

export default App;
