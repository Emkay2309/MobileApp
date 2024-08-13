import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductDetailScreenNavigationProp } from '../../navigation/type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store/store';
import { getProduct, setProductRating } from '../../redux/slicers/productSlice/actions';
import { addToCart, getCartList } from '../../redux/slicers/cartSlice/actions';
import { useSelector } from 'react-redux';
import { styles } from './style'

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
  }, [dispatch, product_id , ]);

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
      dispatch(getCartList({ access_token: accessToken }));
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

  const handleStarPress =  async (star: number) => {
    const response = await dispatch(setProductRating({
      product_id: product.id,
      rating: star
    }));

    console.log(response);
  }

  const renderStars = () => {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating - fullStars >= 0.5;
    const totalStars = 5;

    const stars = [];



    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <MaterialCommunityIcons key={`full-${i}`} name="star" size={24} color="#FFD700" />
        </TouchableOpacity>
      )
    };



    for (let i = fullStars + (halfStar ? 1 : 0); i < totalStars; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <MaterialCommunityIcons key={`empty-${i}`} name="star-outline" size={24} color="#FFD700" />
        </TouchableOpacity>
      )
    };

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
          <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart()}>
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
