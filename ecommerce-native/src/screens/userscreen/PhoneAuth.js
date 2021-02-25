// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import firebase from 'react-native-firebase';

// const PhoneAuth = () => {
//   const [phone, setPhone] = useState('');
//   const [confirmResult, setConfirmResult] = useState(null);
//   const [verificationCode, setVerificationCode] = useState('');
//   const [userId, setUserId] = useState('');

//   const validatePhoneNumber = () => {
//     var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
//     return regexp.test(phone);
//   };

//   const handleSendCode = () => {
//     // Request to send OTP
//     if (validatePhoneNumber()) {
//       firebase
//         .auth()
//         .signInWithPhoneNumber(phone)
//         .then((confirmResult) => {
//           setConfirmResult(confirmResult);
//         })
//         .catch((error) => {
//           alert(error.message);

//           console.log(error);
//         });
//     } else {
//       alert('Invalid Phone Number');
//     }
//   };
//   const changePhoneNumber = () => {
//     // this.setState({ confirmResult: null, verificationCode: '' })
//     setConfirmResult(null);
//     setVerificationCode('');
//   };
//   const handleVerifyCode = () => {
//     // Request for OTP verification
//     // const { confirmResult, verificationCode } = this.state
//     if (verificationCode.length == 6) {
//       confirmResult
//         .confirm(verificationCode)
//         .then((user) => {
//           //   this.setState({ userId: user.uid })
//           setUserId(user.uid);
//           alert(`Verified! ${user.uid}`);
//         })
//         .catch((error) => {
//           alert(error.message);
//           console.log(error);
//         });
//     } else {
//       alert('Please enter a 6 digit OTP code.');
//     }
//   };

//   const renderConfirmationCodeView = () => {
//     return (
//       <View style={styles.verificationView}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Verification code"
//           placeholderTextColor="#eee"
//           value={verificationCode}
//           keyboardType="numeric"
//           onChangeText={(verificationCode) => {
//             setVerificationCode(verificationCode);
//           }}
//           maxLength={6}
//         />
//         <TouchableOpacity
//           style={[styles.themeButton, {marginTop: 20}]}
//           onPress={handleVerifyCode}>
//           <Text style={styles.themeButtonTitle}>Verify Code</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={[styles.container, {backgroundColor: '#333'}]}>
//       <View style={styles.page}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Phone Number with country code"
//           placeholderTextColor="#eee"
//           keyboardType="phone-pad"
//           value={phone}
//           onChangeText={(phone) => {
//             setPhone(phone);
//           }}
//           maxLength={15}
//           editable={confirmResult ? false : true}
//         />

//         <TouchableOpacity
//           style={[styles.themeButton, {marginTop: 20}]}
//           onPress={confirmResult ? changePhoneNumber : handleSendCode}>
//           <Text style={styles.themeButtonTitle}>
//             {confirmResult ? 'Change Phone Number' : 'Send Code'}
//           </Text>
//         </TouchableOpacity>

//         {confirmResult ? renderConfirmationCodeView() : null}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default PhoneAuth;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#aaa',
//   },
//   page: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textInput: {
//     marginTop: 20,
//     width: '90%',
//     height: 40,
//     borderColor: '#555',
//     borderWidth: 2,
//     borderRadius: 5,
//     paddingLeft: 10,
//     color: '#fff',
//     fontSize: 16,
//   },
//   themeButton: {
//     width: '90%',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#888',
//     borderColor: '#555',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
//   themeButtonTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   verificationView: {
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 50,
//   },
// });
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      console.log('masuk');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+62 877-838-70115')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default PhoneSignIn;
