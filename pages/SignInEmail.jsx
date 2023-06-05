import { useEffect, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Text, View, FormControl, Flex } from 'native-base';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SingInInput from '../components/SingInInput';

import { AntDesign } from '@expo/vector-icons';

import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignInEmail({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  //로딩 완료 여부
  const [ready, setReady] = useState(true);

  const goSignUpPage = () => {
    navigation.navigate('SignUpPage');
  };

  const doSignIn = () => {
    //로그인 버튼을 클릭했을 때 실행되는 함수
    if (email === '') {
      setEmailError('이메일을 입력해주세요');
    } else {
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('비밀번호를 입력해주세요');
    } else {
      setPasswordError('');
    }

    // Authentication 로그인 처리 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('로그인성공', user.email);

        //AsyncStorage에 로그인 성공한 이메일을 저장
        AsyncStorage.setItem("session", email);

        //새로운 페이지 히스토리를 남기라는 의미
        navigation.push('TabNavigator');
      })


      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('로그인에 문제가 있어요', error.code);
      });
  };

  const setEmailFunc = (itemInputEmail) => {
    //이메일 상태값을 관리하는 함수
    setEmail(itemInputEmail);
  };
  const setPasswordFunc = (itemInputPassword) => {
    //비밀번호 상태값을 관리하는 함수
    setPassword(itemInputPassword);
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
    //beforeRemove 뒤로가기 방지 기능
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert("로그인을 해주세요.");
    });
    //로딩 화면 보여줄 때 session 값 확인해서 메인페이지로 이동
    setTimeout(() => {
      AsyncStorage.getItem('session', (err, result) => {
        console.log('저장통', result);
        if (result) {
          //가입정보가 있다면 바로 메인페이지로 이동
          navigation.navigate('TabNavigator')
        } else {
          //가입정보가 없다면 로그인 페이지를 보여줌
          setReady(false);
        }
      })
      setReady(false)
    }, 1000)
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
        <SingInInput
          title={'이메일'}
          type={'email'}
          setFunc={setEmailFunc}
          error={emailError}
          titleP={'비밀번호'}
          typeP={'password'}
          setFuncP={setPasswordFunc}
          errorP={passwordError}
        />
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
      <TouchableOpacity style={styles.login} onPress={doSignIn}>
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
