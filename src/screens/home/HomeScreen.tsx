import { Button, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { HomeScreenNavigationProp, RootStackParamList } from '../../navigation/type';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector } from '../../redux/store/store';
import { chairsIcon, sofasIcon, bedsIcon, tablesIcon } from '../../assets/images/caticons/icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carasoul from './components/Carasoul';

const imageData = [
  { id: 1, name: 'Table', icon: tablesIcon },
  { id: 2, name: 'Chairs', icon: chairsIcon },
  { id: 3, name: 'Sofa', icon: sofasIcon },
  { id: 4, name: 'Beds', icon: bedsIcon },
];

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const userData = useAppSelector(state => state.auth.userAccountDetails?.data);

  const handleNavigate = (
    product_category_id: number,
    categoryName: string,
  ) => {
    navigation.navigate('Category', {
      product_category_id,
      categoryName,
    });
  };

  const logout = async ()=> {
    await AsyncStorage.removeItem('access_token');
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#613338', '#613338', '#3D2749']} style={styles.gradient} >
        <View style={styles.heading}>
          <Text style={styles.headingText}>NeoStore</Text>
        </View>
        <Button title='logout' onPress={logout} />

        <View style={styles.carosolsContainer}>
          {imageData.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.imageContainer}
              onPress={() => handleNavigate(item.id, item.name)}
            >
              <Image source={item.icon} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{padding : 20}}>
          <Text style={styles.subHeadingText}>Trending furnitures</Text>
        </View>

          <Carasoul />

      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    width: '100%',
  },
  subHeadingText : {
    fontSize: 25,
    fontWeight: '700',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '700',
  },
  carosolsContainer: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    marginHorizontal: 5,
  },
  image: {
    width: 80, // Adjust the width as needed
    height: 80, // Adjust the height as needed
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
