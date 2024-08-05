import React, { useRef } from 'react';
import { View, ImageBackground,Animated, StyleSheet,Dimensions} from 'react-native';
import { s1, s2, s3, s4 } from '../../../assets/images/Carosols/carosol'

const { width } = Dimensions.get('window');
const images = [s1, s2, s3, s4];

const Carasoul = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.itemContainer}>
            <ImageBackground source={item} style={styles.image} />
        </View>
    );
    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
            />
        </View>
    );
};

export default Carasoul;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 1
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContainer: {
        width,
        height: 300, // Adjust the height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
