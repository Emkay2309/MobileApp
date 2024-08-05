import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface SupportItem {
    id: number;
    icon: string;
    title: string;
    description: string;
    subDescription: string;
}

export const CategoryData: SupportItem[] = [
    {
        id: 1,
        icon: "truck-outline",
        title: "Free Shipping",
        description: "Order",
        subDescription: "Above 200",
    },
    {
        id: 2,
        icon: "bag-carry-on",
        title: "Money Back",
        description: '30 Days',
        subDescription: "Guarantee",
    },
    {
        id: 3,
        icon: "lock-plus-outline",
        title: "Secure Payments",
        description: 'Secured',
        subDescription: "By Stripe",
    },
    {
        id: 4,
        icon: "phone",
        title: "24/7 Support",
        description: 'Phone and',
        subDescription: "Email support",
    },
];

const Support = () => {
    return (
        <View style={styles.container}>
            {CategoryData.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <MaterialCommunityIcons name={item.icon} size={48} color="black" />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.subDescription}>{item.subDescription}</Text>
                </View>
            ))}
        </View>
    );
};

export default Support;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,

    },
    itemContainer: {
        width: '48%', 
        backgroundColor: '#D3D3D3',
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        height : 230
    },
    title: {
        fontSize: 22,
        fontWeight: '300',
        marginTop: 30,
        color : '#141718',
    },
    description: {
        fontSize: 14,
        color: '#6C7275',
        marginTop : 10, 
    },
    subDescription: {
        fontSize: 14,
        color: 'grey',
    },
});
