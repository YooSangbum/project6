import { Box, HStack, Stack, Text, VStack } from 'native-base';

import ImageBlurLoading from 'react-native-image-blur-loading';

export default function SuperStar({ data }) {
  const item = data.slice(0, 5);
  return (
    <Box
      backgroundColor="#F7F7FE"
      px={'16px'}
      style={{
        shadowColor: '#000',
        elevation: 200,
      }}
    >
      <Text py={2} fontFamily={'SUIT-Medium'} fontSize={16}>
        우리들의{' '}
        <Text borderWidth={1} color={'#EC7542'}>
          인기스타
        </Text>
      </Text>
      <HStack justifyContent={'space-around'}>
        {item.map((item, i) => {
          return (
            <VStack alignItems={'center'} py={1} key={i}>
              <ImageBlurLoading
                withIndicator
                thumbnailSource={{ uri: item.image }}
                source={{ uri: item.image }}
                style={{ width: 59, height: 59 }}
                borderRadius={50}
              />
              <Text pt={1}>{item.petname}</Text>
            </VStack>
          );
        })}
      </HStack>
    </Box>
  );
}
