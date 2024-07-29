import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatComponent from '../components/ChatComponent';

const ChatScreen = () => (
    <View style={styles.container}>
        <ChatComponent />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ChatScreen;
