// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// export default function SignUp({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         placeholderTextColor="#666"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         placeholderTextColor="#666"
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.signUpButton}>
//         <Text style={styles.signUpText}>Create Account</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text style={styles.goBackText}>Already have an account? Log In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
//   signUpButton: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   signUpText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   goBackText: {
//     marginTop: 20,
//     color: '#4CAF50',
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SignUp({ navigation }) {
  // States for Input Fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !company || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(`Welcome, ${username}! Your account has been created.`);
  };


  return (
    <View style={styles.root}>
      <View style={styles.rectangle1} />
    <Image source={require('../assets/Image/Plantify_no_background.png')} style={styles.headerImage} />
      <Text style={styles.title}>Sign Up</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#666"
        value={username}
        onChangeText={setUsername}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
      />

      {/* Company Input */}
      <TextInput
        style={styles.input}
        placeholder="Company"
        placeholderTextColor="#666"
        value={company}
        onChangeText={setCompany}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Navigate to Sign In */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.alreadyHaveAnAccount}>
          Already have an account? <Text style={{ color: 'green' }}>Sign In</Text>
        </Text>
      </TouchableOpacity>

      {/* Decorative Images */}
      {/* <Image source={require('../assets/Image/FB.png')} style={styles.vectorImage} />
      <Image source={require('../assets/Image/FB.png')} style={styles.vectorImage} />
      <Image source={require('../assets/Image/FB.png')} style={styles.vectorImage} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle1: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
    headerImage: {
        marginTop: 1,
        width: 420,
        height: 245,
        resizeMode: 'contain',
        backgroundColor: '#fff',
      },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '85%',
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '85%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  alreadyHaveAnAccount: {
    marginTop: 20,
    fontSize: 14,
    color: '#666',
  },
  vectorImage: {
    width: 100,
    height: 100,
    marginTop: 20,
    resizeMode: 'contain', 
  },
});
