import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import {
  Box,
  Image,
  Center,
  Text,
  HStack,
  VStack,
  ScrollView,
} from 'native-base';

import HeaderComponent from '../components/HeaderComponent';

import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const miso = require('../assets/img/miso.png');
const img = require('../assets/img/user3.jpg');

export default function HospitalDetailPage({ route }) {
  const content = route.params.content;
  console.log(content);
  console.log(Number(content.위도));
  let latitude = Number(content.위도);
  let longitude = Number(content.경도);
  return (
    <ScrollView borderWidth={1} backgroundColor={'#fff'}>
      <HeaderComponent />
      <Box px="16px" mt={3}>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              // latitude: 36.33750395,
              // longitude: 127.385311461689,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title={content.업소명}
            />
          </MapView>
        </View>
        <Center my={6}>
          <Text fontFamily={'SUIT-Regular'}>{content.name}</Text>
          <HStack>
            <HStack mr={3}>
              <EvilIcons name="heart" size={24} color="red" />
              <Text fontFamily={'SUIT-Regular'}>0</Text>
            </HStack>
            <HStack>
              <FontAwesome5 name="comment-dots" size={18} color="black" />
              <Text fontFamily={'SUIT-Regular'} ml={1}>
                0
              </Text>
            </HStack>
          </HStack>
        </Center>
      </Box>
      <Box backgroundColor={'#E2E2E250'} py={6} px="16px">
        <HStack py={1}>
          <Ionicons name="md-home-outline" size={24} color="black" />
          <Text fontFamily={'SUIT-Regular'} ml={3}>
            {content.도로명주소}
          </Text>
        </HStack>
        <HStack py={1}>
          <Feather name="phone" size={24} color="black" />
          <Text fontFamily={'SUIT-Regular'} ml={3}>
            전화번호 준비중입니다
          </Text>
        </HStack>
      </Box>
      <Box px={'16px'} py={3}>
        <Text fontSize={18} fontFamily={'SUIT-Medium'}>
          리뷰
        </Text>
        <Box borderBottomWidth={1} borderBottomColor={'#D9D9D9'} pb={3}>
          <HStack mt={3}>
            <Image
              borderWidth={1}
              width={29}
              height={29}
              borderRadius={50}
              source={img}
              alt="user"
            />
            <VStack ml={3}>
              <Text fontFamily={'SUIT-Medium'}>User Name</Text>
              <Text fontSize={10} fontFamily={'SUIT-Medium'}>
                댓글 단 시간
              </Text>
            </VStack>
          </HStack>
          <Text fontSize={14} mt={3} fontFamily={'SUIT-Medium'}>
            댓글 댓글 댓글 리뷰 내용이 들어갑니다아~
          </Text>
        </Box>
        <Box borderBottomWidth={1} borderBottomColor={'#D9D9D9'} pb={3}>
          <HStack mt={3}>
            <Image
              borderWidth={1}
              width={29}
              height={29}
              borderRadius={50}
              source={img}
              alt="user"
            />
            <VStack ml={3}>
              <Text fontFamily={'SUIT-Medium'}>User Name</Text>
              <Text fontSize={10} fontFamily={'SUIT-Medium'}>
                댓글 단 시간
              </Text>
            </VStack>
          </HStack>
          <Text fontSize={14} mt={3} fontFamily={'SUIT-Medium'}>
            댓글 댓글 댓글 리뷰 내용이 들어갑니다아~
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
