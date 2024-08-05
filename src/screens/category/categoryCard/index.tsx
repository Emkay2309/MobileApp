import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/type';
import { CategoryItem } from '../categoryCarousal';

const dimensions = Dimensions.get('window');

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3D3D3',
        height: dimensions.height * 0.26,
        width: dimensions.width * 0.9,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    textCon: {
        flexDirection: 'column',
        gap: 2,
    },
    imgCon: {
        flex: 1,
        alignItems: 'flex-end',
        objectFit : 'contain'
    },
    image: {
        width: dimensions.width * 0.45,
        height: '100%',
        objectFit : 'contain'
    },
    imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginHorizontal: 10,
    objectFit : 'fill'
  },
    mainText: {
        fontSize: 34,
        color: 'black',
        fontWeight: '500',
    },
    subText: {
        fontWeight: '500',
        fontSize: 20,
        color: 'black',
    },
    line: {
        width: '100%',
        height: 1.5,
        backgroundColor: 'black',
    },
});
