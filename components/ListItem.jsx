import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

export default function ListItem({ task, toggleTaskStatus, deleteTask }) {
    return (
        <View style={styles.container}>
            <View style={styles.taskItem}>
                <Text style={{ textDecorationLine: task.isCompleted ? 'line-through' : 'none' }}>
                    {task.text}
                </Text>
                <Pressable style={styles.button} onPress={() => toggleTaskStatus(task.id)}>
                    <Text style={styles.buttonText}>{task.isCompleted ? "Not Finished" : "Finished"}</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => deleteTask(task.id)}>
                    <Text style={styles.buttonText}>DELETE</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    button: {
        backgroundColor: '#FF9D3D',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});