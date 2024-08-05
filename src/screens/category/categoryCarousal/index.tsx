import { StyleSheet, View } from 'react-native';
import React from 'react';
import CategoryCard from '../categoryCard';
import { ImageRequireSource } from 'react-native';

// Define the interface for a category item
export interface CategoryItem {
    id: number;
    name: string;
    image: ImageRequireSource;
}


export const CategoryData: CategoryItem[] = [
    {
        id: 1,
        name: "Tables",
        image: require('../../../screens/dashboard/components/newArrivalCard/images/c6.png'),
    },
    {
        id: 2,
        name: "Chairs",
        image: require('../../../screens/dashboard/components/newArrivalCard/images/c2.png'),
    },
    {
        id: 4,
        name: "Cupboards",
        image: require('../../../screens/dashboard/components/newArrivalCard/images/c3.png'),
    },
    {
        id: 3,
        name: "Sofa",
        image: require('../../../screens/dashboard/components/newArrivalCard/images/c10.png'),
    },
];

const CategoryCarousal = () => {
    return (
        <View style={styles.container}>
            {CategoryData.map((item) => (
                <View key={item.id} style={styles.cardContainer}>
                    <CategoryCard item={item} />
                </View>
            ))}
        </View>
    );
};

export default CategoryCarousal;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
    },
    cardContainer: {
        marginRight: 10,
        marginBottom: 30,
    },
});


