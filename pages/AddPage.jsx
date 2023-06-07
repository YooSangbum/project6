import { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  Input,
  TextArea,
  Center,
  Pressable,
  Button,
} from 'native-base';
import { Alert, StyleSheet, Platform } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ImageBlurLoading from 'react-native-image-blur-loading';

import * as ImagePicker from 'expo-image-picker';

import { auth, storage, db } from '../config/firebase';

import { doc, setDoc, getDoc } from 'firebase/firestore';

import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

const tempImage =
  'https://firebasestorage.googleapis.com/v0/b/wepet-2c5d8.appspot.com/o/Ellipse%204.png?alt=media&token=355053e9-5f90-4eb6-a527-9cf16529857b&_gl=1*18y8ght*_ga*MjQyNTU5MTUuMTY4NTkyOTY5Ng..*_ga_CW55HF8NVT*MTY4NTk0MzY3MC4yLjEuMTY4NTk0NTUzMy4wLjAuMA..';

export default function AddPage({ navigation }) {
  //게시글 등록 상태관리 리스트
  const [image, setImage] = useState(tempImage); // 게시글이미지
  const [imageUri, setImageUri] = useState(''); //업로드할 이미지 uri
  const [title, setTitle] = useState(); // 게시글 제목
  const [titleError, setTitleError] = useState(); // 게시글 제목 에러
  const [content, setContent] = useState(); // 게시글 내용
  const [contentError, setContentError] = useState(); // 게시글 내용 에러
  //로딩 상태관리
  const [progress, setProgress] = useState(false);

  //이미지파커 함수
  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('카메라 권한을 허용해주세요!');
      }
    }
  };

  // 등록번튼 클릭 시 실행 함수
  const upload = async () => {
    if (imageUri === '') {
      Alert.alert('이미지를 선택해 주세요');
      return;
    }
    if (title === '') {
      Alert.alert('제목을 입력해주세요!');
      return;
    }
    if (content === '') {
      Alert.alert('내용을 입력해주세요!');
      return;
    }

    setProgress(true);

    const user = auth.currentUser;
    console.log('업로드 준비!!');

    let date = new Date(); // 현재 시간 저장
    let getTime = date.getTime().toString(); //현재 시간을 밀리세컨드로 변환
    let data = {
      //게시글 데이터
      title: title,
      author: user.email,
      desc: content,
      image: image,
      date: getTime,
      uid: user.uid,
    };

    //이미지 업로드 함수 실행
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const imageUrl = await imageUpload(blob, getTime);
    data.image = imageUrl;

    console.log(data);
    let result = await addDiary(data); //게시글 등록 함수 실행
    if (result) {
      setProgress(false);
      setTitle('');
      setContent('');
      setImage(tempImage);
      setImageUri('');
      Alert.alert('글이 성공적으로 등록되었습니다!');
      navigation.navigate('MyPage');
    } else {
      Alert.alert('글 등록에 실패하였습니다!');
      setProgress(false);
    }
  };

  //storage에 이미지 업로드 함수
  async function imageUpload(blob, date) {
    const storageRef = ref(storage, 'diary/' + date);
    const snapshot = await uploadBytes(storageRef, blob);
    const imageUrl = await getDownloadURL(snapshot.ref);
    blob.close();
    return imageUrl;
  }

  // firebase collection 에 등록하는 함수 setDoc과 doc 사용됨
  // user 정보와 storage에 등록된 이미지를 함께 등록하는 함수
  async function addDiary(content) {
    try {
      const userRef = doc(db, 'users', content.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        content.author = userData.nickName;
        await setDoc(doc(db, 'diary', `${content.date}D`), content);
        return true;
      } else {
        console.log('해당 사용자 문서가 존재하지 않습니다.');
        return false;
      }
    } catch (e) {
      console.log(err.message);
      alert('글 작성에 문제가 있습니다!', err.message);
      return false;
    }
  }

  // + 버튼 클릭 시 이미지 피커 실행
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });

      if (result !== null && !result.canceled) {
        const imageData = result.assets[0];
        getImageUrl(imageData);
      } else {
        setImageUri('');
        setImage(tempImage);
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  const getImageUrl = async (imageData) => {
    setImageUri(imageData.uri);
  };

  return (
    <ScrollView flex={1} backgroundColor={'#fff'}>
      <HeaderComponent />
      <Center p={4}>
        {/* <Pressable
          borderWidth={2}
          borderColor={'#999'}
          borderStyle={'dotted'}
          w={'100%'}
          h={150}
          borderRadius={10}
          mt={8}
          mb={8}
          justifyContent={'center'}
          onPress={pickImage}
        >
          <Text fontSize={50} textAlign={'center'}>
            +
          </Text>
        </Pressable> */}

        {imageUri == '' ? (
          <Pressable
            borderWidth={2}
            borderColor={'#999'}
            borderStyle={'dotted'}
            w={'100%'}
            h={150}
            borderRadius={10}
            mt={4}
            mb={4}
            justifyContent={'center'}
            onPress={() => pickImage()}
          >
            <Text fontSize={50} textAlign={'center'}>
              +
            </Text>
          </Pressable>
        ) : (
          <ImageBlurLoading
            withIndicator
            thumbnailSource={{ uri: imageUri }}
            source={{ uri: imageUri }}
            style={styles.imagePreview}
            onPress={() => pickImage()}
          />
        )}

        <Input
          fontFamily={'SUIT-Medium'}
          placeholder="제목을 입력하세요"
          fontSize={14}
          borderRadius={10}
          mb={4}
          onChangeText={(text) => setTitle(text)}
        />
        <TextArea
          fontFamily={'SUIT-Medium'}
          borderRadius={10}
          h={200}
          placeholder="내용을 입력하세요"
          onChangeText={(text) => setContent(text)}
        />
        <Button w={'100%'} mt={4} backgroundColor={'#F7F7FE'} onPress={upload}>
          <Text>등록</Text>
        </Button>
      </Center>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    borderRadius: 10,
    width: '100%',
    height: 150,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
