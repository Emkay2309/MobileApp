import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import Dashboard from "../screens/dashboard";
import ProfileScreen from "../screens/profile";
import OrderScreen from "../screens/order/order";
import CartScreen from "../screens/cart";
import AddressList from "../screens/address/addressList";
import BottomNavigator from "./BottomNavigator";
import CategoryList from "../screens/category";
import ProductScreen from "../screens/product";
import ProfileMainScreen from "../screens/profile/profilemain/ProfileMainScreen";
import OrderList from "../screens/order/orderList";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="BottomNavigator" screenOptions={{ headerShown: false }} >

            {/**Stacks used by profile */}
            <Stack.Screen name='ProfileMain' component={ProfileMainScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />


            {/**Stacks used by cart */}
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='AddressList' component={AddressList} />
            <Stack.Screen name='OrderScreen' component={OrderScreen} />



            {/**Stacks used by Home */}
            <Stack.Screen name='Dashboard' component={Dashboard} />
            <Stack.Screen name='Category' component={CategoryList} />
            <Stack.Screen name='ProductDetail' component={ProductScreen} />
            <Stack.Screen name='OrderList' component={OrderList} />

            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
    )
}

export default AppNavigator

