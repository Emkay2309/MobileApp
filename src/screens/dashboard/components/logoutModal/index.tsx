import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

interface LogoutModalProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onConfirm, onCancel }) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Are you sure you want to logout?</Text>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.button} onPress={onConfirm}>
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'gray' }]}
                            onPress={onCancel}
                        >
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 20,
        fontSize: 18,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LogoutModal;
