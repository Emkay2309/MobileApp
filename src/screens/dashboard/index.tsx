import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import CustomButton from '../../components/customButton/CustomButton';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import NewArrivalCard from './components/newArrivalCard';
import NewArrivalCarousal from './components/newArrivalCarousol';
import CategoryCard from '../category/categoryCard';
import CategoryCarousal from '../category/categoryCarousal';
import Promotion from '../commonComponent/Promotion';
import Support from '../commonComponent/Support';
import Footer from '../commonComponent/Footer';
import BestSellerList from '../commonComponent/BestSellerList';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { useNavigation } from '@react-navigation/native';
import { CartNavigatorScreenNavigationProp, RootStackParamList } from '../../navigation/type';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dashboard = () => {
    const navigation = useNavigation<CartNavigatorScreenNavigationProp['navigation']>();

    const handleCart = () => {
        navigation.navigate('CartNavigator');
    }
    const { cart } = useSelector((state: RootState) => state.cart);
    let total = cart?.count;
    if(total === undefined) {
        total = 0;
    }
    const handleButtonPress = () => {
        console.log('go to shopping list')
    }
    const [showOffer, setshowOffer] = useState<boolean>(true);

    const handleOffer = () => {
        setshowOffer(false);
        console.log('offer')
    }

    const logout = async () => {
        await AsyncStorage.removeItem('access_token');
        navigation.navigate('Login');
    }

    const translateY = useSharedValue(-300); // Initial position above the screen

    useEffect(() => {
        // Animate the image to the final position
        translateY.value = withSpring(0, {
            damping: 10,
            stiffness: 100,
        });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View style={{ marginBottom: '20%' }}>

            {/** header */}
            <View style={styles.headerContainer}>

                <View style={styles.leftHeader}>
                    {/* <TouchableOpacity>
                        <MaterialCommunityIcons name="menu" color={'black'} size={24} />
                    </TouchableOpacity> */}
                    <Text style={styles.headingText}>NeoSTORE</Text>
                    <Button title='logout' color={'blue'} onPress={()=>{
                        logout();
                    }} />
                </View>

                <View style={styles.rightHeader}>
                    <TouchableOpacity onPress={() => handleCart()}>
                        <MaterialCommunityIcons name="cart" color={'black'} size={24} />
                    </TouchableOpacity>
                    <View style={styles.cartCount}><Text style={styles.cartText}>{total}</Text></View>
                </View>
            </View>

            {/** heading partition */}
            <View style={{ width: '100%', height: 0.8, backgroundColor: 'black', }} />

            {/** Scrolling partition */}
            <ScrollView>

                {/** Intro Text  and button*/}
                <View style={styles.introContainer}>
                    <Text style={styles.mainText}>Have a look at</Text>
                    <Text style={styles.mainText}>the <Text style={{ color: '#377DFF' }}>amazing</Text></Text>
                    <Text style={styles.mainText}>home decor.</Text>
                    <Text style={styles.subText}>Experience furniture like never before</Text>

                    <CustomButton
                        text="Shopping Now"
                        onPress={handleButtonPress}
                        height={60}
                        width={240}
                        backgroundColor="black"
                        textColor="white"
                    />
                </View>

                {/** Intro image with animation */}
                <View style={styles.introImg}>
                    <Animated.Image
                        style={[styles.image, animatedStyle]}
                        source={require('../../assets/images/sofa.png')}
                        resizeMode="contain"
                    />
                </View>


                {/** New Arrival cards carousals */}
                <View style={{ padding: 32 }}>
                    <Text style={styles.mainText}>New Arrivals</Text>
                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <NewArrivalCarousal />
                    </View>
                </View>

                {/** Shop cateogories  */}
                <View style={{ padding: 16 }}>
                    <Text style={styles.mainText}>Shop Cateogory</Text>
                    <View style={{ marginTop: 10, padding: 4 }}>
                        <CategoryCarousal />
                    </View>
                </View>

                {/** Best seller section */}
                <View style={{ padding: 16, marginTop: 30 }}>
                    <Text style={styles.mainText}>Best Seller</Text>
                    <View style={styles.itemsCon}>
                        <BestSellerList />
                    </View>
                </View>

                {/** Promotion Section */}
                <View style={{ marginTop: 40 }}>
                    <Promotion />
                </View>


                {/** Support Section */}
                <View style={{ marginTop: 40 }}>
                    <Support />
                </View>


                {/** Footer Section */}
                <View style={{ marginTop: 70 }}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        //marginTop : '10%'
    },
    introContainer: {
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        padding: 40
    },
    leftHeader: {
        marginLeft: 20,
        flexDirection: 'row',
        gap: 10,

    },
    rightHeader: {
        flexDirection: 'row',
        gap: 8,
        marginRight: 20
    },
    headingText: {
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
        marginTop : 10
    },
    cartLogo: {
        height: 20,
        width: 20,
    },
    cartCount: {
        marginTop: 2,
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 50
    },
    cartText: {
        fontFamily: 'poppins',
        fontWeight: '700',
        color: '#FFAB00',
        textAlign: 'center'
    },
    introImg: {
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
        alignItems: 'center'
    },
    image: {
        width: 450,
        height: 300,
        resizeMode: 'cover',
    },
    mainText: {
        fontSize: 40,
        color: 'black',
        marginLeft: 15
    },
    subText: {
        fontSize: 16,
        color: 'black',
    },
    itemsCon: {

    },
    offerCon: {
        backgroundColor: 'black',
        height: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    offerText: {
        color: 'white',
        fontWeight: 500,

    }
})