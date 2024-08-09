import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  