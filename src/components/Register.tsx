import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen({ regName, setRegName, regPhone, setRegPhone, regPassword, setRegPassword, onNext, onGoToLogin }: any) {
  const isValid = regName.trim() !== '' && regPhone.trim() !== '' && regPassword.trim() !== '';

  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.subtitle}>Создайте учетную запись, чтобы продолжить!</Text>

      <TextInput
        style={styles.input}
        value={regName}
        onChangeText={setRegName}
        placeholder="Ваше имя"
        placeholderTextColor="#AAA9B2"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        value={regPhone}
        onChangeText={setRegPhone}
        keyboardType="phone-pad"
        placeholder="Номер телефона"
        placeholderTextColor="#AAA9B2"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        value={regPassword}
        onChangeText={setRegPassword}
        secureTextEntry
        placeholder="Пароль"
        placeholderTextColor="#AAA9B2"
        autoCapitalize="none"
      />

      <TouchableOpacity 
        style={[styles.buttonPrimary, !isValid && styles.buttonDisabled]} 
        disabled={!isValid}
        onPress={onNext}
      >
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>У вас есть аккаунт? </Text>
        <Pressable onPress={onGoToLogin}>
          <Text style={styles.footerLink}>Войти</Text>
        </Pressable>
      </View>
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
  footerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 12 },
  footerText: { color: '#8E8E93', fontSize: 13 },
  footerLink: { color: '#A100FF', fontSize: 13, fontWeight: '600' },
});