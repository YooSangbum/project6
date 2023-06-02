import {
  ScrollView,
  Text,
  Input,
  Flex,
  HStack,
  Image,
  VStack,
  Box,
} from 'native-base';

import { TouchableOpacity } from 'react-native';

const cat = require('../assets/img/user3.jpg');

export default function FeedUserComponent() {
  return (
    <Box px={'16px'} mt={6} py={3}>
      <HStack alignItems={'center'}>
        <Box overflow="hidden" width={35} height={35} borderRadius={50}>
          <Image source={cat} alt="cat" width={35} height={35} />
        </Box>
        <VStack ml={2}>
          <Text fontFamily={'SUIT-Medium'} fontSize={18}>
            유상범
          </Text>
          <Text fontFamily={'SUIT-Medium'} color="#B4B0B0" fontSize={12}>
            안녕하세요. 유상범입니다. 자기소개 합니다.
          </Text>
        </VStack>
      </HStack>
      <HStack justifyContent={'space-between'} pl={10} py={4}>
        <Text fontFamily={'SUIT-Medium'}>
          게시글 <Text> 10</Text>
        </Text>
        <Text fontFamily={'SUIT-Medium'}>
          팔로워 <Text> 2,222</Text>
        </Text>
        <Text fontFamily={'SUIT-Medium'}>
          팔로잉 <Text> 444</Text>
        </Text>
      </HStack>
      <HStack py={2} justifyContent={'center'}>
        <TouchableOpacity
          style={{
            backgroundColor: '#D9D9D9',
            paddingHorizontal: 20,
            paddingVertical: 3,
            borderRadius: 4,
          }}
        >
          <Text>팔로잉</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#D9D9D9',
            paddingHorizontal: 20,
            paddingVertical: 3,
            borderRadius: 4,
            marginLeft: 35,
          }}
        >
          <Text>팔로잉</Text>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
}
