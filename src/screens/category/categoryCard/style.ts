import { Dimensions, StyleSheet } from "react-native";


const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
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
        //width : '50%'
    },
    imgCon: {
        flex: 1,
        alignItems: 'flex-end',
        objectFit : 'contain',
        // width : '50%'
    },
    image: {
        width: dimensions.width * 0.45,
        height: '100%',
        objectFit : 'contain',
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
