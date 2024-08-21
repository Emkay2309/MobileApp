import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './style';
import { AddressListScreenNavigationProp } from '../../../navigation/type';
import Toast from 'react-native-simple-toast';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootState } from '../../../redux/store/store';
import { IAddress } from '../../../redux/slicers/addressSlice/type';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddress } from '../../../redux/slicers/addressSlice/addressSlice';
// import { getAddress } from '../../../redux/slicers/addressSlice/addressSlice';

const AddressList = ({ navigation }: AddressListScreenNavigationProp) => {
    const [selectedAddress, setSelectedAddress] = useState<string>('');
    const addressArr = useSelector((state : RootState) => state.addresss.addressArr);
    
    const dispatch = useDispatch();
    //console.log('Redux add :', addressArr );

    // useEffect(()=> {
    //     let val = dispatch(getAddress());
    //     console.log(val);
    // },[])

    const handlePress = (address: string) => {
        setSelectedAddress(address);
    };

    const handleAddAdress = () => {
        navigation.navigate('AddAddress');
    }

    const handleBuy = (address : string) => {
        console.log('Selected Address:', address);

        if (address) {
            navigation.navigate('OrderScreen', {
                address,
            });
        } else {
            Toast.show('Please Select Address', Toast.SHORT);
        }
    };

    const handleRemove = (address : string) => {
        dispatch(removeAddress(address));
    }

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
            <TouchableOpacity style={styles.removeBtn} onPress={() => handleRemove(item.firstLine )}>
                <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <MaterialCommunityIcons
                    name="backburger"
                    size={28}
                    style={styles.backBtn}
                    color="#333"
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.heading}>Shipping Address</Text>
            </View>
            <FlatList
                data={addressArr}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.btn} onPress={() => handleAddAdress()}>
                <Text style={styles.btnText}>Add Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => handleBuy(selectedAddress)}>
                <Text style={styles.btnText}>Buy now</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddressList;
