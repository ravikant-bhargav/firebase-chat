import firestore from '@react-native-firebase/firestore';

export const sendMessage = async (chatId, text, user) => {
    try {
        await firestore()
            .collection('chats')
            .doc(chatId)
            .collection('messages')
            .add({
                text,
                createdAt: firestore.FieldValue.serverTimestamp(),
                user: {
                    _id: user.uid,
                    email: user.email,
                },
            });
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

export const getMessages = (chatId, callback) => {
    return firestore()
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .orderBy('createdAt', 'desc')
        .onSnapshot(querySnapshot => {
            const messages = querySnapshot.docs.map(doc => {
                const firebaseData = doc.data();

                const data = {
                    _id: doc.id,
                    text: firebaseData.text,
                    createdAt: firebaseData.createdAt ? firebaseData.createdAt.toDate() : new Date(),
                    user: firebaseData.user,
                };

                return data;
            });

            callback(messages);
        });
};
