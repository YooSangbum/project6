import { useState, useEffect } from 'react';
import { ScrollView, Text } from 'native-base';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FeedMyComponent from '../components/FeedMyComponent';
import HeaderComponent from '../components/HeaderComponent';
import FeedMyShowComponent from '../components/FeedMyShowComponent';

//firebase
import { auth, db } from '../config/firebase';
import { signOut } from 'firebase/auth';
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';

export default function MyPage({ data, navigation }) {
  const [fireData, setfireData] = useState([]);
  const [nickName, setNickName] = useState(''); //닉네임 저장 변수
  const [email, setEmail] = useState(''); //이메일 저장 변수
  const [uid, setUid] = useState(''); //uid 저장 변수

  useEffect(() => {
    const fetchData = async () => {
      const email = await getSession();
      setEmail(email);

      const userData = await getUser(email);
      console.log(userData);
      setNickName(userData[0].nickName);
      setUid(userData[0].uid);
      getData(userData[0].uid);

      //실시간 dairy 데이터 가져오기
      const dataList = onSnapshot(
        query(collection(db, 'diary'), where('uid', '==', userData[0].uid)),
        (snapshot) => {
          const updatedData = snapshot.docs.map((doc) => doc.data());
          setfireData(updatedData);
        }
      );

      return () => {
        dataList();
      };
    };
    fetchData();
  }, []);

  //firebase 로그아웃 처리
  const logoutFunc = () => {
    signOut(auth)
      .then(() => {
        console.log('mypage - 로그아웃');
        AsyncStorage.removeItem('session');
        navigation.push('SignInPage');
      })
      .catch((err) => console.log(err));
  };

  //이메일 정보 갖고오기 (세션정보)
  const getSession = async () => {
    try {
      const value = await AsyncStorage.getItem('session');
      if (value) return value;
    } catch (err) {
      console.log(err);
    }
  };

  //user 데이터 갖고오기
  const getUser = async (email) => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  };

  //diary 데이터 갖고오기
  const getData = async (uid) => {
    const q = query(collection(db, 'diary'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const diaryData = querySnapshot.docs.map((doc) => doc.data());
    setfireData(diaryData);
  };

  return (
    <ScrollView backgroundColor={'#fff'} flex={1}>
      <HeaderComponent />
      <TouchableOpacity style={styles.logout} onPress={logoutFunc}>
        <Text color={'#b0b0b0'}>로그아웃</Text>
      </TouchableOpacity>
      <FeedMyComponent fireData={fireData} nickName={nickName} />
      <FeedMyShowComponent data={data} fireData={fireData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logout: {
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 16,
  },
});
