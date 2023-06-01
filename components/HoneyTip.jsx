import { Box, HStack, Text } from 'native-base';
import { ImageBackground } from 'react-native';

const tip1 = require('../assets/img/tip1.png');
const tip2 = require('../assets/img/tip2.png');

export default function HoneyTip() {
  return (
    <Box backgroundColor={'#fff'} px={'16px'} pt={8} pb={3}>
      <HStack justifyContent={'space-between'} alignItems={'center'} mb={1}>
        <Text fontFamily={'SUIT-Medium'} fontSize={16}>
          꿀팁
        </Text>
        <Text color={'#ec4242'} fontSize={10} fontFamily={'SUIT-Medium'}>
          더보기 &gt;
        </Text>
      </HStack>
      <HStack>
        <Text fontSize={12} mr={3} fontFamily={'SUIT-Medium'}>
          #건강
        </Text>
        <Text fontSize={12} mr={3} fontFamily={'SUIT-Medium'}>
          #음식
        </Text>
        <Text fontSize={12} mr={3} fontFamily={'SUIT-Medium'}>
          #훈련
        </Text>
      </HStack>
      <HStack justifyContent={'space-between'} mt={3}>
        <Box
          width={'170px'}
          height={'74px'}
          borderRadius={10}
          position="relative"
        >
          <ImageBackground
            source={tip1}
            style={{ width: '100%', height: '100%' }}
          />
          <Text
            position={'absolute'}
            bottom={0}
            left={1}
            color="#fff"
            fontSize={14}
            fontFamily={'SUIT-Medium'}
          >
            반려견 우울증 진단 테스트
          </Text>
        </Box>
        <Box
          width={'170px'}
          height={'74px'}
          borderRadius={10}
          position="relative"
        >
          <ImageBackground
            source={tip2}
            style={{ width: '100%', height: '100%' }}
          />
          <Text
            position={'absolute'}
            bottom={0}
            left={1}
            color="#FF6109"
            fontSize={14}
            fontFamily={'SUIT-Medium'}
          >
            반려견이 설사를 할 때 '이런 행동'은 안돼요!
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
