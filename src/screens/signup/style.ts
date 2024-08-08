import { StyleSheet } from "react-native";
import COLORS from "../../assets/colors";


export const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: COLORS.white,
      flex: 1,
    },
    heading: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    footer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom : 40
    },
    title: {
      color: COLORS.black,
      fontSize: 35,
      fontWeight: 'bold',
    },
    subtitle: {
      color: COLORS.grey,
      fontSize: 18,
    },
    inputContainer: {
      marginVertical: 1,
    },
    radContainer: {},
    registerText: {
      color: COLORS.black,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
    gradient: {
      flex: 1,
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 30,
      alignItems: 'center',
      height: 55,
      backgroundColor: '#574c5c',
      marginTop: 22,
      paddingHorizontal: 15,
      borderWidth: 0.5,
      borderRadius: 10,
      borderColor: 'white',
    },
    genderLabel: {
      color: COLORS.black,
      fontSize: 18,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: COLORS.black,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 5,
    },
    radioButtonSelected: {
      backgroundColor: COLORS.black,
    },
    radioButtonLabel: {
      color: COLORS.black,
      fontSize: 16,
    },
  });