import { Box, Button, Text, View, HStack } from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';

const kakao = require('../assets/img/kakao.png');
const naver = require('../assets/img/naver.png');
const email = require('../assets/img/email.png');

export default function SignInPage({ navigation }) {
  const goSignUpPage = () => {
    navigation.navigate('SignUpPage');
  };
  const goSignInEmail = () => {
    navigation.navigate('SignInEmail');
  };
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text fontFamily={'DancingScript-Bold'} fontSize={40}>
        Wepet
      </Text>
      <Box width={'70%'}>
        <Button
          width={'100%'}
          backgroundColor="#FFE812"
          borderRadius={10}
          mt={16}
          mb={4}
          justifyContent={'flex-start'}
        >
          <HStack alignItems={'center'}>
            <ImageBlurLoading source={kakao} />
            <Text pl={2} fontFamily={'SUIT-Bold'}>
              카카오로 시작하기
            </Text>
          </HStack>
        </Button>
        <Button
          backgroundColor="#04D461"
          borderRadius={10}
          mb={4}
          justifyContent={'flex-start'}
        >
          <HStack alignItems={'center'}>
            <ImageBlurLoading source={naver} />
            <Text fontFamily={'SUIT-Bold'} pl={2}>
              네이버로 시작하기
            </Text>
          </HStack>
        </Button>
        <Button
          backgroundColor="#F5F5F5"
          borderColor={'#5197F2'}
          borderWidth={1}
          borderRadius={10}
          justifyContent={'flex-start'}
          onPress={goSignInEmail}
        >
          <HStack alignItems={'center'}>
            <ImageBlurLoading source={email} />
            <Text fontFamily={'SUIT-Bold'} pl={2}>
              이메일로 시작하기
            </Text>
          </HStack>
        </Button>
        <Box alignItems={'center'}>
          <Button backgroundColor={'transparent'} mt={3}>
            <Text fontSize={10} fontFamily={'SUIT-SemiBold'}>
              비회원으로 시작하기
            </Text>
          </Button>
          <Button backgroundColor={'transparent'} onPress={goSignUpPage}>
            <Text fontSize={10} fontFamily={'SUIT-SemiBold'}>
              회원가입
            </Text>
          </Button>
        </Box>
      </Box>
    </View>
  );
}
