import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import { IProduct } from '../redux/slicers/productSlice/type';

export type RootStackParamList = {
  MainStackNavigator: undefined;
  Onboard: undefined;
  Signup: undefined;
  TabNav: undefined;
  Home: undefined;
  Cart: undefined;
  Login: undefined;

  Dashboard : undefined;

  //checking with new navigations
  BottomNavigator : undefined;
  AppNavigator : undefined;
  AuthNavigator : undefined;
  CheckNavigator : undefined;

  CategoryList : {
    product_category_id: number | undefined;
    categoryName: string | undefined;
  }

  Category: {
    product_category_id: number | undefined;
    categoryName: string | undefined;
  };

  ProductDetail: {
    product_id : number; 
  };

  OrderList: undefined;

  OrderScreen: {
    address : string;
  }

  AddressList : undefined;

  NewArrivalCard : {item : IProduct};

  HomeNavigator: undefined;
  CartNavigator: undefined;
  ProfileNavigator: undefined;
  DrawerNavigator : undefined;

  ForgotPassword: undefined;
  
  ChangePassword: undefined;
  UpdateDetails: undefined;
  Profile: undefined;
  ProfileMain : undefined;
  
  OrderDetail: {order_id: number; created: string};
  Address: undefined;
  AddAddress: {id: string};
  Payment: {id: string};

  Footer : undefined;


};

//check navigation types
export type BottomTabNavScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavigator'
>;

export type AuthNavScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavigator'
>;

export type AppNavScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavigator'
>;

export type CheckNavScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'BottomNavigator'
>;
//check navigation types

export type OnboardScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Onboard'
>;

export type DashboardNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

export type NewArrivalCardNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'NewArrivalCard'
>;

export type SignupScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Signup'
>;

export type ForgotPasswordScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

export type AddressListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'AddressList'
>;


export type TabNavScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'TabNav'
>;

export type DrawerNavScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'DrawerNavigator'
>;



export type MainStackNavigatorScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'MainStackNavigator'
>;
export type HomeNavigatorScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'HomeNavigator'
>;

export type CartNavigatorScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'CartNavigator'
>;

export type ProfileNavigatorScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ProfileNavigator'
>;

export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type CartScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Cart'
>;

export type LoginScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type CategoryScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Category'
>;

export type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'Category'>;

export type ProductDetailScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetail' 
>;

export type ProfileScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

export type ProfileMainScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ProfileMain'
>;



export type ChangePasswordScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ChangePassword'
>;
export type UpdateDetailsScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'UpdateDetails'
>;

export type OrderListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'OrderList'
>;

export type OrderScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'OrderScreen'
>;

export type OrderDetailScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'OrderDetail'
>;
export type AddressScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Address'
>;
export type AddAddressScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'AddAddress'
>;
export type PaymentScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Payment'
>;

export type FooterNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};