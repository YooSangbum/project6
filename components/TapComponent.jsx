import React from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Menu,
  HamburgerIcon,
  Pressable,
} from 'native-base';

export default function TapComponent({ navigation, route }) {
  const goHome = () => {
    navigation.navigate('HomePage');
  };
  const goShow = () => {
    navigation.navigate('ShowPage');
  };
  const goPetHospital = () => {
    navigation.navigate('PetHospitalPage');
  };
  const goShoppingmall = () => {
    navigation.navigate('ShoppingmallPage');
  };

  return (
    <HStack
      px="16px"
      py={1}
      pb={8}
      justifyContent="flex-start"
      alignItems="center"
      w="100%"
      backgroundColor={'#fff'}
    >
      <Text
        mr={5}
        color={route.name == 'HomePage' ? '#EC4242' : null}
        fontFamily={'SCDream4'}
        onPress={goHome}
      >
        홈
      </Text>
      <Text
        mr={5}
        color={route.name == 'ShowPage' ? '#EC4242' : null}
        fontFamily={'SCDream4'}
        onPress={goShow}
      >
        자랑
      </Text>
      <Text
        mr={5}
        color={route.name == 'PetHospitalPage' ? '#EC4242' : null}
        fontFamily={'SCDream4'}
        onPress={goPetHospital}
      >
        동물병원
      </Text>
      <Text
        fontFamily={'SCDream4'}
        mr={5}
        color={route.name == 'ShoppingmallPage' ? '#EC4242' : null}
        fontFamily={'SCDream4'}
        onPress={goShoppingmall}
      >
        쇼핑몰
      </Text>
    </HStack>
  );
}
