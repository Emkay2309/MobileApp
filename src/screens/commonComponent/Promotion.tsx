import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Timer from './Timer'
import CustomButton from '../../components/customButton/CustomButton'

const Promotion = () => {
    const handleButtonPress = ()=> {
        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.promotionText}>Promotion</Text>
            <Text style={styles.hurryText}>Hurry up! 40%  OFF</Text>
            <Text style={styles.subText}>Thousands of decors are waiting for you...</Text>

            <View>
                <Text style={styles.offerText}>Offer expires in : </Text>
                <Timer />
                <CustomButton
                    text="Shopping Now"
                    onPress={handleButtonPress}
                    height={60}
                    width={240}
                    backgroundColor="black"
                    textColor="white"
                />
            </View>
        </View>
    )
}

export default Promotion

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 171, 0, 0.55)',
        height: 400,
        padding: 32,
    },
    promotionText: {
        color: '#377DFF',
        fontWeight: '700',
        fontSize: 20,
    },
    hurryText: {
        color: 'black',
        fontWeight: '800',
        fontSize: 37,
        marginTop: 20,
    },
    main: {

    },
    mainText: {

    },
    subText: {
        fontWeight: '300',
        color: 'black',
        fontSize: 16,
    },
    offerText: {
        marginTop: 40,
        fontWeight: '500',
        color: 'black',
        fontSize: 20,
    }
})