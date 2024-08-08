import { StyleSheet } from "react-native";
import COLORS from "../../assets/colors";

export const styles = StyleSheet.create({
    inputs: {
        marginTop: 20
    },
    safeArea: {
        flex: 1,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        justifyContent: 'center',
        //backgroundColor : 'black',
        flex : 1,
    },
    footer: {
        //marginTop: 140,
        //justifyContent: 'center',
        alignItems: 'center',
        // alignContent : 'flex-end',
        
        
    },

    title: {
        color: COLORS.black,
        fontSize: 50,
        fontWeight: 'bold',
    },
    subtitle: {
        color: COLORS.grey,
        fontSize: 18,
        marginVertical: 10,
    },
    inputContainer: {
        marginVertical: 20,
        // backgroundColor : 'red',
        flex : 1,
        //height : '100%',
        justifyContent : 'space-between'
    },
    registerText: {
        color: COLORS.black,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    gradient: {
        flex: 1
    },
});
