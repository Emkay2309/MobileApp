import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { OrderDetailScreenNavigationProp } from '../../../navigation/type'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView } from 'react-native-gesture-handler'
import { useAppDispatch, useAppSelector } from '../../../redux/store/store'
import { getOrderDetails } from '../../../redux/slicers/orderSlice/actions'
import { OrderType, OrderDetailType } from './type'
import { styles } from './style';


const OrderDetail = ({ navigation, route }: OrderDetailScreenNavigationProp) => {

    const [data, setData] = useState<OrderType>();
    const dispatch = useAppDispatch();

    const token = useAppSelector(
        state => state.auth.user?.data?.access_token,
    );
    const id: number = route.params.order_id;


    useEffect(() => {
        dispatch(getOrderDetails({
            access_token: token,
            order_id: id
        }))
            .then((result) => {
                console.log(result?.payload?.data);

                setData(result?.payload?.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    //const data: any = [{ id: 1, name: 'hello' }, { id: 1, name: 'hello' }, { id: 1, name: 'hello' },];


    const renderItem = ({ item }: { item: OrderDetailType }) => (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                {/* <Text style={styles.orderId}>Order ID: {item.order_id}</Text> */}
                {/* <Text style={styles.category}>{item.prod_cat_name}</Text> */}
            </View>
            <View style={styles.body}>
                <Image source={{ uri: item.prod_image }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.productName}>{item.prod_name}</Text>
                    <Text style={styles.productId}>Product ID: {item.product_id}</Text>
                    <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    <Text style={styles.total}>Total: ${item.total}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );

    return (
        <View style={styles.mainCon}>
            <MaterialCommunityIcons
                name='backburger'
                size={28}
                color={'#333'}
                onPress={() => navigation.goBack()}
                style={styles.btn}
            />
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Order Id : {data?.id}</Text>
            </View>
            <FlatList
                data={data?.order_details}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );

}

export default OrderDetail

