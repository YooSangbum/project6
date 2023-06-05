import { ScrollView, Text } from 'native-base';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FeedMyComponent from '../components/FeedMyComponent';
import HeaderComponent from '../components/HeaderComponent';
import FeedMyShowComponent from '../components/FeedMyShowComponent';

//firebase 로그아웃  처리
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

export default function MyPage({ data, navigation }) {
  //firebase
  const logoutFunc = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('로그아웃 성공')

        // AsyncStorage에서 session 삭제
        AsyncStorage.removeItem('session', (err, result) => {
          console.log('저장통', result);
        });

        navigation.push('SignInEmail')
      })
      .catch((error) => {
        Alert.alert('로그아웃에 문제가 있어요')
      })
  }
  return (
    <ScrollView backgroundColor={'#fff'} flex={1}>
      <HeaderComponent />
      <TouchableOpacity style={styles.logout} onPress={logoutFunc}>
        <Text color={'#b0b0b0'}>로그아웃</Text>
      </TouchableOpacity>
      <FeedMyComponent />
      <FeedMyShowComponent data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logout: {
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 16,
  },
});