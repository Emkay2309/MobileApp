import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IProduct } from '../../redux/slicers/productSlice/type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';

const ItemCard = ({ id, name, cost, product_images }: IProduct) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToProductDetail = (product_id: number) => {
    console.log('go')
    navigation.navigate('ProductDetail', {
      product_id,
    });
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.main}>
        <View style={styles.tags}>
          <View style={styles.new}>
            <Text style={styles.newText}>Hot</Text>
          </View>
          <TouchableOpacity style={styles.heartCon}>
            <MaterialCommunityIcons name="cards-heart-outline" color="black" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product_images }} style={styles.image} />
        </View>
        <View style={styles.btnCon}>
          <CustomButton
            text="Shop Now"
            onPress={() => navigateToProductDetail(id)}
            height={50}
            width={120}
            backgroundColor="black"
            textColor="white"
          />
        </View>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>$ {cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 10,
  },
  main: {
    backgroundColor: '#D3D3D3',
    height: 230,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  new: {
    backgroundColor: 'white',
    width: 67,
    height: 24,
    borderRadius: 5,
    justifyContent: 'center',
  },
  newText: {
    textAlign: 'center',
    color: 'black',
  },
  heartCon: {
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btnCon: {
    alignItems: 'center',
    marginTop: 10,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
});
