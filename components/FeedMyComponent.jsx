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

export default function FeedMyComponent() {
  return (
    <Box px={'16px'} mt={6} py={3}>
      <HStack alignItems={'center'}>
        <VStack>
          <Box overflow="hidden" width={39} height={39} borderRadius={50}>
            <Image source={cat} alt="cat" width={39} height={39} />
          </Box>
          <Text
            fontFamily={'SUIT-Regular'}
            fontSize={8}
            color={'#B4B0B0'}
            mt={1}
          >
            프로필편집
          </Text>
        </VStack>
        <VStack ml={4}>
          <Text fontFamily={'SUIT-Medium'} fontSize={18}>
            유상범
          </Text>
          <Text fontFamily={'SUIT-Medium'} color="#B4B0B0" fontSize={12}>
            안녕하세요. 유상범입니다. 자기소개 합니다. FeedMy
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
    </Box>
  );
}
