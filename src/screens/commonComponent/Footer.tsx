import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FooterNavigationProp } from '../../navigation/type'


interface FooterProps extends FooterNavigationProp {
    onShopPress: () => void;
    onHomePress: () => void;
}

const Footer = ({ navigation, onShopPress, onHomePress }: FooterProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>NeoSTORE</Text>

            <View style={{ width: '30%', height: 0.8, backgroundColor: 'white', }} />

            <Text style={styles.subText}>Furniture Store</Text>
            <Text style={styles.subText} onPress={() => {
                onHomePress();
            }}>Home</Text>
            <Text style={styles.subText} onPress={() => navigation.navigate('OrderList')}>Orders</Text>
            <Text style={styles.subText} onPress={() => {
                onShopPress(); // Scroll to Shop Category section
            }}>Shop</Text>
            <Text style={styles.subText}>Contact</Text>
            <View style={{ width: '100%', height: 0.8, backgroundColor: 'white', }} />

            <View style={styles.icons}>
                <MaterialCommunityIcons name="facebook" color={'white'} size={30} />
                <MaterialCommunityIcons name="instagram" color={'white'} size={30} />
                <MaterialCommunityIcons name="twitter" color={'white'} size={30} />
            </View>

            <View style={styles.policy}>
                <Text style={styles.subsText}>Privacy Policy</Text>
                <Text style={styles.subsText}>Terms of use</Text>
            </View>

            <Text style={styles.subsText} >
                Copyright
                <MaterialCommunityIcons name="copyright" color={'white'} size={20} />
                2024 Neostore.
            </Text>
            <Text style={styles.subsText}> All right reserved</Text>


        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141718',
        height: 645,
        alignItems: 'center',
        padding: 40,
        gap: 20
    },
    headingText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 40,
    },
    line: {
        width: '30%',
        color: 'white',
        alignItems: 'center',
        height: 1,

    },
    subText: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 25,

    },
    icons: {
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'space-between',
        marginTop: 20,
    },
    policy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 30,

    },
    subsText: {
        color: '#FFFFFF',
        fontWeight: '300',
        fontSize: 20,
    }


})