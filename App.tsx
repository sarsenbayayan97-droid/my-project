import React, { useRef, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import ForgetPasswordScreen from './src/components/ForgetPassword';
import HomeworkScreen from './src/components/HomeworkScreen';
import LoginScreen from './src/components/login';
import RegisterScreen from './src/components/Register';
import ResetPasswordScreen from './src/components/ResetPassword'; // Файл аты дәл осылай (ResetPassword.tsx) болуы тиіс
import ScheduleScreen from './src/components/ScheduleScreen';
import SelectCityScreen from './src/components/SelectCity';
import StudentProfileScreen from './src/components/StudentProfileScreen';
import VerifyCodeScreen from './src/components/VerifyCode';

type Screen = 
  | 'login' 
  | 'forgot_phone' 
  | 'forgot_otp' 
  | 'reset_password'
  | 'register_form'
  | 'select_city'
  | 'schedule'
  | 'homework'
  | 'student_profile';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  const [loginPhone, setLoginPhone] = useState('');
  const [password, setPassword] = useState('');
  
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  
  const [selectedCity, setSelectedCity] = useState('');

  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const handleOtpChange = (text: string, index: number) => {
    const cleanedText = text.replace(/\D/g, '').slice(-1);
    const newOtp = [...otp];
    newOtp[index] = cleanedText;
    setOtp(newOtp);
  };

  const handleOtpKeyPress = (event: any, index: number) => {
    const key = event.nativeEvent.key;
    if (key === 'Backspace' && !otp[index] && index > 0) {}
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          {screen !== 'login' && (
            <Pressable
              style={styles.backButton}
              onPress={() => {
                if (screen === 'forgot_phone') setScreen('login');
                if (screen === 'forgot_otp') setScreen('forgot_phone');
                if (screen === 'reset_password') setScreen('forgot_otp');
                if (screen === 'register_form') setScreen('login');
                if (screen === 'select_city') setScreen('register_form');
                if (screen === 'schedule') setScreen('login');
                if (screen === 'homework') setScreen('schedule');
                if (screen === 'student_profile') setScreen('homework');
              }}
            >
              <Text style={styles.backButtonText}>←</Text>
            </Pressable>
          )}

          {screen === 'login' && (
            <LoginScreen
              loginPhone={loginPhone}
              setLoginPhone={setLoginPhone}
              password={password}
              setPassword={setPassword}
              onLogin={() => setScreen('schedule')}
              onGoToForgot={() => setScreen('forgot_phone')}
              onGoToRegister={() => setScreen('register_form')}
            />
          )}

          {screen === 'forgot_phone' && (
            <ForgetPasswordScreen
              loginPhone={loginPhone}
              setLoginPhone={setLoginPhone}
              onNext={() => setScreen('forgot_otp')}
            />
          )}

          {screen === 'forgot_otp' && (
            <VerifyCodeScreen
              loginPhone={loginPhone}
              otp={otp}
              handleOtpChange={handleOtpChange}
              handleOtpKeyPress={handleOtpKeyPress}
              onNext={() => setScreen('reset_password')}
            />
          )}

          {screen === 'reset_password' && (
            <ResetPasswordScreen
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              onNext={() => setScreen('login')}
            />
          )}

          {screen === 'register_form' && (
            <RegisterScreen
              regName={regName}
              setRegName={setRegName}
              regPhone={regPhone}
              setRegPhone={setRegPhone}
              regPassword={regPassword}
              setRegPassword={setRegPassword}
              onNext={() => setScreen('select_city')}
              onGoToLogin={() => setScreen('login')}
            />
          )}

          {screen === 'select_city' && (
            <SelectCityScreen
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              onNext={() => setScreen('schedule')}
            />
          )}

          {screen === 'schedule' && (
            <ScheduleScreen
              regName={regName}
              selectedCity={selectedCity}
              onNext={() => setScreen('homework')}
            />
          )}

          {screen === 'homework' && (
            <HomeworkScreen
              onNext={() => setScreen('student_profile')}
            />
          )}

          {screen === 'student_profile' && (
            <StudentProfileScreen
              regName={regName}
              regPhone={regPhone}
              selectedCity={selectedCity}
              onLogout={() => setScreen('login')}
            />
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 12, paddingBottom: 20 },
  backButton: { width: 40, height: 40, justifyContent: 'center', marginBottom: 12 },
  backButtonText: { fontSize: 24, color: '#000000' },
});