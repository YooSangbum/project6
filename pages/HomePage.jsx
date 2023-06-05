import { useState, useEffect } from 'react';

import { Box, ScrollView, Text, HStack, Stack } from 'native-base';

import ImageBlurLoading from 'react-native-image-blur-loading';

import HeaderComponent from '../components/HeaderComponent';
import HoneyTip from '../components/HoneyTip';
import HospitalComponent from '../components/HospitalComponent';
import SuperStar from '../components/SuperStar';
import TapComponent from '../components/TapComponent';

export default function HomePage({ navigation, route, hospital, data }) {
  const goShow = () => {
    navigation.navigate('ShowPage');
  };
  const goPetHospital = () => {
    navigation.navigate('PetHospitalPage');
  };
  const goHoneyTip = () => {
    navigation.navigate('HoneyTipPage');
  };
  const petH = hospital.slice(0, 3);

  return (
    <ScrollView backgroundColor={'#fff'}>
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
      <SuperStar content={data} navigation={navigation} route={route} />
      <Box backgroundColor={'#fff'} px={'16px'} pt={12} pb={1}>
        <HStack justifyContent={'space-between'} alignItems={'center'} mb={4}>
          <Text
            color={'#EC7542'}
            fontFamily={'SUIT-Medium'}
            fontSize={16}
            onPress={goPetHospital}
          >
            우리동네 <Text color={'#000'}>동물병원</Text>
          </Text>
          <Text
            color={'#ec4242'}
            fontSize={10}
            fontFamily={'SUIT-Medium'}
            onPress={goPetHospital}
          >
            더보기 &gt;
          </Text>
        </HStack>
      </Box>
      {petH.map((hospital, i) => {
        return (
          <HospitalComponent
            hospital={hospital}
            key={i}
            route={route}
            navigation={navigation}
          />
        );
      })}
      <HoneyTip navigation={navigation} />
    </ScrollView>
  );
}
