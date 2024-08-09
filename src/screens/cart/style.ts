import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: '#f5f5f5',
      marginTop : 10
    },
    scrollContainer: {
      paddingBottom: 100,
    },
    nullCon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nullText: {
      fontSize: 30,
    },
    cartItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 8,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 2,
      gap: 70
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 15,
      objectFit: 'contain',
    },
    itemDetails: {
      flex: 1,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 16,
      color: '#333',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    quantityBtn: {
      backgroundColor: '#e0e0e0',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    quantityBtnText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    quantityText: {
      marginHorizontal: 10,
      fontSize: 16,
    },
    totalContainer: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      right: 10,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: 'grey',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 20,
      width : '100%',
      
    },
    totalText: {
      color: 'white',
      fontSize: 18,
    },
    btn: {
      backgroundColor: 'lightpink',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
    },
    btnText: {
      color: 'white',
      fontWeight: 'bold',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });