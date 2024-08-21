import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { OrderListScreenNavigationProp } from '../../../navigation/type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppDispatch, useAppSelector } from '../../../redux/store/store';
import { getOrderList } from '../../../redux/slicers/orderSlice/actions';
import { IOrderItem } from '../../../redux/slicers/orderSlice/type';



type OrderType = {
    cost: string,
    created: string,
    id: number
}

const OrderList = ({ navigation }: OrderListScreenNavigationProp) => {

    //const {orderAddress} = route.params;

    const dispatch = useAppDispatch();
    const access_token = useAppSelector(
        state => state.auth.user?.data?.access_token,
    );

    useEffect(() => {
        dispatch(getOrderList({ access_token: access_token }))
            .then(() => {
                // setDataLoaded(true);
                console.log('success');
            })
            .catch(error => {
                console.log(error);
            });
    }, [dispatch, access_token]);

    const { isError, isLoading } = useAppSelector(state => state.order);
    const orderList = useAppSelector(state => state.order.orderList?.data);

    console.log(orderList);//IOrderItem

    const [selectedAddress, setSelectedAddress] = useState<string>('');

    // const handlePress = (address: string) => {
    //     setSelectedAddress(address);
    // };

    const renderItem = ({ item }: { item: IOrderItem }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('OrderDetail', {
                    order_id: item.id,
                    created: item.created,
                })
            }
        >
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.created}>Order ID : {item.id}</Text>
                    <Text style={styles.date}>Ordered Date : {item.created}</Text>
                </View>
                <Text style={styles.created}>$ {item.cost}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name='backburger'
                size={28}
                color={'#333'}
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.heading}>My Orders</Text>
            {orderList ? (
                <FlatList
                    data={orderList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <Text>No orders available</Text>
            )}
            <TouchableOpacity style={styles.btn} onPress={() => { }}>
                <Text style={styles.btnText}>Buy now</Text>
            </TouchableOpacity>
        </View>
    );

};

export default OrderList;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',

    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
        alignItems: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    textContainer: {
        marginLeft: 10,
        flexDirection : 'row',
        gap : 50
    },
    created: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    date: {
        fontSize: 14,
        color: '#777777',
        marginTop : 10
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 10,
        width: 300,
        height: 50,
        marginTop: 10,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',


    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 20
    },
    backIcon: {

    },
});


