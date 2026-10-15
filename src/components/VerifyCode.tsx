import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VerifyCodeScreen({ loginPhone, otp, handleOtpChange, handleOtpKeyPress, onNext }: any) {
  const isValid = otp.every((digit: string) => digit !== '');

  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>Подтвердите номер</Text>
      <Text style={styles.subtitle}>{`Мы только что отправили код на\n${loginPhone || '+7 (...)'}`}</Text>

      <View style={styles.otpRow}>
        {otp.map((digit: string, index: number) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            onKeyPress={(event) => handleOtpKeyPress(event, index)}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
            autoCapitalize="none"
          />
        ))}
      </View>

      <TouchableOpacity 
        style={[styles.buttonPrimary, !isValid && styles.buttonDisabled]} 
        disabled={!isValid}
        onPress={onNext}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>

      <Pressable>
        <Text style={styles.footerLink}>Отправить код еще раз</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContent: { flex: 1 },
  title: { fontSize: 22, fontWeight: '700', color: '#000000', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#8E8E93', textAlign: 'center', lineHeight: 18, marginBottom: 28 },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 28 },
  otpBox: { width: 58, height: 58, backgroundColor: '#F5F5F7', borderRadius: 12, fontSize: 22, fontWeight: '700', color: '#000000', textAlign: 'center' },
  buttonPrimary: { height: 52, backgroundColor: '#A100FF', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 8, marginBottom: 20 },
  buttonDisabled: { backgroundColor: '#D1B3E0' },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  footerLink: { color: '#A100FF', fontSize: 13, fontWeight: '600', textAlign: 'center' },
});