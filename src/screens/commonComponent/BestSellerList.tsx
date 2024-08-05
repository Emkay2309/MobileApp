import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppDispatch } from '../../redux/store/store';
import { ICategory, IProduct } from '../../redux/slicers/productSlice/type';
import { useDispatch } from 'react-redux';
import { getCategoryList } from '../../redux/slicers/productSlice/actions';
import { unwrapResult } from '@reduxjs/toolkit';
import ItemCard from './ItemCard';

const BestSellerList = () => {
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
      {data.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </View>
  );
};

export default BestSellerList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});
