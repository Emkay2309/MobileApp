
import { InputModeOptions, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';

interface IGenericInput {
    placeholder: string;
    maxLength: number;
    inputMode: InputModeOptions | undefined;
    onChangeText: (text: string) => void;
    icon: string;
    value: string | undefined;
    disabled?: boolean;
}



export default function CustomInput({
    placeholder,
    maxLength,
    inputMode,
    onChangeText,
    icon,
    disabled,
    value,
}: IGenericInput) {
    const [focus, setFocus] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={[styles.container]}>
            <TextInput
                mode="outlined"
                label={
                    <>
                        <Text style={{ fontFamily: 'Gilroy-Regular' }}>{placeholder}</Text>
                    </>
                }
                contentStyle={styles.content}
                outlineStyle={styles.outline}
                left={
                    <TextInput.Icon
                        icon={icon}
                    />
                }
                right={
                    placeholder === 'Password' ||
                        placeholder === 'Confirm Password' ||
                        placeholder === 'Old Password' ? (
                        <TextInput.Icon
                            onPress={() => setIsVisible(!isVisible)}
                            icon={isVisible ? 'eye' : 'eye-off'}
                            
                        />
                    ) : null
                }
                style={styles.inputStyle}
                maxLength={maxLength}
                
                inputMode={inputMode}
                secureTextEntry={
                    !isVisible &&
                        (placeholder === 'Password' ||
                            placeholder === 'Confirm Password' ||
                            placeholder === 'Old Password')
                        ? true
                        : false
                }
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={onChangeText }
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
                disabled={disabled}
                theme={{ colors: { background: 'white' } }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Gilroy-Bold',
    },
    inputStyle: {
        fontSize: 16,
        width: '100%',
        color: 'black',
    },
    outline: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.3,
    },
    content: {
        fontFamily: 'Gilroy-Regular',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
    },
});
