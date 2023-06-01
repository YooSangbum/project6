import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, FormControl, Flex } from 'native-base';

import SingUpInput from '../components/SingUpInput';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function SignUpPage({ navigation }) {
  const goProfile = () => {
    navigation.navigate('TabNavigator');
  };
  const goSignIn = () => {
    navigation.navigate('SignInPage');
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#F7F7F9',
        height: 100,
      },
      headerTintColor: 'white',
      headerTitle: '',
      headerBackImage: () => <AntDesign name="left" size={24} color="#000" />,
    });
  }, []);
  return (
    <View style={styles.container} pt={10}>
      <Text fontSize={40} fontFamily={'DancingScript-Bold'}>
        Welcom!
      </Text>
      <Text fontSize={12} color={'#797979'} mb={10} fontFamily={'SCDream5'}>
        새로운 계정을 만들어주세요
      </Text>
      <FormControl w={'80%'}>
        <SingUpInput />
      </FormControl>
      <TouchableOpacity style={styles.login} onPress={goProfile}>
        <Text color={'#F7F7F9'} fontWeight={700}>
          Login
        </Text>
      </TouchableOpacity>

      <Text mt={10} color={'#797979'} fontFamily={'SCDream4'}>
        이미 계정이 있나요?{' '}
        <Text color={'#EC7542'} underline onPress={goSignIn}>
          Sign In
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
    backgroundColor: '#EC7542',
    paddingHorizontal: 125,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 25,
  },
});
