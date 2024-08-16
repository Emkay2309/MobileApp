import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 10,
    },
    backBtn: {
        marginRight: 10,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'center',
    },
    itemContainer: {
        flexDirection: 'row',  
        alignItems: 'center',
        justifyContent: 'space-between', 
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
        flex: 1,  // Allows the text container to take available space
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
        height: 50,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 20,
    },
    removeBtn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 10,
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeText: {
        fontWeight: '300',
        fontSize: 15,
        color: '#333',
    },
});
