import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, FormControl, Flex } from 'native-base';

import SingUpInput from '../components/SingUpInput';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function SignUpPage({ navigation }) {
  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const goSignIn = () => {
    navigation.navigate('SignInPage');
  };
  const doSignUp = () => {
    //회원가입 버튼을 클릭했을 때 실행되는 함수
    if (nickName === '') {
      setNickNameError('닉네임을 입력해주세요');
      return false;
    } else {
      setNickNameError('');
    }
    if (email === '') {
      setEmailError('이메일을 입력해주세요');
      return false;
    } else {
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('비밀번호를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }
    if (passwordConfirm === '') {
      setPasswordConfirmError('비밀번호 확인을 입력해주세요');
      return false;
    } else {
      setPasswordConfirmError('');
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다');
      return false;
    } else {
      setPasswordConfirmError('');
    }
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
        <SingUpInput
          type={'NickName'}
          title={'닉네임'}
          error={nickNameError}
          setFunc={setNickName}
          typeE={'email'}
          titleE={'이메일'}
          errorE={emailError}
          setFuncE={setEmail}
          typeP={'password'}
          titleP={'비밀번호'}
          errorP={passwordError}
          setFuncP={setPassword}
          typePC={'passwordConfirm'}
          titlePC={'비밀번호확인'}
          errorPC={passwordConfirmError}
          setFuncPC={setPasswordConfirm}
        />
      </FormControl>
      <TouchableOpacity style={styles.login} onPress={doSignUp}>
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
