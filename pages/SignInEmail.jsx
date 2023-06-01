import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, FormControl, Flex } from 'native-base';

import { TouchableOpacity } from 'react-native';

import SingInInput from '../components/SingInInput';

import { AntDesign } from '@expo/vector-icons';

export default function SignInEmail({ navigation }) {
  const goSignUpPage = () => {
    navigation.navigate('SignUpPage');
  };
  const goHome = () => {
    navigation.navigate('TabNavigator');
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#5197F2',
        height: 100,
      },
      headerTintColor: 'white',
      headerTitle: '',
      headerBackImage: () => <AntDesign name="left" size={24} color="white" />,
    });
  }, []);
  return (
    <View style={styles.container} pt={10}>
      <Text fontSize={40} fontFamily={'DancingScript-Bold'}>
        Welcome!
      </Text>
      <Text fontSize={10} color={'#797979'} mb={10} fontFamily={'SCDream5'}>
        로그인 해주세요
      </Text>
      <FormControl w={'80%'}>
        <SingInInput />
      </FormControl>
      <Text
        w={'80%'}
        color={'#797979'}
        textAlign={'right'}
        mt={3}
        fontSize={10}
        fontFamily={'SCDream5'}
      >
        비밀번호를 잊으셨나요?
      </Text>
      <TouchableOpacity style={styles.login} onPress={goHome}>
        <Text color={'#fff'} fontFamily={'SCDream7'}>
          Login
        </Text>
      </TouchableOpacity>
      <Text mt={8} color={'#797979'} fontFamily={'SCDream4'}>
        가입하신 적이 없나요?{' '}
        <Text color={'#5197F2'} underline onPress={goSignUpPage}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  login: {
    backgroundColor: '#5197F2',
    paddingHorizontal: 125,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 25,
  },
});
