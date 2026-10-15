import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StudentProfileScreen({ regName, regPhone, selectedCity, onLogout }: any) {
  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>Личный кабинет студента</Text>
      <Text style={styles.subtitle}>Информация об успеваемости и аккаунте</Text>

      <View style={styles.profileBox}>
        <Text style={styles.profileText}>👨‍🎓 Студент: {regName || 'Аян'}</Text>
        <Text style={styles.profileText}>📱 Телефон: {regPhone || '+7 (...)'}</Text>
        <Text style={styles.profileText}>📍 Город: {selectedCity}</Text>
        <Text style={styles.profileText}>⭐️ GPA: 3.85 / 4.0</Text>
        <Text style={styles.profileText}>🎓 Курс: 2-й курс (ИТ факультет)</Text>
      </View>

      <TouchableOpacity style={styles.buttonPrimary} onPress={onLogout}>
        <Text style={styles.buttonText}>Выйти из аккаунта</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContent: { flex: 1 },
  title: { fontSize: 22, fontWeight: '700', color: '#000000', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#8E8E93', textAlign: 'center', lineHeight: 18, marginBottom: 28 },
  profileBox: { backgroundColor: '#F5F5F7', padding: 20, borderRadius: 16, marginBottom: 24, gap: 12 },
  profileText: { fontSize: 16, color: '#000000', fontWeight: '500' },
  buttonPrimary: { height: 52, backgroundColor: '#A100FF', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 8, marginBottom: 20 },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
});