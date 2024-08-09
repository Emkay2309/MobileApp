import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, ToastAndroid, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../../../redux/store/store';
import { placeOrder } from '../../../redux/slicers/orderSlice/actions';
import { OrderScreenNavigationProp } from '../../../navigation/type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IPlaceOrderParams } from '../../../redux/slicers/orderSlice/type';
import Animated, {
    useSharedValue,
    withTiming,
    Easing,
    useAnimatedStyle,
    withRepeat,
    withSequence,
} from 'react-native-reanimated';




const OrderScreen = ({ navigation, route }: OrderScreenNavigationProp) => {
    const { address } = route.params;
    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state: RootState) => state.order);
    const [data, setData] = useState<string>('');

    const token = useAppSelector(
        state => state.auth.user?.data?.access_token,
    );
    console.log(token, ' ', address);

    const value: IPlaceOrderParams = {
        access_token: token,
        address: address,
    }


    const ANGLE = 10;
    const TIME = 100;
    const EASING = Easing.elastic(1.5);


    const rotation = useSharedValue<number>(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotateZ: `${rotation.value}deg` }],
    }));

    const handlePress = () => {
        rotation.value = withSequence(
            // deviate left to start from -ANGLE
            withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
            // wobble between -ANGLE and ANGLE 7 times
            withRepeat(
                withTiming(ANGLE, {
                    duration: TIME,
                    easing: EASING,
                }),
                7,
                true
            ),
            // go back to 0 at the end
            withTiming(0, { duration: TIME / 2, easing: EASING })
        );
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(placeOrder(value)).unwrap();
                console.log('response in orderScreen --> ', response);
                let a: string = response.user_msg;
                console.log('a', a);
                setData(a);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);


    return (

        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <View style={styles.subCon}>
                        <Image source={require('../../../assets/images/tick.png')} style={styles.img} />
                    </View>
                    <View>
                        <Text  style={styles.textCon} onPress={() => handlePress()}>{data}</Text>
                    </View>
                </View>
            )}
            {isError && <Text style={{ color: 'red' }}>Error placing order. Please try again.</Text>}
        </View>

    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
    },
    subCon: {
        height: '50%',
        width: '50%',
        
    },
    img : {
        height: 200,
        width : 200
    },
    textCon : {
        marginTop : 100,
        fontSize : 30
    }
})
