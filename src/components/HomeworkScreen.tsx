import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeworkScreen({ onNext }: any) {
  const [task1Done, setTask1Done] = useState(false);
  const [task2Done, setTask2Done] = useState(false);

  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>Домашние задания</Text>
      <Text style={styles.subtitle}>Отмечайте выполненные проекты и лабораторные</Text>

      <TouchableOpacity 
        style={[styles.taskCard, task1Done && styles.taskDone]} 
        onPress={() => setTask1Done(!task1Done)}
      >
        <Text style={[styles.cardTitle, task1Done && styles.textDone]}>
          {task1Done ? '✅' : '⏳'} Лабораторная №1 по React Native
        </Text>
        <Text style={styles.cardDesc}>Создать 10 экранов аутентификации</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.taskCard, task2Done && styles.taskDone]} 
        onPress={() => setTask2Done(!task2Done)}
      >
        <Text style={[styles.cardTitle, task2Done && styles.textDone]}>
          {task2Done ? '✅' : '⏳'} Проект по базам данных
        </Text>
        <Text style={styles.cardDesc}>Написать SQL скрипты для таблиц</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonPrimary} onPress={onNext}>
        <Text style={styles.buttonText}>Перейти в личный кабинет</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContent: { flex: 1 },
  title: { fontSize: 22, fontWeight: '700', color: '#000000', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#8E8E93', textAlign: 'center', lineHeight: 18, marginBottom: 28 },
  taskCard: { backgroundColor: '#F5F5F7', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: 'transparent' },
  taskDone: { backgroundColor: '#F3E8FF', borderColor: '#A100FF' },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#000000', marginBottom: 4 },
  textDone: { textDecorationLine: 'line-through', color: '#A100FF' },
  cardDesc: { fontSize: 13, color: '#8E8E93' },
  buttonPrimary: { height: 52, backgroundColor: '#A100FF', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 8, marginBottom: 20 },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
});