import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScheduleScreen({ regName, selectedCity, onNext }: any) {
  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>Расписание занятий</Text>
      <Text style={styles.subtitle}>{`Студент: ${regName || 'Аян'} | Город: ${selectedCity}`}</Text>

      <View style={styles.cardItem}>
        <Text style={styles.cardTitle}>📚 09:00 — React Native разработка</Text>
        <Text style={styles.cardDesc}>Аудитория 402 • Лекция</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.cardTitle}>💻 11:00 — Базы данных и SQL</Text>
        <Text style={styles.cardDesc}>Лабораторная работа • Корпус Б</Text>
      </View>

      <View style={styles.cardItem}>
        <Text style={styles.cardTitle}>🎨 14:00 — UI/UX Дизайн интерфейсов</Text>
        <Text style={styles.cardDesc}>Практическое занятие</Text>
      </View>

      <TouchableOpacity style={styles.buttonPrimary} onPress={onNext}>
        <Text style={styles.buttonText}>Перейти к домашним заданиям</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContent: { flex: 1 },
  title: { fontSize: 22, fontWeight: '700', color: '#000000', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#8E8E93', textAlign: 'center', lineHeight: 18, marginBottom: 28 },
  cardItem: { backgroundColor: '#F5F5F7', padding: 16, borderRadius: 12, marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#000000', marginBottom: 4 },
  cardDesc: { fontSize: 13, color: '#8E8E93' },
  buttonPrimary: { height: 52, backgroundColor: '#A100FF', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 8, marginBottom: 20 },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
});