import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AddAddressScreenNavigationProp } from '../../../navigation/type';
import { IAddress } from '../../../redux/slicers/addressSlice/type';
import { useAppDispatch } from '../../../redux/store/store';
import { addAddress } from '../../../redux/slicers/addressSlice/addressSlice';



const AddAddressScreen = ({ navigation }: AddAddressScreenNavigationProp) => {
    const dispatch = useAppDispatch();
    const [newAddress, setNewAddress] = useState<IAddress>({
        firstLine: '',
        secondLine: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
        countryCode: null,
        type: '',
    });

    const handleInputChange = (field: keyof IAddress, value: string) => {
        setNewAddress({ ...newAddress, [field]: value });
    };

    const handleAddAddress = (address : IAddress ) => {
        console.log('New Address:', newAddress);

        dispatch(addAddress(address));
        navigation.navigate('AddressList');

    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90} // Adjust based on your header height or any other factors
        >
            <View style={styles.headingContainer}>
                <MaterialCommunityIcons
                    name="backburger"
                    size={28}
                    style={styles.backBtn}
                    color="#333"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.heading}>Add New Address</Text>
            </View>

            <ScrollView
                style={styles.scroll}
                keyboardShouldPersistTaps="handled"
            >
                <TextInput
                    style={styles.input}
                    placeholder="First Line"
                    value={newAddress.firstLine}
                    onChangeText={(text) => handleInputChange('firstLine', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Second Line"
                    value={newAddress.secondLine}
                    onChangeText={(text) => handleInputChange('secondLine', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="City"
                    value={newAddress.city}
                    onChangeText={(text) => handleInputChange('city', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="State"
                    value={newAddress.state}
                    onChangeText={(text) => handleInputChange('state', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Pincode"
                    value={newAddress.pincode}
                    onChangeText={(text) => handleInputChange('pincode', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Country"
                    value={newAddress.country}
                    onChangeText={(text) => handleInputChange('country', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Country Code (Optional)"
                    value={newAddress.countryCode || ''}
                    onChangeText={(text) => handleInputChange('countryCode', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address Type (e.g., home, work)"
                    value={newAddress.type}
                    onChangeText={(text) => handleInputChange('type', text)}
                />
            </ScrollView>
            
            <TouchableOpacity style={styles.btn} onPress={()=>handleAddAddress(newAddress)}>
                <Text style={styles.btnText}>Add Address</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backBtn: {
        marginRight: 10,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'center',
    },
    scroll: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 20,
    },
});
