import { Box, Text, HStack, VStack } from 'native-base';

import ImageBlurLoading from 'react-native-image-blur-loading';

const test1 = require('../assets/img/user1.jpg');
const test2 = require('../assets/img/user2.jpg');
const test3 = require('../assets/img/user3.jpg');

export default function PetHospital() {
  return (
    <Box backgroundColor={'#fff'} px={'16px'} pt={12} pb={1}>
      <HStack justifyContent={'space-between'} alignItems={'center'} mb={4}>
        <Text color={'#EC7542'} fontFamily={'SUIT-Medium'} fontSize={16}>
          우리동네 <Text color={'#000'}>동물병원</Text>
        </Text>
        <Text color={'#ec4242'} fontSize={10} fontFamily={'SUIT-Medium'}>
          더보기 &gt;
        </Text>
      </HStack>
      <HStack mb={3}>
        <Box mr={3}>
          <ImageBlurLoading
            withIndicator
            thumbnailSource={test1}
            source={test1}
            style={{ width: 59, height: 59 }}
            borderRadius={10}
          />
        </Box>
        <VStack>
          <Text fontFamily={'SUIT-Medium'}>병원이름</Text>
          <Text fontFamily={'SUIT-Medium'}>주소</Text>
          <Text fontSize={10} color={'#B8B2B2'} fontFamily={'SUIT-Medium'}>
            댓글
          </Text>
        </VStack>
      </HStack>
      <HStack mb={3}>
        <Box mr={3}>
          <ImageBlurLoading
            withIndicator
            thumbnailSource={test2}
            source={test2}
            style={{ width: 59, height: 59 }}
            borderRadius={10}
          />
        </Box>
        <VStack>
          <Text fontFamily={'SUIT-Medium'}>병원이름</Text>
          <Text fontFamily={'SUIT-Medium'}>주소</Text>
          <Text fontSize={10} color={'#B8B2B2'} fontFamily={'SUIT-Medium'}>
            댓글
          </Text>
        </VStack>
      </HStack>
      <HStack mb={3}>
        <Box mr={3}>
          <ImageBlurLoading
            withIndicator
            thumbnailSource={test3}
            source={test3}
            style={{ width: 59, height: 59 }}
            borderRadius={10}
          />
        </Box>
        <VStack>
          <Text fontFamily={'SUIT-Medium'}>병원이름</Text>
          <Text fontFamily={'SUIT-Medium'}>주소</Text>
          <Text fontSize={10} color={'#B8B2B2'} fontFamily={'SUIT-Medium'}>
            댓글
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
