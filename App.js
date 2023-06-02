import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

import { NativeBaseProvider, extendTheme } from 'native-base';

// expo-font 라이브러리를 사용하여 폰트를 로드합니다.
import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
// extend the theme
export const theme = extendTheme({ config });

import Loading from './pages/Loading';

import Hospital from './data/AnimalhospiceData'
import testData from './data/testData'

export default function App() {
  const [ready, setReady] = useState(false);
  const [hospital, setHospital] = useState([]);
  const [data, setData] = useState([]);
  
  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        'DancingScript-Bold': require('./assets/fonts/DancingScript-Bold.ttf'),
        'SUIT-SemiBold': require('./assets/fonts/SUIT-SemiBold.ttf'),
        'SUIT-Bold': require('./assets/fonts/SUIT-Bold.ttf'),
        'SUIT-Medium': require('./assets/fonts/SUIT-Medium.ttf'),
        'SUIT-Regular': require('./assets/fonts/SUIT-Regular.ttf'),
        SCDream4: require('./assets/fonts/SCDream4.otf'),
        SCDream5: require('./assets/fonts/SCDream5.otf'),
        SCDream7: require('./assets/fonts/SCDream7.otf'),
        SCDream9: require('./assets/fonts/SCDream9.otf'),
        // ...Ionicons.font,
      });
      setReady(true);
    }, 3000);
  };

  useEffect(() => {
    loadFont();
    setHospital(Hospital)
    setData(testData);
  }, []);

  return ready ? (
    <NativeBaseProvider>
      <StatusBar backgroundColor="black" style="light" />
      <NavigationContainer>
        <StackNavigator hospital={hospital} data={data} />
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    <NativeBaseProvider>
      <Loading />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
