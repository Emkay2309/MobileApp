import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductDetailScreenNavigationProp } from '../../navigation/type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store/store';
import { getProduct } from '../../redux/slicers/productSlice/actions';
import { addToCart, getCartList } from '../../redux/slicers/cartSlice/actions';
import { useSelector } from 'react-redux';

const ProductScreen = ({
  navigation,
  route,
}: ProductDetailScreenNavigationProp) => {
  const dispatch = useAppDispatch();
  const { product_id } = route.params;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    dispatch(getProduct({ product_id }));
  }, [dispatch, product_id]);

  const productResponse = useAppSelector(state => state.product.productData);
  const product = productResponse?.data;
  

  const accessToken = useSelector((state: RootState) => state.auth.user?.data?.access_token);

  async function handleAddToCart() {
    try {
      console.log('add to cart start')
      await dispatch(
        addToCart({
          access_token: accessToken,
          product_id: product_id,
          quantity: 1,
        }),
      ).unwrap();
      setAddedToCart(true);
      dispatch(getCartList({access_token: accessToken}));
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);

      console.log('add cart done');
      navigation.navigate('CartNavigator');
    } catch (error) {
      console.log(error);
      setAddedToCart(false);

    }
  }


  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const handleNextImage = () => {
    if (currentImageIndex < product.product_images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const renderStars = () => {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating - fullStars >= 0.5;
    const totalStars = 5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<MaterialCommunityIcons key={`full-${i}`} name="star" size={24} color="#FFD700" />);
    }

    if (halfStar) {
      stars.push(<MaterialCommunityIcons key="half" name="star-half-full" size={24} color="#FFD700" />);
    }

    for (let i = fullStars + (halfStar ? 1 : 0); i < totalStars; i++) {
      stars.push(<MaterialCommunityIcons key={`empty-${i}`} name="star-outline" size={24} color="#FFD700" />);
    }

    return stars;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="backburger"
          size={28}
          style={styles.backIcon}
          color={'#333'}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headingText}>{product.name}</Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handlePrevImage} disabled={currentImageIndex === 0}>
            <MaterialCommunityIcons name="chevron-left" size={36} color={currentImageIndex === 0 ? '#ccc' : '#333'} />
          </TouchableOpacity>
          <Image
            source={{ uri: product.product_images[currentImageIndex]?.image }} // Assuming `img.image` is the URL for each image
            style={styles.productImage}
          />
          <TouchableOpacity onPress={handleNextImage} disabled={currentImageIndex === product.product_images.length - 1}>
            <MaterialCommunityIcons name="chevron-right" size={36} color={currentImageIndex === product.product_images.length - 1 ? '#ccc' : '#333'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.productDetails}>
          <Text style={styles.productCost}>Price: ${product.cost}</Text>
          <Text style={styles.productProducer}>Producer: {product.producer}</Text>
          <View style={styles.ratingContainer}>
            {renderStars()}
            <Text style={styles.productRating}> ({product.rating} / 5)</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={()=>handleAddToCart()}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 2,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginHorizontal: 10,
    objectFit : 'fill'
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  productDetails: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  productCost: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  productProducer: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  productRating: {
    fontSize: 16,
    color: '#555',
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});
