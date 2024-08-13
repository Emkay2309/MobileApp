import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listCon : {
        marginTop : 50
    },
    container : {
        flex : 1,
    },
    cardContainer: {
        marginBottom: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#fff',
    },
    itemContainer: {
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#fff',
        flexDirection : 'row',
        width : '100%'
    },
    image: {
        width: '30%',
        height: 100,
        resizeMode: 'contain',
        marginTop : 30,
        marginLeft : 20
    },
    infoContainer: {
        padding: 15,
        alignItems: 'center',
        width : '70%'
    },
    productName: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 18,
        color: '#888',
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#FF69B4',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

