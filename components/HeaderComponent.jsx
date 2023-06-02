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

import { Fontisto } from '@expo/vector-icons';

export default function HeaderComponent() {
  return (
    <HStack
      px="16px"
      py={3}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      safeAreaTop
      // backgroundColor={'#fff'}
    >
      <HStack alignItems="center">
        <Text fontFamily={'DancingScript-Bold'} fontSize={32}>
          Wepet
        </Text>
      </HStack>
      <HStack>
        <Menu
          w="190"
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options Alarm"
                {...triggerProps}
              >
                {/* <HamburgerIcon /> */}
                <Fontisto name="bell" size={24} color="black" />
              </Pressable>
            );
          }}
        >
          <Menu.Item>Alarm</Menu.Item>
        </Menu>
      </HStack>
    </HStack>
  );
}
