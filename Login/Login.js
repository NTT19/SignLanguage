
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { auth } from '../Firebase-connect/FirebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu.');
      return;
    }

    try {
      // Đăng nhập với Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      Alert.alert('Thành công', `Chào mừng, ${user.email}!`);
      

      navigation.navigate('HomeV1');
    } catch (error) {
      Alert.alert('Lỗi', 'Email hoặc mật khẩu không đúng.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Quên mật khẩu', 'Chuyển hướng đến trang khôi phục mật khẩu.');
    // navigation.navigate('ForgotPassword'); 
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
        <Text style={styles.title}>Smart Language</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="user@example.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>
          Chưa có tài khoản?{' '}
          <Text style={styles.signup} onPress={handleSignUp}>
            Đăng ký
          </Text>
        </Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#007BFF',
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 14,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  signup: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  facebookButton: {
    flex: 1,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginRight: 10,
    borderRadius: 8,
  },
  googleButton: {
    flex: 1,
    backgroundColor: '#db4a39',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginLeft: 10,
    borderRadius: 8,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
