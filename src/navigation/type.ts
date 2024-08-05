import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MainStackNavigator: undefined;
  Onboard: undefined;
  Signup: undefined;
  TabNav: undefined;
  Home: undefined;
  Cart: undefined;
  Login: undefined;

  Dashboard : undefined;

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

  HomeNavigator: undefined;
  CartNavigator: undefined;
  ProfileNavigator: undefined;
  DrawerNavigator : undefined;

  ForgotPassword: undefined;
  
  ChangePassword: undefined;
  UpdateDetails: undefined;
  Profile: undefined;
  OrderList: undefined;
  OrderDetail: {order_id: number; created: string};
  Address: undefined;
  AddAddress: {id: string};
  Payment: {id: string};
};

export type OnboardScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Onboard'
>;

export type SignupScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Signup'
>;

export type ForgotPasswordScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
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