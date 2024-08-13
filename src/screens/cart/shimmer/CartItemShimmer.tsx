import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { View } from 'react-native';
import {styles} from './style'

const CartItemShimmer = () => {
  return (
    <View style={styles.shimmerItem}>
      <ShimmerPlaceHolder style={styles.productImageShimmer} />
      <View style={styles.itemDetailsShimmer}>
        <ShimmerPlaceHolder style={styles.productNameShimmer} />
        <ShimmerPlaceHolder style={styles.productPriceShimmer} />
        <View style={styles.quantityContainerShimmer}>
          <ShimmerPlaceHolder style={styles.quantityBtnShimmer} />
          <ShimmerPlaceHolder style={styles.quantityTextShimmer} />
          <ShimmerPlaceHolder style={styles.quantityBtnShimmer} />
        </View>
      </View>
    </View>
  );
};


export default CartItemShimmer;
