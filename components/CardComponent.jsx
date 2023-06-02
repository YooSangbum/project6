import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Menu,
  Pressable,
  Icon,
  View,
} from 'native-base';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CardComponent({ content, navigation }) {
  const DetailLoad = () => {
    navigation.navigate('DetailPage', {
      content: content,
    });
  };

  const goCommentPage = () => {
    navigation.navigate('CommentPage');
  };
  const goFeedPage = () => {
    navigation.navigate('FeedPage', {
      content: content,
    });
  };

  return (
    <Box
      py={8}
      backgroundColor={'#fff'}
      borderBottomWidth={1}
      borderBottomColor={'#D9D9D9'}
      px={'16px'}
    >
      <HStack alignItems={'center'} justifyContent="space-between">
        <TouchableOpacity onPress={goFeedPage}>
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
        </TouchableOpacity>
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
      <TouchableOpacity onPress={() => DetailLoad()}>
        <View mt={3} >
          <Image
            mr={3}
            source={{ uri: content.image }}
            w={353}
            h={209}
            borderRadius={14}
            alt="img1"
          />
        </View>
        <Text mt={3} fontFamily={'SUIT-Medium'} fontSize={18}>
          글 제목
        </Text>
        <Text fontFamily={'SUIT-Medium'} fontSize={12} isTruncated maxW="300">
          {content.content}
        </Text>
      </TouchableOpacity>
      <HStack mt={3} alignItems={'center'} justifyContent={'space-between'}>
        <HStack>
          <HStack mr={3}>
            <EvilIcons name="heart" size={24} color="red" />
            <Text>0</Text>
          </HStack>
          <TouchableOpacity onPress={goCommentPage}>
            <HStack>
              <FontAwesome5 name="comment-dots" size={18} color="black" />
              <Text ml={1}>0</Text>
            </HStack>
          </TouchableOpacity>
        </HStack>
        <FontAwesome5 name="share-square" size={18} color="black" />
      </HStack>
    </Box>
  );
}
