import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        //marginTop : '10%'
    },
    introContainer: {
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        padding: 40
    },
    leftHeader: {
        marginLeft: 20,
        flexDirection: 'row',
        gap: 10,
        
    },
    rightHeader: {
        flexDirection: 'row',
        gap: 8,
        marginRight: 20,
        marginTop : 10
    },
    headingText: {
        fontWeight: '500',
        fontSize: 26,
        color: 'black',
        marginTop : 10
    },
    cartLogo: {
        height: 20,
        width: 20,
    },
    cartCount: {
        marginTop: 2,
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 50
    },
    cartText: {
        fontFamily: 'poppins',
        fontWeight: '700',
        color: '#FFAB00',
        textAlign: 'center'
    },
    introImg: {
        backgroundColor: 'rgba(255, 171, 0, 0.60)',
        alignItems: 'center'
    },
    image: {
        width: 450,
        height: 300,
        resizeMode: 'cover',
    },
    mainText: {
        fontSize: 40,
        color: 'black',
        marginLeft: 15
    },
    subText: {
        fontSize: 16,
        color: 'black',
    },
    itemsCon: {

    },
    offerCon: {
        backgroundColor: 'black',
        height: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    offerText: {
        color: 'white',
        fontWeight: 500,

    }
})