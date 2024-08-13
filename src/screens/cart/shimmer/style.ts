import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    shimmerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 8,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 2,
      height: 150,
    },
    productImageShimmer: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 15,
    },
    itemDetailsShimmer: {
      flex: 1,
    },
    productNameShimmer: {
      width: '50%',
      height: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    productPriceShimmer: {
      width: '30%',
      height: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    quantityContainerShimmer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    quantityBtnShimmer: {
      width: 30,
      height: 30,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    quantityTextShimmer: {
      width: 40,
      height: 20,
      borderRadius: 5,
    },
  });