import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AddressListScreenNavigationProp, RootStackParamList } from '../../../navigation/type';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IAddress {
    firstLine: string;
    secondLine: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    countryCode: string | null;
    type: string;
}

const arr: IAddress[] = [
    {
        firstLine: '1 abc street',
        secondLine: '5th cross',
        city: 'mumbai',
        state: 'maharashtra',
        pincode: '132435',
        country: 'India',
        countryCode: null,
        type: 'home',
    },
    {
        firstLine: '2 abc street',
        secondLine: '5th cross',
        city: 'mumbai',
        state: 'maharashtra',
        pincode: '132435',
        country: 'India',
        countryCode: null,
        type: 'home',
    },
    {
        firstLine: '3 abc street',
        secondLine: '5th cross',
        city: 'mumbai',
        state: 'maharashtra',
        pincode: '132435',
        country: 'India',
        countryCode: null,
        type: 'home',
    },
];

const AddressList = ({ navigation }: AddressListScreenNavigationProp) => {
    const [selectedAddress, setSelectedAddress] = useState<string>('');

    const handlePress = (address: string) => {
        setSelectedAddress(address);
    };

    const handleBuy = (address: string) => {
        console.log(address);

        if (address) {
            navigation.navigate('OrderScreen', {
                address,
            });
        } else {
            Toast.show('Please Select Address', Toast.SHORT);
        }
    };

    const renderItem = ({ item }: { item: IAddress }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePress(item.firstLine)}
        >
            <RadioButton
                value={item.firstLine}
                status={selectedAddress === item.firstLine ? 'checked' : 'unchecked'}
                onPress={() => handlePress(item.firstLine)}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.type}</Text>
                <Text style={styles.address}>{item.firstLine}, {item.secondLine}, {item.city}, {item.state}, {item.pincode}, {item.country}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="backburger"
                size={28}
                style={{}}
                color="#333"
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.heading}>Shipping Address</Text>
            <FlatList
                data={arr}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.btn} onPress={() => handleBuy(selectedAddress)}>
                <Text style={styles.btnText}>Buy now</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddressList;
