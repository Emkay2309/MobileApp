import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { CategoryScreenNavigationProp } from '../../navigation/type';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { getCategoryList } from '../../redux/slicers/productSlice/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/customButton/CustomButton';
import { styles } from './style'

const CategoryList = ({ navigation, route }: CategoryScreenNavigationProp) => {
    const { category } = useAppSelector(state => state.product);
    const dispatch = useAppDispatch();
    const { product_category_id, categoryName } = route.params;
    console.log(route.params);

    useEffect(() => {
        dispatch(getCategoryList({ product_category_id }));
    }, [dispatch, product_category_id]);

    const navigateToProductDetail = (product_id: number) => {
        navigation.navigate('ProductDetail', {
            product_id,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <MaterialCommunityIcons
                name='backburger'
                size={28}
                style={{
                    padding: 12,
                    position: 'absolute',
                    top: 22,
                    left: 2,
                    zIndex: 2
                }}
                color={'#333'}
                onPress={() => navigation.goBack()}
            />

            <FlatList
                style={styles.listCon}
                data={category?.data}
                contentContainerStyle={{ padding: 20 }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigateToProductDetail(item.id)} style={styles.cardContainer}>
                            <View style={styles.itemContainer}>
                                <Image source={{ uri: item.product_images }} style={styles.image} />
                                <View style={styles.infoContainer}>
            
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productPrice}>${item.cost}</Text>
                                    <TouchableOpacity style={styles.addButton} onPress={() => { }}>
                                        <Text style={styles.addButtonText}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id.toString()}
            />

        </SafeAreaView >
    );
};



export default CategoryList;

