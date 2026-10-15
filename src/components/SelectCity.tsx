import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CITIES = [
  'Алматы', 'Астана', 'Шымкент', 'Қарағанды', 'Ақтөбе', 
  'Тараз', 'Павлодар', 'Өскемен', 'Семей', 'Атырау', 
  'Қостанай', 'Қызылорда', 'Орал', 'Петропавл', 'Ақтау'
];

export default function SelectCityScreen({ selectedCity, setSelectedCity, onNext }: any) {
  const isValid = selectedCity !== '';

  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>Выберите город</Text>
      <Text style={styles.subtitle}>Заведения которые будут показываться вам, будут зависеть от вашего города.</Text>

      <ScrollView style={{ maxHeight: 320, marginBottom: 15 }}>
        {CITIES.map((city) => (
          <TouchableOpacity
            key={city}
            style={[
              styles.cityOption,
              selectedCity === city && styles.cityOptionSelected,
            ]}
            onPress={() => setSelectedCity(city)}
          >
            <Text style={[
              styles.cityText,
              selectedCity === city && styles.cityTextSelected,
            ]}>
              {city} {selectedCity === city ? '✓' : ''}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
  cityOption: { height: 52, backgroundColor: '#F5F5F7', borderRadius: 12, justifyContent: 'center', paddingHorizontal: 16, marginBottom: 10 },
  cityOptionSelected: { backgroundColor: '#F3E8FF', borderWidth: 1, borderColor: '#A100FF' },
  cityText: { fontSize: 15, color: '#000000' },
  cityTextSelected: { color: '#A100FF', fontWeight: '600' },
  buttonPrimary: { height: 52, backgroundColor: '#A100FF', borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 8, marginBottom: 20 },
  buttonDisabled: { backgroundColor: '#D1B3E0' },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
});