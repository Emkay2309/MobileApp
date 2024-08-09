import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/type';
import { CategoryItem } from '../categoryCarousal';
import {styles} from './style'



interface CategoryCardProps {
    item: CategoryItem;
}

const CategoryCard = ({ item }: CategoryCardProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Category'>>();

    return (
        <View style={styles.container}>

            <View style={styles.textCon}>
                <Text style={styles.mainText}>{item.name}</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', marginTop: 12, gap: 10 }}
                    onPress={() =>
                        navigation.navigate('Category', {
                            product_category_id: item.id,
                            categoryName: item.name,
                        })
                    }
                >
                    <Text style={styles.subText}>Collections</Text>
                    <Ionicons name="arrow-forward" color={'black'} size={32} />
                </TouchableOpacity>
                <View style={styles.line} />
            </View>

            <View style={styles.imgCon}>
                <Image source={item.image} style={styles.image} resizeMode="contain" />
            </View>

        </View>
    );
};

export default CategoryCard;

