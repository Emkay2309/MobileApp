import React from 'react';
import { View, Text, Button, ActivityIndicator, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../../../redux/store/store';
import { placeOrder } from '../../../redux/slicers/orderSlice/actions';
import { OrderScreenNavigationProp } from '../../../navigation/type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderScreen = ({ navigation, route }: OrderScreenNavigationProp) => {
    const { address } = route.params;
    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state: RootState) => state.order);

    const token = useAppSelector(
        state => state.auth.user?.data?.access_token,
    );
    console.log(token, ' ', address);


    const OnPlaceOrder = async () => {
        try {
          const response = await dispatch(
            placeOrder(
                {access_token : token , address : address}
            )).unwrap();
            console.log(response);
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <View>
            <MaterialCommunityIcons
                name="backburger"
                size={28}
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    zIndex: 2,
                }}
                color={'#333'}
                onPress={() => navigation.goBack()}
            />
            <View>
                <Text style={{ fontSize: 18 }}>OrderScreen</Text>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <View style={{marginTop : 200}}>
                        <Button title="Place Order" onPress={()=>OnPlaceOrder()} />
                    </View>
                )}
                {isError && <Text style={{ color: 'red' }}>Error placing order. Please try again.</Text>}
            </View>
        </View>
    );
};

export default OrderScreen;
