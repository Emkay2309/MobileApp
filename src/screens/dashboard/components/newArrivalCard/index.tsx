import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../../../components/customButton/CustomButton';
import { IProduct } from '../../../../redux/slicers/productSlice/type';
import images from './images/images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/type';

interface NewArrivalCardProps {
  item: IProduct;
}

const NewArrivalCard: React.FC<NewArrivalCardProps> = ({ item }) => {

  
  const handleButtonPress = () => {
    // Handle button press logic
  };
  
  const id = item.id-1;
  const imageSource = images[id%10];
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'NewArrivalCard'>>();
  const navigateToProductDetail = (id: number) => {
    navigation.navigate('ProductDetail', {
      product_id: item.id,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigateToProductDetail(id)} >
      <View style={styles.main}>
        <View style={styles.tags}>
          <View style={styles.new}>
            <Text style={styles.newText}>New</Text>
          </View>
          <TouchableOpacity style={styles.heartCon}>
            <MaterialCommunityIcons name="cards-heart-outline" color="black" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.btnCon}>
          <CustomButton
            text="Shop Now"
            onPress={handleButtonPress}
            height={50}
            width={202}
            backgroundColor="black"
            textColor="white"
          />
        </View>
      </View>
      <View style={{marginLeft : 10}}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>$ {item.cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewArrivalCard;

const styles = StyleSheet.create({
  container: {
    height: 412,
    width: 231,
    
  },
  main: {
    backgroundColor: '#F3F5F7',
    height: 308,
    width: 231,
    
    borderRadius : 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
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
  image: {
    width: 150,
    height: 150,
  },
  btnCon: {
    alignItems: 'center',
    marginTop: 10,
  },
  productName: {
    marginTop: 8,
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
