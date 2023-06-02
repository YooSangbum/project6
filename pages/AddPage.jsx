import {
  ScrollView,
  Text,
  Input,
  TextArea,
  Center,
  Pressable,
  Button,
} from 'native-base';

import HeaderComponent from '../components/HeaderComponent';

const bg = require('../assets/img/user3.jpg');

export default function AddPage() {
  return (
    <ScrollView flex={1} backgroundColor={'#fff'}>
      <HeaderComponent />
      <Center p={4}>
        <Pressable
          borderWidth={2}
          borderColor={'#999'}
          borderStyle={'dotted'}
          w={'100%'}
          h={150}
          borderRadius={10}
          mt={8}
          mb={8}
          justifyContent={'center'}
        >
          <Text fontSize={50} textAlign={'center'}>
            +
          </Text>
        </Pressable>

        <Input
          fontFamily={'SUIT-Medium'}
          placeholder="제목을 입력하세요"
          fontSize={14}
          borderRadius={10}
          mb={4}
        />
        <TextArea
          fontFamily={'SUIT-Medium'}
          borderRadius={10}
          h={200}
          placeholder="내용을 입력하세요"
        />
        <Button w={'100%'} mt={4} backgroundColor={'#F7F7FE'}>
          <Text>등록</Text>
        </Button>
      </Center>
    </ScrollView>
  );
}
