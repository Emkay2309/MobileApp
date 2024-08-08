// import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import { Image } from 'react-native' 
// import {request, PERMISSIONS, Permission} from 'react-native-permissions';

// interface imageType {
//   img : string
// }

// const ProfileMainScreen = () => {
//   const [getimage , setImage] = useState('');
//   const [perm , setPerm] = useState<boolean>(false);

//   const askPermission = (permissions : Permission)=> {
//     request(permissions).then((result) => {
      
//     }).catch((err)=> {
//       console.log(err);
//     });
//   }
  
//   const handleImage = () => {
//     if(!perm) {
//       setPerm(true);
//       askPermission;
//     }
//     ImagePicker.openPicker({
//       width:400,
//       height:400,
//       cropping:true,
//     }).then((image) => {
//       setImage(image.path);
//     }).catch((err) => {
//       console.log(err);
//     })
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 30 }}>ProfileMainScreen</Text>

//       <TouchableOpacity style={{flex : 1}} 
//       onPress={handleImage}>
//         <Image source={getimage != '' ? { uri : getimage} : require('../../assets/images/pic.png')} height={200} width={200} style={styles.image} />
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.btn}
//         onPress={() => { 
//           if(Platform.OS === 'ios') {
//             askPermission(PERMISSIONS.IOS.MEDIA_LIBRARY)
//           }
//           else {
//             askPermission(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
//           }
//         }}
//       >
//         <Text style={styles.btnText}>get Permission</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.btn}
//         onPress={() => { }}
//       >
//         <Text style={styles.btnText}>Edit Profile</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default ProfileMainScreen

// const styles = StyleSheet.create({
//   container: {
//     // justifyContent : 'center',
//     alignItems: 'center',
//     flex: 1
//   },
//   image: {
//     borderRadius: 100,
//   },
//   btn: {
//     backgroundColor: 'lightpink',
//     padding: 5,
//     borderRadius: 10,
//     width: 300,
//     height: 50,
//     marginTop: 10,
//     alignSelf: 'center',
//     textAlign: 'center',
//     justifyContent: 'center',
//     marginBottom : 10
//   },
//   btnText: {
//     fontWeight: '500',
//     textAlign: 'center',
//     fontSize: 20
//   },
// })