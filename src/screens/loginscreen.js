import * as React from 'react';

import{ useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MainScreen from './mainscreen';
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#b1eedf', padding: 20, margin:10}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'green', marginBottom: 20 }}>
        登入
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: 'green', marginBottom: 5 }}>
          用戶名
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: 'green', marginBottom: 5 }}>
          密碼
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}onPress={() => navigate(MainScreen)}>
          登入
        </Text>
        
      </TouchableOpacity>
      <Text style={{ fontSize: 16, color: 'green', marginTop: 20 }}>
        註冊
      </Text>
      <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>
        忘記密碼?
      </Text>
    </View>
  );
};

export default LoginScreen;