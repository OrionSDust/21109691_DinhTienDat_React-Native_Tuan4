// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
  Alert,
} from 'react-native';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState('');
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);

  const generatePassword = () => {
    let chars = '';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumber) chars += '0123456789';
    if (includeSymbol) chars += '!@#$%^&*()_+';

    if (chars === '' || length <= 0) {
      Alert.alert('Lỗi', 'Vui lòng chọn ít nhất 1 loại ký tự và độ dài hợp lệ.');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <TextInput
        style={styles.passwordBox}
        editable={false}
        value={password}
      />

      <View style={styles.row}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length}
          onChangeText={(text) => setLength(Number(text))}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include lower case letters</Text>
        <CheckBox
          value={includeLower}
          onValueChange={setIncludeLower}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include upcase letters</Text>
        <CheckBox
          value={includeUpper}
          onValueChange={setIncludeUpper}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include number</Text>
        <CheckBox
          value={includeNumber}
          onValueChange={setIncludeNumber}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include special symbol</Text>
        <CheckBox
          value={includeSymbol}
          onValueChange={setIncludeSymbol}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2d62',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  passwordBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#1a1a40',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: 'white',
  },
  input: {
    width: 60,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#5c5c8a',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PasswordGenerator;
