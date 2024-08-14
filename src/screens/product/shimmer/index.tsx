import React from 'react';
import { View, Text } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { styles } from './style';

const ShimmerProductDetail = () => {
  return (
    <View style={styles.container}>
      <ShimmerPlaceHolder style={styles.backIcon} />
      <ShimmerPlaceHolder style={styles.headingText} />
      
      <View style={styles.imageContainer}>
        <ShimmerPlaceHolder style={styles.chevronIcon} />
        <ShimmerPlaceHolder style={styles.productImage} />
        <ShimmerPlaceHolder style={styles.chevronIcon} />
      </View>
      
      <ShimmerPlaceHolder style={styles.productDescription} />
      
      <View style={styles.productDetails}>
        <ShimmerPlaceHolder style={styles.productCost} />
        <ShimmerPlaceHolder style={styles.productProducer} />
        <View style={styles.ratingContainer}>
          <ShimmerPlaceHolder style={styles.starIcon} />
          <ShimmerPlaceHolder style={styles.productRating} />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <ShimmerPlaceHolder style={styles.addToCartButton} />
        <ShimmerPlaceHolder style={styles.buyNowButton} />
      </View>
    </View>
  );
};

export default ShimmerProductDetail;


