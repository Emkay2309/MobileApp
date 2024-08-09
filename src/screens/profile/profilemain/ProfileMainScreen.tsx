import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { request, PERMISSIONS, Permission } from 'react-native-permissions';
import { ProfileMainScreenNavigationProp } from '../../../navigation/type';
import { useAppDispatch, useAppSelector } from '../../../redux/store/store';
import { getUserAccountDetails } from '../../../redux/slicers/authSlice/actions';

interface imageType {
    img: string
}

const ProfileMainScreen = ({ navigation }: ProfileMainScreenNavigationProp) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    const accessToken = user?.data?.access_token;
    useEffect(() => {
        if (!user) {
            dispatch(getUserAccountDetails(accessToken));
        }
    }, [user, accessToken, dispatch]);


    return (
        <View style={styles.container}>

            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { }}>
                {/* <Image source={getimage != '' ? { uri : getimage} : require('../../assets/images/pic.png')} height={200} width={200} style={styles.image} /> */}
            </TouchableOpacity>



            <TouchableOpacity style={styles.btn}
                onPress={() => {navigation.navigate('Profile') }}
            >
                <Text style={styles.btnText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileMainScreen

const styles = StyleSheet.create({
    container: {
        // justifyContent : 'center',
        alignItems: 'center',
        flex: 1
    },
    image: {
        borderRadius: 100,
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 10,
        width: 300,
        height: 50,
        marginTop: 10,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 20
    },
})