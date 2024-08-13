import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/store/store';
import { getUserAccountDetails, updateDetails } from '../../redux/slicers/authSlice/actions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ProfileScreenNavigationProp } from '../../navigation/type';
import {styles} from './style'

const ProfileScreen = ({navigation} : ProfileScreenNavigationProp) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const accessToken = user?.data?.access_token;
  const [firstName, setFirstName] = useState(user?.data?.first_name || '');
  const [lastName, setLastName] = useState(user?.data?.last_name || '');
  const [email, setEmail] = useState(user?.data?.email || '');
  const [dob, setDob] = useState(user?.data?.dob || '');
  const [phoneNo, setPhoneNo] = useState(user?.data?.phone_no || '');
  const [profilePic, setProfilePic] = useState(user?.data?.profile_pic || '');
  const [gender, setGender] = useState(user?.data?.gender || '');

  useEffect(() => {
    if (!user) {
      dispatch(getUserAccountDetails(accessToken));
    }
  }, [user, accessToken, dispatch]);

  const handleUpdate = () => {
    const updatedUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      dob,
      phone_no: phoneNo,
      profile_pic: profilePic,
      access_token: accessToken
    };
    dispatch(updateDetails(updatedUser));
    navigation.navigate('ProfileMain');
  };

  console.log('user : ' , user);

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.pic} onPress={() => { }}>
            {profilePic ? (
              <Image source={{ uri: profilePic }} style={styles.pic} />
            ) : (
              <View style={styles.defaultPic}>
                {gender === 'male' ? (
                  <Fontisto name="male" color={'black'} size={100} />
                ) : (
                  <Fontisto name="female" color={'black'} size={100} />
                )}
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.data}>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={gender}
              onChangeText={setGender}
              placeholder="Gender"
            />
            <TextInput
              style={styles.input}
              value={dob}
              onChangeText={setDob}
              placeholder="Date of Birth"
            />
            <TextInput
              style={styles.input}
              value={phoneNo}
              onChangeText={setPhoneNo}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
