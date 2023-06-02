import { useState, useEffect } from 'react';
import { ScrollView, Text, Input, Flex, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import CommentComponent from '../components/CommentComponent';

import { AntDesign } from '@expo/vector-icons';

import testData from '../data/testData';

export default function CommentPage() {
  const [data, setData] = useState([
    {
      id: 0,
      title: '',
      content: '',
      tiem: '',
      comment: '',
      good: 0,
      Creationtime: '',
      image: 'https://src.hidoc.co.kr/image/lib/2022/11/15/1668491763670_0.jpg',
      petname: '',
    },
  ]);

  useEffect(() => {
    setData(testData);
  }, []);

  return (
    <ScrollView flex={1} backgroundColor={'#fff'} borderWidth={1}>
      <HeaderComponent />
      <Flex
        px={'16px'}
        my={6}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Input
          placeholder="한마디 부탁합니다~"
          w={'85%'}
          borderWidth={1}
          fontFamily={'SUIT-Medium'}
        />
        <AntDesign name="check" size={24} color="black" />
      </Flex>
      <HStack alignItems={'center'} px={'16px'} py={4}>
        <Text
          flex={1}
          textAlign={'center'}
          fontFamily={'SUIT-Medium'}
          fontSize={16}
        >
          글 댓글
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#B4B0B0',
            borderRadius: 4,
            paddingHorizontal: 10,
            paddingVertical: 3,
          }}
        >
          <Text fontSize={10} fontFamily={'SUIT-Medium'}>
            글보기
          </Text>
        </TouchableOpacity>
      </HStack>
      <CommentComponent data={data} />
    </ScrollView>
  );
}
