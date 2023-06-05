import { Box, Text, HStack, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ImageBlurLoading from 'react-native-image-blur-loading';

export default function HospitalComponent({ navigation, hospital, route }) {
  const goHospital = () => {
    navigation.navigate('HospitalDetailPage', {
      content: hospital,
    });
  };
  return (
    <Box backgroundColor={'#fff'} px={'16px'} py={1} pb={1}>
      <HStack mb={3} alignItems={'center'} justifyContent={'space-between'}>
        <TouchableOpacity onPress={goHospital}>
          <HStack>
            <Box mr={3}>
              <ImageBlurLoading
                withIndicator
                thumbnailSource={{ uri: hospital.image }}
                source={{ uri: hospital.image }}
                style={{ width: 59, height: 59 }}
                borderRadius={10}
              />
            </Box>
            <VStack>
              <Text fontFamily={'SUIT-Medium'}>{hospital.업소명}</Text>
              <Text
                fontSize={10}
                fontFamily={'SUIT-Medium'}
                isTruncated
                maxW="250"
              >
                {hospital.도로명주소}
              </Text>
              <Text fontSize={10} color={'#B8B2B2'} fontFamily={'SUIT-Medium'}>
                {hospital.comment}
              </Text>
            </VStack>
          </HStack>
        </TouchableOpacity>
        {route.name == 'HomePage' ? null : (
          <Text
            fontFamily={'SUIT-Medium'}
            color={'#EC4242'}
            fontSize={10}
            onPress={goHospital}
          >
            더보기 &gt;
          </Text>
        )}
      </HStack>
    </Box>
  );
}
