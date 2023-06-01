import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Menu,
  Pressable,
  Icon,
  ScrollView,
} from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

export default function DetailPage({ navigation, route }) {
  const content = route.params.content;
  useEffect(() => {
    navigation.setOptions({
      title: content.title,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: '#000',
      haederTitleStyle: {},
      headerShown: true,
      headerBackImage: () => <AntDesign name="left" size={24} color="black" />,
    });
  }, []);

  return (
    <ScrollView backgroundColor={'#fff'}>
      <Box
        py={8}
        backgroundColor={'#fff'}
        borderBottomWidth={1}
        borderBottomColor={'#D9D9D9'}
        px={'16px'}
      >
        <HStack alignItems={'center'} justifyContent="space-between">
          <HStack>
            <Box width={29} height={29} borderRadius={50} overflow={'hidden'}>
              <Image
                source={{ uri: content.image }}
                width={29}
                height={29}
                alt="userName"
              />
            </Box>
            <VStack px={2}>
              <Text fontFamily={'SUIT-Medium'}>user.name{content.petname}</Text>
              <Text fontSize={10} color={'#B4B0B0'} fontFamily={'SUIT-Medium'}>
                {content.Creationtime}
              </Text>
            </VStack>
          </HStack>
          <HStack>
            <Menu
              w={130}
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    {/* <HamburgerIcon /> */}
                    <Icon
                      as={MaterialIcons}
                      name="more-vert"
                      size="5"
                      color="black"
                    />
                  </Pressable>
                );
              }}
            >
              <Menu.Item isDisabled>Sofia</Menu.Item>
              <Menu.Item>Cookie</Menu.Item>
            </Menu>
          </HStack>
        </HStack>
        <ScrollView mt={3} horizontal={true}>
          <Image
            mr={3}
            source={{ uri: content.image }}
            w={353}
            h={209}
            borderRadius={14}
            alt="img1"
          />
          <Image
            mr={3}
            source={{ uri: content.image }}
            w={353}
            h={209}
            borderRadius={14}
            alt="img2"
          />
        </ScrollView>
        <Text mt={8} fontFamily={'SUIT-Medium'} fontSize={18}>
          {content.title}
        </Text>
        <Text fontFamily={'SUIT-Medium'} fontSize={14} mt={4} mb={6}>
          {content.content}
        </Text>
        <HStack mt={3} alignItems={'center'} justifyContent={'space-between'}>
          <HStack>
            <HStack mr={3}>
              <EvilIcons name="heart" size={24} color="red" />
              <Text ml={1}>{content.good}</Text>
            </HStack>
            <HStack>
              <FontAwesome5 name="comment-dots" size={18} color="black" />
              <Text ml={1}>0</Text>
            </HStack>
          </HStack>
          <FontAwesome5 name="share-square" size={18} color="black" />
        </HStack>
      </Box>
    </ScrollView>
  );
}
