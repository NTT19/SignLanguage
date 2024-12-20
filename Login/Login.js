// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Login() {
//   return (
//     <View style={styles.container}>
//       <Text>Login Page</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default function LogIn({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter your username and password.');
    } else {
      Alert.alert('Success', `Welcome, ${username}!`);
      // Navigate to a different page (if needed)
       navigation.navigate('Display');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Redirecting to password recovery...');
    // thêm phân trang nếu cần sau
  };

  const handleSignUp = () => {
    //Alert.alert('Sign Up', 'Redirecting to sign-up page...');
    navigation.navigate('SignUp'); 
  };

  return (
  //   <LinearGradient
  //   colors={['#FFFFFF', '#56CC3F', '#3F673D', '#35613C']} 
  //   locations={[0.44, 0.50, 0.75, 1]} 
  //   style={styles.rectangle1} 
  // >
    <View style={styles.root}>

      <View style={styles.rectangle1} />
    <View style={styles.rectangle10} />
      <View style={styles.rectangle2} />
  
      <Image source={require('../assets/Image/Plantify_no_background.png')} style={styles.headerImage} />
      <View style={styles.rectangle3}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(103, 101, 101, 0.7)"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.rectangle4}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(103, 101, 101, 0.7)"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
            <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.segment} onPress={handleLogin}>
        <View style={styles.rectangle22}>
          <Text style={styles.logIn}>LOG IN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
      <Text style={styles.dontHaveAnAccountSignUp}>
  <Text style={styles.blackText}>Don't have an account? </Text>
  <Text style={styles.greenText}>Sign Up</Text>
</Text>
      </TouchableOpacity>
      <View style={styles.group2}>
        <Text style={styles.orLogInWith}>Or log in with</Text>
      </View>
      <View style={styles.group1}>
        <TouchableOpacity style={styles.facebook2}>
          <Image source={require('../assets/Image/FB.png')} style={styles.socialIcon} />
          <Text style={styles.facebook}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google2}>
          <Image source={require('../assets/Image/Google.png')} style={styles.socialIcon} />
          <Text style={styles.google}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
    //  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle1: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  //  backgroundColor: '#ecf0f1',
    backgroundColor: '#FFF',
  },
  rectangle10: {
    position: 'absolute',
    bottom: 480 ,
    width: '100%',
    height: '1%',
    //backgroundColor: '#E0E0E0',
    backgroundColor: 'black',
  },
  rectangle2: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '40%',
    //backgroundColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  headerImage: {
    width: 420,
    height: 295,
    resizeMode: 'contain',

  },
  rectangle3: {
    marginTop: 20,
    width: '85%',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(3, 225, 255, 1)',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    fontSize: 14,
    color: '#333',
  },
  rectangle4: {
    marginTop: 20,
    width: '85%',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(3, 225, 255, 1)',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  segment: {
    marginTop: 20,
    width: '85%',
    alignItems: 'center',
  
  },
  rectangle22: {
    width: '100%',
    borderRadius: 24,
    backgroundColor: 'rgba(4, 245, 97, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  logIn: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#000',
    textDecorationLine: 'underline',
  },
  dontHaveAnAccountSignUp: {
    marginTop: 10,
    textAlign: 'center', 
    fontSize: 16,
    fontWeight: '500', 
  },
  blackText: {
    color: 'black', 
  },
  greenText: {
    color: 'rgba(89, 255, 0, 1)', 
    fontWeight: 'bold', 
  },
  orLogInWith: {
    marginTop: 20,
    color: '#000',
    fontSize: 16,
  },
  group2: {
    marginTop: 10,
  },
  facebook2: {
    marginTop: 20,
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(24, 119, 242, 1)',
    paddingVertical: 10,
    borderRadius: 20,
  },
  facebook: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 20,
  },
  google2: {
    marginTop: 10,
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderRadius: 20,
  },
  google: {
    color: '#555',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 35,
  },
  socialIcon: {
    width: 30,
    height: 30,
    left:10,
    resizeMode: 'contain',
  },
});