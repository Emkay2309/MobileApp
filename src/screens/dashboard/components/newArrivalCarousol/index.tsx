import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import NewArrivalCard from '../newArrivalCard';
import { AppDispatch } from '../../../../redux/store/store';
import { getCategoryList } from '../../../../redux/slicers/productSlice/actions';
import { ICategory, IProduct } from '../../../../redux/slicers/productSlice/type';

const NewArrivalCarousal: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(
          getCategoryList({ product_category_id: 1, limit: 10, page: 1 })
        );

        const categories = unwrapResult(resultAction) as ICategory;

        if (categories.data && categories.data.length > 0) {
          setData(categories.data);
        } else {
          console.warn('No data found');
        }
      } catch (error) {
        console.error('Failed to fetch category list:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.contentContainer}
          snapToAlignment="center"
          decelerationRate="fast"
          pagingEnabled
        >
          {data.map((item) => (
            <View key={item.id} style={styles.cardContainer}>
              <NewArrivalCard item={item} />
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>No new arrivals available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginRight: 30, // To simulate the separator width
  },
});

export default NewArrivalCarousal;
