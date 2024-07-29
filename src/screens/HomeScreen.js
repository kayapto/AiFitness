import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to FitnessApp</Text>
        <Button title="Chat with AI Coach" onPress={() => navigation.navigate('Chat')} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
