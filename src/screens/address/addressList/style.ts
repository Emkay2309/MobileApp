import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
        alignItems : 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    textContainer: {
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    address: {
        fontSize: 14,
        color: '#777777',
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 10,
        width: 300,
        height : 50,
        marginTop: 10,
        alignSelf : 'center',
        textAlign : 'center',
        justifyContent : 'center',
   
        
    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize : 20
    },
    backIcon : {

    },
});
