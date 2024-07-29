// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  const handleSend = async () => {
    try {
      const res = await axios.post('http://<YOUR_SERVER_IP>:3000/process_query', { query });
      setResponse(res.data.response);
      setHistory([...history, { type: 'user', text: query }, { type: 'bot', text: res.data.response }]);
      setQuery('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.chatContainer}>
          {history.map((msg, index) => (
            <View key={index} style={msg.type === 'user' ? styles.userMessage : styles.botMessage}>
              <Text>{msg.text}</Text>
            </View>
          ))}
          {response && (
            <View style={styles.botMessage}>
              <Text>{response}</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Type your message here..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1ffd1',
    padding: 10,
    borderRadius: 5,
    marginVertical: 2,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#d1d1ff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default App;
