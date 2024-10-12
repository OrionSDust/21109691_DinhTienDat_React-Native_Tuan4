import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      {/* Ô nhập Tên */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/user.png' }}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#000"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Ô nhập Mật khẩu */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/lock.png' }}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          value={password}
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Image
            source={{
              uri: isPasswordVisible
                ? 'https://img.icons8.com/ios-filled/50/000000/visible.png'
                : 'https://img.icons8.com/ios-filled/50/000000/invisible.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Nút Login */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Link Quên mật khẩu */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#E1C16E',
    width: '100%',
    height: 50,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#000',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  forgotPasswordText: {
    marginTop: 20,
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
