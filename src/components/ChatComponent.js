import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (input.trim() === '') return;

        setMessages([...messages, { sender: 'user', text: input }]);
        setInput('');

        // Send request to the server
        const response = await fetch('https://your-server-url/process_query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: input }),
        });
        const data = await response.json();

        setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.response }]);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <Text style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>{item.text}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Type your message here..."
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default ChatComponent;
