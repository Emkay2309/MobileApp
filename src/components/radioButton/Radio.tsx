import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../assets/colors";


const RadioButton = ({ selected, onPress, label }: { selected: boolean; onPress: () => void; label: string }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.radioButtonContainer}>
            <View style={[styles.radioButton, selected && styles.radioButtonSelected]} />
            <Text style={styles.radioButtonLabel}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
};

export default  RadioButton

const styles =  StyleSheet.create( {
  container : {
    
  },
    genderLabel: {
        color: COLORS.black,
        fontSize: 16,
      },
      radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },

      radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
      },
      radioButtonSelected: {
        backgroundColor: COLORS.black,
      },
      radioButtonLabel: {
        color: COLORS.black,
        fontSize: 16,
      },
})