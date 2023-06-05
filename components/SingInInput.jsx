import React, { useState } from 'react';
import { Stack, Input, Box, Text } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function SingInInput({
  title,
  type,
  setFunc,
  error,
  titleP,
  typeP,
  setFuncP,
  errorP,
}) {
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: '90%',
          md: '25%',
        }}
        borderRadius={25}
        InputLeftElement={
          <Box
            backgroundColor={'#5197F2'}
            borderRadius={50}
            w={10}
            h={10}
            justifyContent={'center'}
            alignItems={'center'}
            ml={1}
            person
          >
            <AntDesign name="mail" size={14} color="white" />
          </Box>
        }
        placeholder={type}
        placeholderTextColor={'black'}
        fontFamily={'SCDream5'}
        onChangeText={(text) => setFunc(text)}
      />
      <Text w={'80%'} color={'yellow.500'}>
        {error}
      </Text>
      <Input
        w={{
          base: '90%',
          md: '25%',
        }}
        borderRadius={25}
        InputLeftElement={
          <Box
            backgroundColor={'#5197F2'}
            borderRadius={50}
            w={10}
            h={10}
            justifyContent={'center'}
            alignItems={'center'}
            ml={1}
          >
            <EvilIcons name="lock" size={24} color="white" />
          </Box>
        }
        placeholder={typeP}
        placeholderTextColor={'black'}
        fontWeight={700}
        secureTextEntry={typeP === 'password' ? true : false}
        onChangeText={(text) => setFuncP(text)}
      />
      <Text w={'80%'} color={'yellow.500'}>
        {errorP}
      </Text>
    </Stack>
  );
}
