import React, { useReducer } from 'react';
import { StyleSheet, Pressable, Text, Button } from 'react-native';
import { View, AnimatePresence } from 'moti';

function Shape() {
    return (
        <View
            from={{
                opacity: 0,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.9,
            }}
            exitTransition={{
                type: 'timing',
                duration: 500,
            }}
            style={styles.shape}
        >
            <Text>Login</Text>
        </View>
    );
}

export default function Demo() {
    const [visible, toggle] = useReducer((s) => !s, true);

    return (
        <View  style={styles.container}>
            <Text>Check</Text>
            <Button title='go to login' color={'lightpink'} onPress={toggle}/>
            <AnimatePresence>{visible && <Shape />}</AnimatePresence>
        </View>
    );
}

const styles = StyleSheet.create({
    shape: {
        justifyContent: 'center',
        height: 250,
        width: 250,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
        alignItems : 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 171, 0, 0.60)',

    },
});