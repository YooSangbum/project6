import { HStack, Image, Text, Menu, Pressable, Icon, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function CommentComponent({ data }) {
  return (
    <Box
      py={8}
      backgroundColor={'#fff'}
      borderTopWidth={1}
      borderTopColor={'#D9D9D9'}
      borderBottomWidth={1}
      borderBottomColor={'#D9D9D9'}
      px={'16px'}
    >
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <HStack>
          <Image
            source={{ uri: data[0].image }}
            width={29}
            height={29}
            borderRadius={50}
            alt="userImage"
          />
          <Text fontFamily={'SUIT-Medium'} ml={2}>
            user.name
          </Text>
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
      <Text my={6} fontFamily={'SUIT-Medium'}>
        {data[0].content}
      </Text>
      <Text fontFamily={'SUIT-Medium'} fontSize={12} color={'#B4B0B0'}>
        2023. 5. 18. 14:52
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#B4B0B0',
          borderRadius: 4,
          paddingHorizontal: 10,
          paddingVertical: 2,
          width: 40,
          marginTop: 10,
        }}
      >
        <Text fontSize={10} fontFamily={'SUIT-Medium'}>
          답글
        </Text>
      </TouchableOpacity>
    </Box>
  );
}
