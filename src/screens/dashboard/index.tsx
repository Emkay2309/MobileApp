import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { useNavigation } from '@react-navigation/native';
import { CartNavigatorScreenNavigationProp, DashboardNavigationProp, RootStackParamList } from '../../navigation/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutModal from './components/logoutModal';
import { styles } from './style'
import { getCartList } from '../../redux/slicers/cartSlice/actions';


const Dashboard = ({ navigation }: DashboardNavigationProp) => {
    // const navigation = useNavigation<CartNavigatorScreenNavigationProp['navigation']>();
    
    const dispatch = useDispatch<AppDispatch>();
    const accessToken = useSelector((state: RootState) => state.auth.user?.data?.access_token);
    

    const handleCart = () => {
        navigation.navigate('CartNavigator');
    }
    const { cart } = useSelector((state : RootState) => state.cart);
    let total = cart?.count;

    //console.log('cart : ', total);

    if (total === undefined) {
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
        await AsyncStorage.removeItem('alreadyLaunched');
        navigation.navigate('Login');
    }

    const [modalVisible, setModalVisible] = useState(false);

    const handleLogoutPress = () => {
        setModalVisible(true);
    };

    const confirmLogout = () => {
        setModalVisible(false);
        logout();
    };

    const translateY = useSharedValue(-300); // Initial position above the screen

    useEffect(() => {
        // Animate the image to the final position
        translateY.value = withSpring(0, {
            damping: 10,
            stiffness: 100,
        });

        if (accessToken) {
            dispatch(getCartList({ access_token: accessToken })).unwrap();
        }
    }, []);

    const scrollViewRef = useRef<ScrollView>(null);
    const [shopCategoryPosition, setShopCategoryPosition] = useState(0);
    const [homePosition, setHomePosition] = useState(0);

    const scrollToShopCategory = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: shopCategoryPosition, animated: true });
        }
    };

    const scrollToHome = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: homePosition, animated: true });
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View style={{ marginBottom: '20%' }}>

            {/** header */}
            <View >
                <View style={styles.headerContainer} onLayout={(event) => setHomePosition(event.nativeEvent.layout.y)}>
                    <View style={styles.leftHeader}>
                        <Text style={styles.headingText}>NeoSTORE</Text>
                    </View>

                    <View style={styles.rightHeader}>
                        <TouchableOpacity onPress={handleCart}>
                            <MaterialCommunityIcons name="cart" color={'black'} size={24} />
                        </TouchableOpacity>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartText}>{total}</Text>
                        </View>
                        <AntDesign name="logout" color={'black'} size={24} onPress={handleLogoutPress} style={styles.logout} />

                    </View>
                </View>

                <LogoutModal
                    visible={modalVisible}
                    onConfirm={confirmLogout}
                    onCancel={() => setModalVisible(false)}
                />
            </View>

            {/** heading partition */}
            <View style={{ width: '100%', height: 0.8, backgroundColor: 'black', }} />

            {/** Scrolling partition */}
            <ScrollView ref={scrollViewRef}>

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
                <View onLayout={(event) => setShopCategoryPosition(event.nativeEvent.layout.y)} style={{ padding: 16 }}>
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
                    <Footer navigation={navigation} onShopPress={scrollToShopCategory} onHomePress={scrollToHome} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard

