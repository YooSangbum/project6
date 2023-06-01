import { useState, useEffect } from 'react';

import { Box, ScrollView, Text, HStack, Stack } from 'native-base';

import ImageBlurLoading from 'react-native-image-blur-loading';

import HeaderComponent from '../components/HeaderComponent';
import HoneyTip from '../components/HoneyTip';
import PetHospital from '../components/PetHospital';
import SuperStar from '../components/SuperStar';
import TapComponent from '../components/TapComponent';

import testData from '../data/testData';

export default function HomePage({ navigation, route }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(testData);
  }, []);

  const goShow = () => {
    navigation.navigate('ShowPage');
  };

  return (
    <ScrollView flex={1} backgroundColor={'#fff'}>
      <HeaderComponent />
      <TapComponent route={route} navigation={navigation} />
      <Box px="16px" pb={10}>
        <HStack justifyContent={'space-between'} alignItems={'center'} mb={5}>
          <Text color={'#EC7542'} fontFamily={'SUIT-Medium'} fontSize={16}>
            우리애기 <Text color={'#000'}>좀 보세요!</Text>
          </Text>
          <Text
            color={'#ec4242'}
            fontSize={10}
            fontFamily={'SUIT-Regular'}
            onPress={goShow}
          >
            더보기 &gt;
          </Text>
        </HStack>
        <ScrollView horizontal={true}>
          {data.map((item, i) => {
            return (
              <ImageBlurLoading
                withIndicator
                thumbnailSource={{ uri: item.image }}
                source={{ uri: item.image }}
                style={{
                  width: 261,
                  height: 274,
                  objectFit: 'cover',
                  marginRight: 15,
                }}
                borderRadius={10}
                key={i}
              />
            );
          })}
        </ScrollView>
      </Box>
      <SuperStar data={data} />
      <PetHospital />
      <HoneyTip />
    </ScrollView>
  );
}
