import { Flex, HStack, Image, Text, VStack } from 'native-base';

import { TouchableOpacity } from 'react-native';

const Img = require('../assets/img/user3.jpg');

export default function FriendComponent() {
  return (
    <Flex
      mt={1}
      flexDirection={'row'}
      flexWrap={'wrap'}
      borderColor={'red'}
      px={'16px'}
      py={6}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <HStack>
        <Image
          source={Img}
          alt="myFriend"
          width={39}
          height={39}
          borderRadius={50}
        />
        <VStack ml={4}>
          <Text fontFamily={'SUIT-Regular'}>FriendName</Text>
          <Text fontFamily={'SUIT-Regular'}>친구생일</Text>
        </VStack>
      </HStack>
      <TouchableOpacity style={{}}>
        <Text fontFamily={'SUIT-Regular'}>선물하기</Text>
      </TouchableOpacity>
    </Flex>
  );
}
