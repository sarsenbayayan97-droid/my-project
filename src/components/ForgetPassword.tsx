import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ForgetPasswordScreen({ loginPhone, setLoginPhone, onNext }: any) {
  const isValid = loginPhone.trim() !== '';

  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>Восстановление пароля</Text>
      <Text style={styles.subtitle}>Введите свой номер телефона, чтобы восстановить пароль</Text>

      <TextInput
        style={styles.input}
        value={loginPhone}
        onChangeText={setLoginPhone}
        keyboardType="phone-pad"
        placeholder="Номер телефона"
        placeholderTextColor="#AAA9B2"
        autoCapitalize="none"
      />

      <TouchableOpacity 
        style={[styles.buttonPrimary, !isValid && styles.buttonDisabled]} 
        disabled={!isValid}
        onPress={onNext}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContent: { flex: 1 },
  title: { fontSize: 22, fontWeight: '700', color: '#000000', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#8E8E93', textAlign: 'center', lineHeight: 18, marginBottom: 28 },
  input: { height: 52, backgroundColor: '#F5F5F7', borderRadius: 12, paddingHorizontal: 16, fontSize: 15, color: '#000000', marginBottom: 12 },
  buttonPrimary: { height: 52, backgroundColor: '#A100FF', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 8, marginBottom: 20 },
  buttonDisabled: { backgroundColor: '#D1B3E0' },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
});
