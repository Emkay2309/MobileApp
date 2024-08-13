import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',

    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 60,
        borderColor: '#ddd',
        borderWidth: 2,
    },
    pic: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    defaultPic: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        width: '100%',
        paddingHorizontal: 16,
    },
    infoBox: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 1,
        width: '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        //alignItems : 'center'
        
    },
    infoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    infoText: {
        fontSize: 16,
        color: '#333',
    },
    editButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width : 320,
        marginTop: 20,

    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
});
