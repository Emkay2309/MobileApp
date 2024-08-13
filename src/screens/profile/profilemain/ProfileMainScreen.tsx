import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store/store';
import { getUserAccountDetails } from '../../../redux/slicers/authSlice/actions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ProfileMainScreenNavigationProp } from '../../../navigation/type';
import {styles} from './style'

const ProfileMainScreen = ({navigation} : ProfileMainScreenNavigationProp) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    const accessToken = user?.data?.access_token;

    useEffect(() => {
        if (!user) {
            dispatch(getUserAccountDetails(accessToken));
        }
    }, [user, accessToken, dispatch]);

    const handleEdit = () => {
        navigation.navigate('Profile');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.pic} onPress={() => { }}>
                {user?.data?.profile_pic ? (
                    <Image source={{ uri: user?.data?.profile_pic }} style={styles.profileImage} />
                ) : (
                    <View style={styles.defaultPic}>
                        {user?.data?.gender === 'male' ? (
                            <Fontisto name="male" color={'black'} size={100} />
                        ) : (
                            <Fontisto name="female" color={'black'} size={100} />
                        )}
                    </View>
                )}
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>First Name:</Text>
                    <Text style={styles.infoText}>{user?.data?.first_name}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Last Name:</Text>
                    <Text style={styles.infoText}>{user?.data?.last_name}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Email:</Text>
                    <Text style={styles.infoText}>{user?.data?.email}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Gender:</Text>
                    <Text style={styles.infoText}>{user?.data?.gender}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Date of Birth:</Text>
                    <Text style={styles.infoText}>{user?.data?.dob}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Phone Number:</Text>
                    <Text style={styles.infoText}>{user?.data?.phone_no}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={()=>handleEdit()}>
                <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};



export default ProfileMainScreen;
