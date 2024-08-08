import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./type";
import Login from "../screens/login";
import ForgetPassword from "../screens/forget";
import Signup from "../screens/signup";


const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthNavigator