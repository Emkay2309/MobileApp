import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 2,
    },
    mainCon: {
        flex: 1,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    heading: {
        fontSize: 28,
        color: 'black',
        marginLeft: 10,  // Space between the icon and text
    },
    container: {
        margin: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    orderId: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    category: {
        color: '#888',
        fontSize: 20,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: '40%',
        height: '100%',
        
    },
    details: {
        flex: 1 / 2,
        marginRight: 30
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    productId: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    quantity: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },
    total: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    separator: {
        marginTop: 10,
        height: 1,
        backgroundColor: '#ddd',
    },
});
